'use strict';
(() => {
  const skills = window.SKILLS;
  const main = document.querySelector('#main');
  const announcement = document.querySelector('#announcement');
  const labels = { 'agent-readiness':'Agent readiness', 'landing-page-design':'Design & content', 'product-ux-writing':'Design & content', 'vibe-ui':'Design & content' };
  const categoryKey = name => name === 'agent-readiness' ? 'agents' : 'design';
  const state = { query:'', category:'all' };
  const esc = text => String(text).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  const normalized = text => text.toLowerCase().replace(/[$_-]/g,' ').replace(/\s+/g,' ').trim();
  const filterSkills = (query, category) => {
    const terms = normalized(query).split(' ').filter(Boolean);
    return skills.filter(skill => (category === 'all' || categoryKey(skill.name) === category) && terms.every(term => normalized(`${skill.name} ${skill.description} ${labels[skill.name]}`).includes(term)));
  };
  const sourceRevision = skill => (skill.source.match(/\/tree\/([^/]+)/) || [,'unknown'])[1];
  const searchIcon = '<svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></svg>';
  const copyIcon = '<span aria-hidden="true">▢</span>';
  function rowsMarkup(results) {
    if (!results.length) return `<div class="empty"><div class="empty-mark" aria-hidden="true">[ ]</div><h2>No skills found.</h2><p>${state.query ? `Nothing matches “${esc(state.query)}”${state.category !== 'all' ? ' in this category' : ''}.` : 'There are no skills in this category.'} Try a task like “design” or “audit”.</p><button type="button" class="plain-button" id="reset-search">Clear search & filters</button></div>`;
    return `<ol class="skill-list">${results.map(skill => `<li><a href="#skill/${encodeURIComponent(skill.name)}" class="skill-link"><span class="row-number" aria-hidden="true">${String(skills.indexOf(skill)+1).padStart(2,'0')}</span><div><h2 class="skill-name">${esc(skill.name)}</h2><span class="skill-category">${esc(labels[skill.name])}</span></div><p class="skill-description">${esc(skill.description)}</p><span class="row-arrow" aria-hidden="true">↗</span></a></li>`).join('')}</ol>`;
  }
  function updateResults() {
    const results = filterSkills(state.query,state.category);
    document.querySelector('#results').innerHTML = rowsMarkup(results);
    document.querySelector('#result-count').textContent = `${String(results.length).padStart(2,'0')} ${results.length === 1 ? 'skill' : 'skills'}`;
    document.querySelector('#clear-query').hidden = !state.query;
    document.querySelectorAll('.filter').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.category === state.category)));
    const reset = document.querySelector('#reset-search');
    if (reset) reset.addEventListener('click',resetSearch);
    announcement.textContent = `${results.length} ${results.length === 1 ? 'skill' : 'skills'} found`;
  }
  function resetSearch() {
    state.query = ''; state.category = 'all';
    const search = document.querySelector('#search'); search.value = '';
    updateResults(); search.focus();
  }
  function renderCatalog() {
    document.title = 'Skill Index — Find a skill for your coding agent';
    main.innerHTML = `<section class="hero" aria-labelledby="page-title"><div><p class="eyebrow">A collection for coding agents</p><h1 id="page-title">Find the right skill.<br>Put it <em>to work.</em></h1></div><div class="hero-aside"><p>Focused instructions for the work ahead. Find your task, read the source, and give your coding agent a place to start.</p><div class="source-note"><span aria-hidden="true">↳</span><span>4 skills · source included · no account needed</span></div></div></section><section aria-label="Browse skills"><div class="catalog-toolbar"><div class="search-wrap">${searchIcon}<label class="sr-only" for="search">Search skills by name or task</label><input id="search" type="search" placeholder="Search by name or task…" value="${esc(state.query)}" autocomplete="off" spellcheck="false"><kbd class="search-key" aria-hidden="true">/</kbd><button class="search-clear" id="clear-query" aria-label="Clear search" type="button" ${state.query ? '' : 'hidden'}>×</button></div><div class="filters" role="group" aria-label="Filter skills"><button type="button" class="filter" data-category="all" aria-pressed="${state.category === 'all'}">All skills</button><button type="button" class="filter" data-category="design" aria-pressed="${state.category === 'design'}">Design & content</button><button type="button" class="filter" data-category="agents" aria-pressed="${state.category === 'agents'}">Agent readiness</button></div></div><div class="result-meta"><span id="result-count"></span><span>Browse the collection ↓</span></div><div id="results"></div></section><section class="catalog-end" aria-labelledby="how-title"><h2 id="how-title">Read it. Install it. Invoke it.</h2><p>Each skill includes its original instructions and an exact command to copy. Installation uses a local repository checkout; the detail page explains the setup.</p></section>`;
    document.querySelector('#search').addEventListener('input',event => { state.query = event.target.value; updateResults(); });
    document.querySelector('#clear-query').addEventListener('click',() => { state.query=''; document.querySelector('#search').value=''; updateResults(); document.querySelector('#search').focus(); });
    document.querySelectorAll('.filter').forEach(button => button.addEventListener('click',() => { state.category=button.dataset.category; updateResults(); }));
    updateResults();
  }
  function richSource(text) {
    // Only a small, escaping-first subset of Markdown is supported. Source HTML is never executed.
    return text.split(/(```[\s\S]*?```)/g).map(part => {
      if (part.startsWith('```')) return `<pre><code>${esc(part.replace(/^```[^\n]*\n?/,'').replace(/```$/,'').trimEnd())}</code></pre>`;
      return part.trim().split(/\n\s*\n/).filter(Boolean).map(block => {
        const heading = block.match(/^#{1,3} (.+)$/);
        return heading ? `<h3>${esc(heading[1])}</h3>` : `<p>${esc(block).replace(/\n/g,'<br>')}</p>`;
      }).join('');
    }).join('');
  }
  function commandBox(value, id, label) {
    return `<div class="code-box"><div class="code-topline"><span>${label}</span><button type="button" class="copy-button" data-copy="${id}" aria-label="Copy ${id === 'install' ? 'installation command' : 'invocation'}">${copyIcon}<span>Copy</span></button></div><pre id="${id}-text" tabindex="0" aria-label="${id === 'install' ? 'Installation command' : 'Invocation'}"><code>${esc(value)}</code></pre></div><div class="copy-feedback" id="${id}-feedback" role="status" aria-live="polite"></div>`;
  }
  function renderDetail(skill) {
    document.title = `${skill.name} — Skill Index`;
    const revision = sourceRevision(skill);
    const examples = skill.examples.length ? `<p class="examples-intro">Original example files included with this skill. These describe intended use; they are not evaluation results.</p>${skill.examples.map((example,index) => `<details class="example-file" ${index === 0 ? 'open' : ''}><summary>${esc(example.name)}</summary><div class="example-content">${richSource(example.content)}</div></details>`).join('')}` : `<div class="missing-examples"><strong>No example files included.</strong>The supplied source snapshot does not include examples for this skill. Read the instructions below the source link for its intended use.</div>`;
    main.innerHTML = `<a class="back-link" href="#catalog"><span aria-hidden="true">←</span> All skills</a><section class="detail-hero" aria-labelledby="page-title"><p class="eyebrow">${esc(labels[skill.name])}</p><h1 id="page-title">${esc(skill.name)}</h1><p class="description">${esc(skill.description)}</p></section><div class="detail-grid"><div class="detail-body"><section class="source-block" aria-labelledby="source-title"><p class="section-kicker">Know what you’re adding</p><h2 id="source-title">Open instructions. Exact source.</h2><a class="source-link" href="${esc(skill.source)}" target="_blank" rel="noopener noreferrer">View this skill on GitHub <span aria-hidden="true">↗</span></a><p class="source-caption">DimitrisTheo-Dev / agent-skills<br>Source snapshot at <span class="revision" title="${esc(revision)}">${esc(revision.slice(0,7))}</span>. The instructions and examples here come from this revision.</p></section><details class="source-accord"><summary>Read the full SKILL.md <span class="sr-only">for ${esc(skill.name)}</span></summary><pre class="raw-source" tabindex="0">${esc(skill.instructions)}</pre></details><section class="examples" aria-labelledby="examples-title"><p class="section-kicker">From the source</p><h2 id="examples-title">${skill.examples.length ? 'Examples to start from' : 'Examples'}</h2>${examples}</section><p class="detail-bottom">Looking for another approach? <a href="#catalog">Back to the collection →</a></p></div><aside class="command-panel" aria-labelledby="use-title"><p class="section-kicker">Make it part of your workflow</p><h2 id="use-title">Use this skill</h2><p>Two snippets, ready to take with you.</p><section class="command-step"><h3 class="step-label"><span class="step-number" aria-hidden="true">01</span> Install from your checkout</h3><p class="setup-copy">${esc(skill.setup)}</p>${commandBox(skill.install,'install','TERMINAL')}</section><section class="command-step"><h3 class="step-label"><span class="step-number" aria-hidden="true">02</span> Invoke in your coding agent</h3>${commandBox(skill.invocation,'invocation','AGENT PROMPT')}<p class="setup-copy">Add your task after the invocation. Support for this syntax depends on your coding agent.</p></section><p class="source-precision">Commands are copied exactly as supplied. Installation links the skill in your local checkout; it does not pin or download the source revision shown here.</p></aside></div>`;
    document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click',() => copyCommand(button, button.dataset.copy === 'install' ? skill.install : skill.invocation)));
  }
  async function copyCommand(button, value) {
    const kind = button.dataset.copy;
    const feedback = document.querySelector(`#${kind}-feedback`);
    button.disabled = true;
    try {
      if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('Clipboard API unavailable');
      await navigator.clipboard.writeText(value);
      if (!button.isConnected) return;
      button.innerHTML = '<span aria-hidden="true">✓</span><span>Copied</span>';
      feedback.classList.remove('error');
      feedback.textContent = kind === 'install' ? 'Installation command copied.' : 'Invocation copied.';
    } catch (error) {
      if (!button.isConnected) return;
      button.innerHTML = `${copyIcon}<span>Try again</span>`;
      feedback.classList.add('error');
      feedback.innerHTML = 'Clipboard access is unavailable. Select the text and copy it manually.<button class="manual-select" type="button">Select text</button>';
      feedback.querySelector('button').addEventListener('click',() => {
        const element = document.querySelector(`#${kind}-text`);
        const range = document.createRange(); range.selectNodeContents(element);
        const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range); element.focus();
      });
    } finally { button.disabled = false; }
  }
  function route(initial=false) {
    const hash = window.location.hash;
    if (!hash || hash === '#catalog' || hash === '#main') renderCatalog();
    else {
      let name = '';
      try { if (hash.startsWith('#skill/')) name = decodeURIComponent(hash.slice(7)); } catch (error) { /* Invalid URLs use the recoverable not-found state. */ }
      const skill = skills.find(item => item.name === name);
      if (skill) renderDetail(skill);
      else {
        document.title = 'Skill not found — Skill Index';
        main.innerHTML = '<section class="empty"><div class="empty-mark" aria-hidden="true">[?]</div><h1 id="page-title">Skill not found.</h1><p>This link does not match a skill in this collection.</p><a class="plain-button" href="#catalog">Browse all skills</a></section>';
      }
    }
    if (!initial) { window.scrollTo(0,0); main.focus({preventScroll:true}); }
  }
  function updateThemeButton() {
    const dark = document.documentElement.dataset.theme === 'dark';
    document.querySelector('#theme-label').textContent = dark ? 'Light' : 'Dark';
    document.querySelector('#theme-icon').textContent = dark ? '☀' : '◐';
    document.querySelector('#theme-toggle').setAttribute('aria-label',`Switch to ${dark ? 'light' : 'dark'} theme`);
  }
  document.querySelector('#theme-toggle').addEventListener('click',() => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('skill-index-theme',next); } catch (error) { /* Theme still works for this page. */ }
    updateThemeButton();
  });
  document.addEventListener('keydown',event => {
    if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName) && !document.activeElement.isContentEditable) {
      const input = document.querySelector('#search'); if (input) { event.preventDefault(); input.focus(); }
    }
    if (event.key === 'Escape' && document.activeElement.id === 'search' && state.query) { state.query=''; document.activeElement.value=''; updateResults(); }
  });
  document.querySelector('.skip-link').addEventListener('click',event => { event.preventDefault(); main.focus({preventScroll:true}); main.scrollIntoView({block:'start'}); });
  window.addEventListener('hashchange',() => route());
  updateThemeButton(); route(true);
  // Exposed deterministic functions support local checks without a browser or added dependencies.
  window.SkillIndex = Object.freeze({filterSkills, normalized, sourceRevision, richSource});
})();
