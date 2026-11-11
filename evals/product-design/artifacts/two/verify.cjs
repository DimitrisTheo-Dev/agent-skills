'use strict';
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const root = __dirname;
const elements = new Map();
let filters = [], copyButtons = [], selectionCount = 0, assertions = 0;
const check = (description, callback) => { callback(); assertions++; console.log(`PASS ${description}`); };
class Element {
  constructor(id='') { this.id=id; this.events={}; this.dataset={}; this.attributes={}; this.value=''; this.hidden=false; this.disabled=false; this.isConnected=true; this.tagName='DIV'; this.textContent=''; this.classes=new Set(); this.classList={add:(name)=>this.classes.add(name),remove:(name)=>this.classes.delete(name)}; }
  set innerHTML(value) {
    this.html=value;
    if (this.id==='main') { filters=[]; copyButtons=[]; }
    for (const match of value.matchAll(/<(\w+)\b([^>]*\bid="([^"]+)"[^>]*)>/g)) { const element=new Element(match[3]);element.tagName=match[1].toUpperCase();const v=match[2].match(/value="([^"]*)"/); if(v)element.value=v[1];elements.set('#'+element.id,element); }
    for (const match of value.matchAll(/<button\b([^>]*)>/g)) {
      const element = new Element();
      const cat = match[1].match(/data-category="([^"]*)"/);
      const copy = match[1].match(/data-copy="([^"]*)"/);
      if (cat) {element.dataset.category=cat[1];filters.push(element);}
      if (copy) {element.dataset.copy=copy[1];copyButtons.push(element);}
    }
  }
  get innerHTML() { return this.html || ''; }
  addEventListener(type,callback) { this.events[type]=callback; }
  setAttribute(name,value) { this.attributes[name]=value; }
  focus() { document.activeElement=this; }
  scrollIntoView() {}
  querySelector(selector) { if(selector==='button') return this.childButton ||= new Element(); return null; }
}
for (const id of ['main','announcement','theme-toggle','theme-label','theme-icon']) elements.set('#'+id,new Element(id));
elements.set('.skip-link',new Element('skip-link'));
const document = {querySelector:selector=>elements.get(selector)||null,querySelectorAll:selector=>selector==='.filter'?filters:selector==='[data-copy]'?copyButtons:[],documentElement:{dataset:{theme:'light'}},activeElement:new Element(),events:{},addEventListener(type,handler){this.events[type]=handler;},createRange(){return{selectNodeContents(){selectionCount++;}};}};
const window = {location:{hash:''},events:{},scrollTo(){},addEventListener(type,handler){this.events[type]=handler;},getSelection(){return{removeAllRanges(){},addRange(){}};}};
const navigator = {clipboard:{writeText:async value=>{navigator.lastCopied=value;}}};
const sandbox = {window,document,navigator,localStorage:{setItem(){}},console};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root,'data.js'),'utf8'),sandbox);
vm.runInContext(fs.readFileSync(path.join(root,'app.js'),'utf8'),sandbox);
const api = window.SkillIndex;
(async()=>{
check('all four supplied skills appear',()=>assert.equal(api.filterSkills('','all').length,4));
check('category filters return 3 design / 1 agent skill',()=>{assert.equal(api.filterSkills('','design').length,3);assert.equal(api.filterSkills('','agents').length,1);});
check('search normalizes invocation, case and hyphens',()=>{assert.equal(api.filterSkills('$VIBE-UI','all')[0].name,'vibe-ui');assert.equal(api.filterSkills('landing page','all')[0].name,'landing-page-design');});
check('multiple query terms must match',()=>assert.equal(api.filterSkills('agent blocked','all')[0].name,'agent-readiness'));
const search=elements.get('#search');search.value='nothing-matches-123';search.events.input({target:search});
check('no-results state appears and offers recovery',()=>assert.match(elements.get('#results').innerHTML,/No skills found/));
elements.get('#reset-search').events.click();
check('reset clears query and restores four results',()=>{assert.equal(elements.get('#search').value,'');assert.equal(elements.get('#result-count').textContent,'04 skills');});
let copied = 0;
for (const skill of window.SKILLS) {
  window.location.hash='#skill/'+skill.name;window.events.hashchange();
  check(`${skill.name}: original source and invocation rendered`,()=>{assert.ok(elements.get('#main').innerHTML.includes(skill.source));assert.ok(elements.get('#main').innerHTML.includes(skill.invocation));});
  for (const kind of ['install','invocation']) {const button=copyButtons.find(b=>b.dataset.copy===kind);await button.events.click();check(`${skill.name}: exact ${kind} copied only after resolution`,()=>{assert.equal(navigator.lastCopied,skill[kind]);assert.match(elements.get('#'+kind+'-feedback').textContent,/copied/);});copied++;}
}
check('vibe-ui has both source example filenames',()=>{assert.ok(elements.get('#main').innerHTML.includes('invocations.md'));assert.ok(elements.get('#main').innerHTML.includes('context-to-business.md'));});
let button=copyButtons.find(b=>b.dataset.copy==='install');
navigator.clipboard.writeText=async()=>{throw new Error('denied');};await button.events.click();
check('clipboard rejection exposes manual-copy recovery',()=>{assert.ok(elements.get('#install-feedback').classes.has('error'));assert.match(elements.get('#install-feedback').innerHTML,/Select text/);assert.equal(button.disabled,false);});
elements.get('#install-feedback').querySelector('button').events.click();
check('manual recovery selects the command source',()=>assert.equal(selectionCount,1));
navigator.clipboard=undefined;await button.events.click();
check('missing Clipboard API also exposes recovery',()=>assert.match(elements.get('#install-feedback').innerHTML,/Clipboard access is unavailable/));
navigator.clipboard={writeText:async value=>{navigator.lastCopied=value;}};await button.events.click();
check('retry after failure succeeds and clears error',()=>{assert.equal(navigator.lastCopied,window.SKILLS[3].install);assert.equal(elements.get('#install-feedback').classes.has('error'),false);});
window.location.hash='#skill/landing-page-design';window.events.hashchange();
check('missing examples are explicit',()=>assert.match(elements.get('#main').innerHTML,/No example files included/));
window.location.hash='#skill/%E0%A4%A';window.events.hashchange();
check('malformed detail link has recoverable not-found state',()=>assert.match(elements.get('#main').innerHTML,/Skill not found/));
window.location.hash='#catalog';window.events.hashchange();
const activeSearch=elements.get('#search');activeSearch.value='design';activeSearch.events.input({target:activeSearch});window.location.hash='#skill/vibe-ui';window.events.hashchange();window.location.hash='#catalog';window.events.hashchange();
check('query survives detail round trip',()=>assert.equal(elements.get('#search').value,'design'));
elements.get('#theme-toggle').events.click();
check('theme toggle updates theme and accessible name',()=>{assert.equal(document.documentElement.dataset.theme,'dark');assert.equal(elements.get('#theme-toggle').attributes['aria-label'],'Switch to light theme');});
check('untrusted source HTML is escaped',()=>{const rendered=api.richSource('<img src=x onerror=alert(1)>');assert.ok(rendered.includes('&lt;img'));assert.ok(!rendered.includes('<img'));});
check('source revision parses full pinned commit',()=>assert.equal(api.sourceRevision(window.SKILLS[0]),'bd1aa8023c73064a330ceede91530ee289d3e259'));
console.log(`\n${assertions} deterministic checks passed; ${copied} exact command copy successes. Mock DOM/clipboard only; no browser rendering or skill evaluations performed.`);
})().catch(error=>{console.error(error);process.exitCode=1;});
