'use strict';
const skills = window.CATALOG_SKILLS;
const {categories, search, route, copy, escape:esc} = window.CatalogCore;
const main = document.getElementById('main');
const state = {query:'',category:'All skills',tab:'instructions'};
const categoryNames = ['All skills','Design','Writing','Agent access'];
let toastTimer;
let lastCopyButton;

function inlineMarkdown(value, base) {
  return esc(value)
    .replace(/`([^`]+)`/g,'<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g,(_,label,path)=>{
      const raw = path.replace(/&amp;/g,'&');
      const href = /^https?:\/\//i.test(raw) ? raw : (/^[a-z][a-z0-9+.-]*:/i.test(raw)||raw.startsWith('//')?'':base+'/'+raw);
      return href ? `<a href="${esc(href)}" target="_blank" rel="noreferrer">${label}</a>` : label;
    });
}

function markdown(source, base) {
  const lines = source.replace(/^---\n[\s\S]*?\n---\n/,'').trim().split('\n');
  let html='', paragraph=[], listType='', code=[], inCode=false;
  const flushParagraph = ()=>{if(paragraph.length){html+=`<p>${inlineMarkdown(paragraph.join(' '),base)}</p>`;paragraph=[];}};
  const closeList = ()=>{if(listType){html+=`</${listType}>`;listType='';}};
  for(let i=0;i<lines.length;i++) {
    const line=lines[i];
    if(/^```/.test(line)) {flushParagraph();closeList();if(inCode){html+=`<pre><code>${esc(code.join('\n'))}</code></pre>`;code=[];}inCode=!inCode;continue;}
    if(inCode){code.push(line);continue;}
    if(/^\|/.test(line)&&i+1<lines.length&&/^\|[\s|:-]+$/.test(lines[i+1])) {
      flushParagraph();closeList();
      const cells=row=>row.replace(/^\||\|$/g,'').split('|').map(x=>x.trim());
      html+='<div class="md-table"><table><thead><tr>'+cells(line).map(x=>`<th>${inlineMarkdown(x,base)}</th>`).join('')+'</tr></thead><tbody>';i+=2;
      while(i<lines.length&&/^\|/.test(lines[i])){html+='<tr>'+cells(lines[i]).map(x=>`<td>${inlineMarkdown(x,base)}</td>`).join('')+'</tr>';i++;}
      i--;html+='</tbody></table></div>';continue;
    }
    const heading=/^(#{1,3})\s+(.+)$/.exec(line);
    if(heading){flushParagraph();closeList();const n=heading[1].length+1;html+=`<h${n}>${inlineMarkdown(heading[2],base)}</h${n}>`;continue;}
    const item=/^\s*(?:([-*])|\d+\.)\s+(.+)$/.exec(line);
    if(item){flushParagraph();const type=item[1]?'ul':'ol';if(listType!==type){closeList();listType=type;html+=`<${type}>`;}html+=`<li>${inlineMarkdown(item[2],base)}</li>`;continue;}
    if(!line.trim()){flushParagraph();closeList();continue;}
    closeList();paragraph.push(line);
  }
  flushParagraph();closeList();if(inCode)html+=`<pre>${esc(code.join('\n'))}</pre>`;
  return html;
}

function renderCatalog() {
  document.title='Agent Skills — Find your next skill';
  main.innerHTML=`<section class="hero" aria-labelledby="catalog-title"><div><div class="eyebrow">A FIELD GUIDE FOR CODING AGENTS</div><h1 id="catalog-title">The right skill.<br><span class="accent-line">A better starting point.</span></h1><p>Find focused instructions for the task ahead. Read what a skill does, check its source, and put it to work with your coding agent.</p></div><ol class="how-it-works" aria-label="How to use this catalog"><li><span class="step-number">01</span><div><strong>Find your task</strong><small>Browse ${skills.length} skills or search by intent.</small></div></li><li><span class="step-number">02</span><div><strong>Read before you run</strong><small>See the full instructions and source.</small></div></li><li><span class="step-number">03</span><div><strong>Copy. Install. Invoke.</strong><small>Take the exact commands with you.</small></div></li></ol></section>
  <section aria-label="Browse skills"><div class="browse-controls"><div class="search-row"><div class="search-box"><span class="search-icon" aria-hidden="true">⌕</span><label class="sr-only" for="search">Search skills by name or task</label><input id="search" type="search" placeholder="Search by skill, task, or keyword…" autocomplete="off" value="${esc(state.query)}"><button class="clear-search" id="clear-search" aria-label="Clear search" ${state.query?'':'hidden'}>×</button><kbd class="search-shortcut" aria-hidden="true">/</kbd></div><div id="result-count" class="result-meta" role="status" aria-live="polite"></div></div><div class="filters" aria-label="Filter skills by task">${categoryNames.map(name=>`<button type="button" class="filter" data-category="${esc(name)}" aria-pressed="${state.category===name}">${esc(name)}<span class="filter-count">${name==='All skills'?skills.length:skills.filter(s=>categories[s.name]===name).length}</span></button>`).join('')}</div></div><div class="list-head"><span>THE COLLECTION</span><span>SELECT A SKILL TO GET STARTED</span></div><div id="skill-list"></div><div class="catalog-bottom"><span>Every command and instruction comes from the linked source.</span><a href="https://github.com/DimitrisTheo-Dev/agent-skills/tree/bd1aa8023c73064a330ceede91530ee289d3e259" target="_blank" rel="noreferrer">Browse the repository ↗</a></div></section>`;
  document.getElementById('search').addEventListener('input',event=>{state.query=event.target.value;renderResults();});
  document.getElementById('clear-search').addEventListener('click',()=>{state.query='';document.getElementById('search').value='';renderResults();document.getElementById('search').focus();});
  main.querySelectorAll('[data-category]').forEach(button=>button.addEventListener('click',()=>{state.category=button.dataset.category;main.querySelectorAll('[data-category]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.category===state.category)));renderResults();}));
  renderResults();
}

function renderResults() {
  const found=search(skills,state.query,state.category);
  document.getElementById('result-count').textContent=`${found.length} of ${skills.length} skills`;
  document.getElementById('clear-search').hidden=!state.query;
  document.getElementById('skill-list').innerHTML=found.length?found.map(skill=>`<a class="skill-row" href="#/skill/${encodeURIComponent(skill.name)}" aria-label="View ${esc(skill.name)}"><span class="row-index" aria-hidden="true">${String(skills.indexOf(skill)+1).padStart(2,'0')}</span><div class="skill-name">${esc(skill.name)}<code class="row-invocation">${esc(skill.invocation)}</code></div><p>${esc(skill.description)}</p><span class="category">${esc(categories[skill.name])}</span><span class="row-arrow" aria-hidden="true">↗</span></a>`).join(''):`<div class="empty"><span class="empty-mark" aria-hidden="true">∅</span><h2>No skills match${state.query?' “'+esc(state.query)+'”':''}</h2><p>Try a broader term like “design” or “review”, or clear your filters.</p><button class="primary-button" id="reset-filters">Clear search and filters <span aria-hidden="true">↗</span></button></div>`;
  const reset=document.getElementById('reset-filters');if(reset)reset.addEventListener('click',()=>{state.query='';state.category='All skills';renderCatalog();document.getElementById('search').focus();});
}

function codeBlock(text,kind) {return `<div class="code-block"><pre><code>${esc(text)}</code></pre><button class="copy-button" type="button" data-copy="${kind}"><span aria-hidden="true">⧉</span> Copy ${kind==='install'?'installation command':'invocation'}</button></div>`;}

function renderDetail(skill) {
  document.title=`${skill.name} — Agent Skills`;
  main.innerHTML=`<nav class="breadcrumb" aria-label="Breadcrumb"><a href="#/">← All skills</a><span aria-hidden="true">/</span><span aria-current="page">${esc(skill.name)}</span></nav><section class="detail-hero"><div class="eyebrow">${esc(categories[skill.name]).toUpperCase()} / SKILL</div><h1>${esc(skill.name)}</h1><p>${esc(skill.description)}</p></section><div class="detail-layout"><aside class="install-panel" aria-label="Use ${esc(skill.name)}"><section class="install-section"><div class="small-label">01 / INSTALL</div><h2>Add it to your agent</h2><p>${esc(skill.setup)}</p>${codeBlock(skill.install,'install')}</section><section class="install-section"><div class="small-label">02 / INVOKE</div><h2>Start with the skill name</h2><p>After installation, use this invocation in your coding agent and add your task.</p>${codeBlock(skill.invocation,'invocation')}</section><section class="install-section source-section"><div class="small-label">SOURCE</div><a class="source-link" href="${esc(skill.source)}" target="_blank" rel="noreferrer"><span>DimitrisTheo-Dev / agent-skills</span><span aria-hidden="true">↗</span></a><span class="source-meta">Pinned snapshot · <code>bd1aa802</code></span></section></aside><div class="detail-content"><div class="tabs" role="tablist" aria-label="Skill content"><button class="tab" id="tab-instructions" role="tab" aria-controls="content-panel" data-tab="instructions">Instructions</button><button class="tab" id="tab-examples" role="tab" aria-controls="content-panel" data-tab="examples">Examples<span class="tab-count">${skill.examples.length}</span></button></div><div id="content-panel" role="tabpanel" tabindex="0"></div></div></div>`;
  main.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',()=>handleCopy(button,skill[button.dataset.copy])));
  const tabs=Array.from(main.querySelectorAll('[data-tab]'));
  tabs.forEach((button,index)=>{
    button.addEventListener('click',()=>{state.tab=button.dataset.tab;renderTab(skill);});
    button.addEventListener('keydown',event=>{if(!['ArrowRight','ArrowLeft','Home','End'].includes(event.key))return;event.preventDefault();let next=event.key==='Home'?0:event.key==='End'?tabs.length-1:(index+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;state.tab=tabs[next].dataset.tab;renderTab(skill);tabs[next].focus();});
  });
  renderTab(skill);
}

function renderTab(skill) {
  main.querySelectorAll('[data-tab]').forEach(button=>{const active=button.dataset.tab===state.tab;button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;});
  const panel=document.getElementById('content-panel');panel.setAttribute('aria-labelledby','tab-'+state.tab);
  if(state.tab==='instructions') panel.innerHTML=`<div class="small-label">FROM THE SOURCE / SKILL.MD</div><article class="markdown">${markdown(skill.instructions,skill.source)}</article><details class="raw-source"><summary>View original SKILL.md text</summary><pre>${esc(skill.instructions)}</pre></details>`;
  else panel.innerHTML=skill.examples.length?`<p class="small-label">EXAMPLES INCLUDED IN THE SOURCE</p>${skill.examples.map(example=>`<article class="example-card"><div class="small-label">${esc(example.name)}</div><div class="markdown">${markdown(example.content,skill.source+'/examples')}</div></article>`).join('')}`:`<div class="empty-examples"><h2>No examples included</h2><p>The supplied source snapshot does not include example files for this skill. Read the instructions to see its scope and workflow.</p><button class="text-button" id="show-instructions">Read the instructions →</button></div>`;
  const show=document.getElementById('show-instructions');if(show)show.addEventListener('click',()=>{state.tab='instructions';renderTab(skill);document.getElementById('tab-instructions').focus();});
}

async function handleCopy(button,text) {
  const initial=button.dataset.copy==='install'?'<span aria-hidden="true">⧉</span> Copy installation command':'<span aria-hidden="true">⧉</span> Copy invocation';
  const writer=navigator.clipboard&&typeof navigator.clipboard.writeText==='function'?value=>navigator.clipboard.writeText(value):null;
  button.disabled=true;
  const success=await copy(text,writer);
  button.disabled=false;
  if(success) {
    button.dataset.state='copied';button.innerHTML='<span aria-hidden="true">✓</span> Copied';
    const toast=document.getElementById('toast');clearTimeout(toastTimer);toast.textContent=button.dataset.copy==='install'?'Installation command copied':'Invocation copied';toast.classList.add('visible');
    clearTimeout(button.copyTimer);
    button.copyTimer=setTimeout(()=>{button.innerHTML=initial;delete button.dataset.state;},2600);
    toastTimer=setTimeout(()=>{toast.classList.remove('visible');},2600);
  } else {
    lastCopyButton=button;document.getElementById('manual-copy').value=text;document.getElementById('copy-dialog').showModal();document.getElementById('select-copy').focus();
  }
}

function renderRoute(focus=false) {
  const current=route(location.hash,skills);state.tab='instructions';
  if(current.type==='catalog')renderCatalog();
  else if(current.type==='detail')renderDetail(current.skill);
  else{document.title='Skill not found — Agent Skills';main.innerHTML='<section class="empty"><span class="empty-mark" aria-hidden="true">∅</span><h1>Skill not found</h1><p>This skill is not in the current collection.</p><a class="primary-button" href="#/">Back to all skills</a></section>';}
  if(focus){main.focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});}
}

function themeLabel(){const dark=document.documentElement.dataset.theme==='dark';const button=document.getElementById('theme-toggle');button.setAttribute('aria-label',`Switch to ${dark?'light':'dark'} theme`);button.title=`Switch to ${dark?'light':'dark'} theme`;button.innerHTML=`<span aria-hidden="true">${dark?'☼':'◐'}</span>`;}
document.getElementById('theme-toggle').addEventListener('click',()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=theme;try{localStorage.setItem('catalog-theme',theme);}catch{}themeLabel();});
document.getElementById('close-dialog').addEventListener('click',()=>document.getElementById('copy-dialog').close());
document.getElementById('copy-dialog').addEventListener('close',()=>{if(lastCopyButton&&lastCopyButton.isConnected)lastCopyButton.focus();});
document.getElementById('select-copy').addEventListener('click',()=>{const field=document.getElementById('manual-copy');field.focus();field.select();});
document.addEventListener('keydown',event=>{if(event.key==='/'&&!event.ctrlKey&&!event.metaKey&&!event.altKey&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)&&!document.getElementById('copy-dialog').open){const field=document.getElementById('search');if(field){event.preventDefault();field.focus();}}});
document.querySelector('.skip-link').addEventListener('click',event=>{event.preventDefault();main.focus({preventScroll:true});main.scrollIntoView();});
window.addEventListener('hashchange',()=>renderRoute(true));
themeLabel();renderRoute();
