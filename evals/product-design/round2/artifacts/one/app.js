(() => {
  'use strict';
  const data = window.SKILLS;
  const meta = {
    'agent-readiness': { category: 'Websites', summary: 'Help agents discover, read, and use your website or API.', tag: 'AGENT ACCESS' },
    'landing-page-design': { category: 'Websites', summary: 'Shape the story, structure, and next step of a landing page.', tag: 'LANDING PAGES' },
    'product-ux-writing': { category: 'Product copy', summary: 'Write interface copy that helps people complete their task.', tag: 'PRODUCT COPY' },
    'vibe-ui': { category: 'Visual design', summary: 'Art-direct, build, and refine an interface for its audience.', tag: 'VISUAL DESIGN' }
  };
  const $ = id => document.getElementById(id);
  let selected = data.find(s => s.name === location.hash.slice(1)) || data[0];
  let category = 'all'; let activeTab = 'setup'; let mobileDetail = !!location.hash; let timer;
  const escape = text => text.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  try { document.documentElement.dataset.theme = localStorage.getItem('round2-one-skill-index-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); } catch {}
  const updateThemeLabel = () => { const dark = document.documentElement.dataset.theme === 'dark'; $('theme').setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`); $('theme').title = $('theme').getAttribute('aria-label'); };
  updateThemeLabel();
  $('theme').addEventListener('click', () => { const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.theme = theme; try {localStorage.setItem('round2-one-skill-index-theme', theme);} catch {} updateThemeLabel(); });
  function matches() { const terms = $('search').value.trim().toLowerCase().split(/\s+/).filter(Boolean); return data.filter(skill => (category === 'all' || meta[skill.name].category === category) && terms.every(term => `${skill.name} ${skill.description} ${skill.instructions} ${meta[skill.name].category}`.toLowerCase().includes(term))); }
  function render() {
    const found = matches();
    if (!found.includes(selected)) selected = found[0] || null;
    $('result-count').textContent = `${found.length} ${found.length === 1 ? 'skill' : 'skills'}`;
    $('empty').hidden = !!found.length;
    document.querySelector('.index-foot').hidden = !found.length;
    $('skill-list').innerHTML = found.map(skill => `<button class="skill-row ${selected === skill ? 'active' : ''}" data-skill="${skill.name}" aria-pressed="${selected === skill}"><span class="row-number">0${data.indexOf(skill)+1} / ${meta[skill.name].tag}</span><span class="row-top"><span class="row-title">${skill.name}</span><span class="row-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg></span></span><p>${meta[skill.name].summary}</p></button>`).join('');
    document.querySelectorAll('[data-skill]').forEach(button => button.addEventListener('click', () => { selected = data.find(s => s.name === button.dataset.skill); activeTab = 'setup'; mobileDetail = true; history.replaceState(null, '', `#${selected.name}`); render(); if (matchMedia('(max-width:650px)').matches) { $('detail').scrollIntoView({block:'start'}); $('detail-heading').focus({preventScroll:true}); } }));
    renderDetail();
  }
  function codeBlock(text, kind) { return `<div class="code-block"><code>${escape(text)}</code><button class="copy-button" data-copy="${kind}" aria-label="Copy ${kind}">Copy <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="1"/><path d="M15 8V4H4v11h4"/></svg></button></div>`; }
  function renderDetail() {
    document.querySelector('.index-panel').classList.toggle('mobile-hidden', mobileDetail && !!selected);
    $('detail').classList.toggle('mobile-hidden', !mobileDetail);
    if (!selected) { $('detail').innerHTML = '<div class="detail-placeholder"><div class="placeholder-content"><span aria-hidden="true">[ &nbsp; ]</span>Your next skill might be a simpler search away.<br>Clear the filters to browse the collection.</div></div>'; return; }
    const s = selected;
    $('detail').innerHTML = `<button class="mobile-back" id="back">← Back to ${matches().length} skills</button><div class="detail-topline"><span class="tag">${meta[s.name].tag}</span><a class="source-link" href="${escape(s.source)}" target="_blank" rel="noopener noreferrer">View on GitHub <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg></a></div><h2 class="detail-title" id="detail-heading" tabindex="-1">${s.name}</h2><p class="detail-description">${escape(s.description)}</p><div class="tabs" role="tablist" aria-label="Skill information"><button class="tab ${activeTab === 'setup' ? 'active' : ''}" role="tab" id="tab-setup" aria-controls="tab-content" aria-selected="${activeTab === 'setup'}" tabindex="${activeTab === 'setup' ? 0 : -1}" data-tab="setup">Use this skill</button><button class="tab ${activeTab === 'source' ? 'active' : ''}" role="tab" id="tab-source" aria-controls="tab-content" aria-selected="${activeTab === 'source'}" tabindex="${activeTab === 'source' ? 0 : -1}" data-tab="source">Source</button><button class="tab ${activeTab === 'examples' ? 'active' : ''}" role="tab" id="tab-examples" aria-controls="tab-content" aria-selected="${activeTab === 'examples'}" tabindex="${activeTab === 'examples' ? 0 : -1}" data-tab="examples">Examples <small>${s.examples.length}</small></button></div><div id="tab-content" role="tabpanel" aria-labelledby="tab-${activeTab}" tabindex="0"></div>`;
    $('back').addEventListener('click', () => {mobileDetail=false; history.replaceState(null,'',location.pathname); render(); document.querySelector(`[data-skill="${selected.name}"]`).focus();});
    document.querySelectorAll('[data-tab]').forEach(button => {
      button.addEventListener('click', () => {activeTab = button.dataset.tab; renderDetail(); $('tab-'+activeTab).focus();});
      button.addEventListener('keydown', event => { const tabs=['setup','source','examples']; let index=tabs.indexOf(activeTab); if(event.key==='ArrowRight') index=(index+1)%3; else if(event.key==='ArrowLeft') index=(index+2)%3; else if(event.key==='Home') index=0; else if(event.key==='End') index=2; else return; event.preventDefault(); activeTab=tabs[index]; renderDetail(); $('tab-'+activeTab).focus(); });
    });
    if (activeTab === 'setup') $('tab-content').innerHTML = `<section class="step"><h3 class="step-heading"><span class="step-number">1</span> Install from your checkout</h3><p class="setup-copy">${escape(s.setup)}</p>${codeBlock(s.install,'install command')}</section><section class="step"><h3 class="step-heading"><span class="step-number">2</span> Invoke it in your prompt</h3><p class="setup-copy">Start with the skill name, then describe your task.</p>${codeBlock(s.invocation,'invocation')}</section><p class="tip"><span class="tip-icon"><svg viewBox="0 0 20 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 3v12h12m-5-5 5 5-5 5"/></svg></span><span><strong>Check the scope first.</strong> Read the source for modes, boundaries, and verification expectations.</span></p>`;
    if (activeTab === 'source') { $('tab-content').innerHTML = `<p class="source-info">Full SKILL.md from the supplied repository snapshot.<br>Linked reference files are available in the GitHub source.</p><pre class="source-text" tabindex="0"></pre>`; document.querySelector('.source-text').textContent = s.instructions; }
    if (activeTab === 'examples') {
      if (!s.examples.length) $('tab-content').innerHTML = '<div class="empty-examples"><strong>No examples in this snapshot.</strong>The source describes how to use this skill. Open “Use this skill” for the invocation text.</div>';
      else { $('tab-content').innerHTML = '<p class="source-info">Examples included with this skill in the supplied snapshot.</p>'; s.examples.forEach(example => { const h=document.createElement('h3');h.className='example-heading';h.textContent=example.name;const pre=document.createElement('pre');pre.className='example-text';pre.tabIndex=0;pre.textContent=example.content;$('tab-content').append(h,pre);}); }
    }
    document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', () => copy(button.dataset.copy === 'install command' ? s.install : s.invocation, button)));
  }
  async function copy(value,button) {
    try { if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable'); await navigator.clipboard.writeText(value); button.textContent='Copied'; $('toast').textContent=`${button.dataset.copy === 'install command' ? 'Install command' : 'Invocation'} copied`; $('toast').hidden=false; clearTimeout(timer); timer=setTimeout(() => {$('toast').hidden=true;},2400); setTimeout(() => { if(button.isConnected) button.innerHTML='Copy <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="1"/><path d="M15 8V4H4v11h4"/></svg>';},2400); }
    catch { $('manual-copy').value=value; $('copy-dialog').showModal(); $('manual-copy').focus(); $('manual-copy').select(); }
  }
  $('close-dialog').addEventListener('click',()=> $('copy-dialog').close());
  $('select-text').addEventListener('click',()=>{$('manual-copy').focus();$('manual-copy').select();});
  $('search').addEventListener('input',()=>{activeTab='setup';mobileDetail=false;render();});
  document.querySelectorAll('[data-category]').forEach(button=>button.addEventListener('click',()=>{category=button.dataset.category;activeTab='setup';mobileDetail=false;document.querySelectorAll('[data-category]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',b===button);});render();}));
  $('reset').addEventListener('click',()=>{$('search').value='';category='all';activeTab='setup';mobileDetail=false;document.querySelectorAll('[data-category]').forEach(b=>{b.classList.toggle('active',b.dataset.category==='all');b.setAttribute('aria-pressed',b.dataset.category==='all');});render();$('search').focus();});
  document.addEventListener('keydown',event=>{if(event.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)&&!$('copy-dialog').open){event.preventDefault();$('search').focus();}});
  render();
})();
