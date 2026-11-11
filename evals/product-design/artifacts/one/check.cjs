// Dependency-free checks of catalog data and behavior. Does not launch a browser.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const core = require('./core.js');
const context = {window:{}};
vm.runInNewContext(fs.readFileSync(path.join(__dirname,'data.js'),'utf8'),context);
const skills=JSON.parse(JSON.stringify(context.window.CATALOG_SKILLS));
let count=0;
function check(label,fn){fn();count++;console.log('PASS '+label);}
check('All four supplied skills are present',()=>assert.equal(skills.length,4));
check('Browse with an empty query returns all skills',()=>assert.equal(core.search(skills).length,4));
check('Search matches a task description, case insensitively',()=>assert.deepEqual(core.search(skills,'MARKETING').map(s=>s.name),['landing-page-design']));
check('Multiple search terms must match the same skill',()=>assert.deepEqual(core.search(skills,'visual polish').map(s=>s.name),['vibe-ui']));
check('Category and query filters combine',()=>assert.deepEqual(core.search(skills,'landing','Design').map(s=>s.name),['landing-page-design']));
check('Design category contains the two design skills',()=>assert.equal(core.search(skills,'','Design').length,2));
check('An unmatched query returns no results',()=>assert.equal(core.search(skills,'zz-no-such-skill').length,0));
check('Every supplied detail route resolves its exact skill',()=>skills.forEach(s=>assert.equal(core.route('#/skill/'+s.name,skills).skill.name,s.name)));
check('Missing and malformed routes produce a missing state',()=>['#/skill/missing','#/skill/%E0%A4%A','#/unknown'].forEach(h=>assert.equal(core.route(h,skills).type,'missing')));
check('Root route opens the catalog',()=>assert.equal(core.route('#/',skills).type,'catalog'));
check('Three skills truthfully have no included examples',()=>assert.equal(skills.filter(s=>s.examples.length===0).length,3));
check('Vibe UI retains its two source examples',()=>assert.equal(skills.find(s=>s.name==='vibe-ui').examples.length,2));
check('HTML rendering escapes untrusted text',()=>assert.equal(core.escape('<script>"&'), '&lt;script&gt;&quot;&amp;'));
check('Local HTML assets exist',()=>{
 const html=fs.readFileSync(path.join(__dirname,'index.html'),'utf8');
 const refs=[...html.matchAll(/(?:src|href)="([^"#]+\.(?:js|css))"/g)].map(m=>m[1]);
 assert.equal(refs.length,4); refs.forEach(p=>assert.ok(fs.existsSync(path.join(__dirname,p))));
});
const inputPath=path.resolve(__dirname,'../../pilot-inputs/skills.json');
if(fs.existsSync(inputPath))check('All supplied fields match the original JSON exactly',()=>assert.deepEqual(skills,JSON.parse(fs.readFileSync(inputPath,'utf8'))));
const rendererContext={window:{CATALOG_SKILLS:skills,CatalogCore:core},document:{getElementById:()=>({})}};
vm.createContext(rendererContext);
const appSource=fs.readFileSync(path.join(__dirname,'app.js'),'utf8');
vm.runInContext(appSource.slice(0,appSource.indexOf('function renderCatalog'))+'\nthis.renderMarkdown=markdown;',rendererContext);
check('Every supplied instruction and example renders without an exception',()=>skills.forEach(s=>{
 assert.ok(rendererContext.renderMarkdown(s.instructions,s.source).includes('<h2>'));
 s.examples.forEach(e=>assert.ok(rendererContext.renderMarkdown(e.content,s.source+'/examples').length>0));
}));
check('Instruction rendering escapes embedded HTML',()=>assert.ok(rendererContext.renderMarkdown('<img src=x onerror=alert(1)>','https://example.com').includes('&lt;img')));
check('Instruction links do not allow javascript URLs',()=>assert.equal(rendererContext.renderMarkdown('[unsafe](javascript:alert)','https://example.com'),'<p>unsafe</p>'));
check('Fenced invocation text keeps the source dollar prefix',()=>assert.ok(rendererContext.renderMarkdown('```text\n$vibe-ui\n```','https://example.com').includes('<code>$vibe-ui</code>')));
(async()=>{
 let clipboard;
 assert.equal(await core.copy(skills[0].install,async text=>{clipboard=text;}),true);assert.equal(clipboard,skills[0].install);count++;console.log('PASS Successful copy returns success only after writer resolves, with the exact command');
 assert.equal(await core.copy(skills[0].invocation,async()=>{throw new Error('Permission denied');}),false);count++;console.log('PASS Clipboard rejection returns failure for manual-copy recovery');
 assert.equal(await core.copy(skills[0].invocation,null),false);count++;console.log('PASS Missing clipboard support returns failure');
 console.log(`${count} checks passed. Browser layout and interaction checks are not covered.`);
})().catch(error=>{console.error(error);process.exitCode=1;});
