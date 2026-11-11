const $ = (selector) => document.querySelector(selector);
// Functional glyphs from Lucide; see THIRD_PARTY.md.
const uiIcons = {"moon": "<path d=\"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401\" />", "sun": "<circle cx=\"12\" cy=\"12\" r=\"4\" /> <path d=\"M12 2v2\" /> <path d=\"M12 20v2\" /> <path d=\"m4.93 4.93 1.41 1.41\" /> <path d=\"m17.66 17.66 1.41 1.41\" /> <path d=\"M2 12h2\" /> <path d=\"M20 12h2\" /> <path d=\"m6.34 17.66-1.41 1.41\" /> <path d=\"m19.07 4.93-1.41 1.41\" />", "search": "<path d=\"m21 21-4.34-4.34\" /> <circle cx=\"11\" cy=\"11\" r=\"8\" />", "arrow-up-right": "<path d=\"M7 7h10v10\" /> <path d=\"M7 17 17 7\" />", "chevron-left": "<path d=\"m15 18-6-6 6-6\" />"};
const glyph = name => `<svg viewBox="0 0 24 24" aria-hidden="true">${uiIcons[name]}</svg>`;
const presentation = {
  'vibe-ui': {title:'Vibe UI', subtitle:'Design & polish', category:'design', uses:['Shape a new interface around its audience','Refine typography, spacing and interactions','Review a design with concrete, visible evidence']},
  'landing-page-design': {title:'Landing pages', subtitle:'Story & conversion', category:'design', uses:['Define the offer and primary action','Show the product with useful, truthful proof','Build a clear story from first impression to action']},
  'product-ux-writing': {title:'UX writing', subtitle:'Labels, help & feedback', category:'writing', uses:['Write clear labels and action copy','Guide people through onboarding and forms','Explain loading, empty and error states']},
  'agent-readiness': {title:'Agent readiness', subtitle:'Discovery & access', category:'agents', uses:['Audit discoverability and access','Plan the smallest useful improvements','Verify changes against actual agent tasks']}
};
const order = Object.keys(presentation);
const skills = order.map(name => window.SKILLS.find(skill => skill.name === name)).filter(Boolean);
let filter = 'all';
let selected = skills[0];
let tab = 'overview';
let toastTimer;
let copySequence = 0;
const buttonTimers = new WeakMap();
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}
function renderList() {
  const query = $('#search').value.trim().toLowerCase();
  const matches = skills.map(skill => {
    const view = presentation[skill.name];
    const fields = [view.title, view.subtitle, skill.name, skill.invocation, skill.description, skill.instructions];
    const rank = fields.findIndex(value => value.toLowerCase().includes(query));
    return {skill, rank};
  }).filter(({skill,rank}) => rank >= 0 && (filter === 'all' || presentation[skill.name].category === filter))
    .sort((a,b) => a.rank - b.rank).map(({skill}) => skill);
  if (matches.length && !matches.includes(selected)) {
    selected = matches[0];
    if (matchMedia('(min-width:701px)').matches) history.replaceState(null,'',`#${selected.name}`);
    tab = 'overview';
    renderDetail();
  }
  if (!matches.length) {
    $('#detail').innerHTML = '<div class="detail-empty"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 21-4.34-4.34" /> <circle cx="11" cy="11" r="8" /></svg><h1>No skills found</h1><p>Try another word or clear your filters.</p><button class="primary" data-reset>Clear filters</button></div>';
    $('#detail').removeAttribute('aria-labelledby');
  } else if (!$('#skill-title')) {
    renderDetail();
  }
  $('#results').innerHTML = matches.map(skill => {
    const view = presentation[skill.name];
    return `<a class="skill" href="#${skill.name}" ${selected?.name === skill.name ? 'aria-current="page"' : ''}><span class="skill-text"><span class="skill-name">${view.title}</span><br><span class="skill-subtitle">${view.subtitle}</span></span></a>`;
  }).join('');
  $('#empty').hidden = matches.length > 0;
  $('#count').textContent = `${matches.length} ${matches.length === 1 ? 'skill' : 'skills'}`;
}
function renderDetail() {
  const view = presentation[selected.name];
  $('#detail').innerHTML = `
    <a class="back" href="#">${glyph('chevron-left')}Skills</a>
    <div class="detail-in">
      <header class="detail-header">
        <h1 id="skill-title">${view.title}</h1>
        <p>${view.subtitle}</p>
        <div class="invocation" role="group" aria-label="Use in Codex">
          <code>${escapeHTML(selected.invocation)}</code>
          <button class="primary" data-copy="invocation">Copy</button>
        </div>
      </header>
      <div class="detail-tabs" role="tablist" aria-label="Skill details">
        <button id="overview-tab" role="tab" aria-controls="overview-panel" aria-selected="${tab === 'overview'}" tabindex="${tab === 'overview' ? 0 : -1}" data-tab="overview">Overview</button>
        <button id="instructions-tab" role="tab" aria-controls="instructions-panel" aria-selected="${tab === 'instructions'}" tabindex="${tab === 'instructions' ? 0 : -1}" data-tab="instructions">Instructions</button>
      </div>
      <section id="overview-panel" role="tabpanel" aria-labelledby="overview-tab" ${tab !== 'overview' ? 'hidden' : ''}>
        <ul class="uses">${view.uses.map(use => `<li>${use}</li>`).join('')}</ul>
      </section>
      <section id="instructions-panel" role="tabpanel" aria-labelledby="instructions-tab" ${tab !== 'instructions' ? 'hidden' : ''}>
        <pre class="instructions" tabindex="0">${escapeHTML(selected.instructions)}</pre>
      </section>
      <div class="detail-foot">
        <details>
          <summary>Install locally</summary>
          <p>${escapeHTML(selected.setup)}</p>
          <div class="command"><code>${escapeHTML(selected.install)}</code><button class="secondary" data-copy="install">Copy command</button></div>
        </details>
        <a class="source-link" href="${escapeHTML(selected.source)}" target="_blank" rel="noreferrer">View source ${glyph('arrow-up-right')}</a>
      </div>
    </div>`;
  $('#detail').setAttribute('aria-labelledby','skill-title');
}
function route(focus = false) {
  const name = location.hash.slice(1);
  if (name === 'detail') {
    document.body.classList.add('detail-open');
    $('#detail').focus({preventScroll:true});
    return;
  }
  const next = skills.find(skill => skill.name === name);
  document.body.classList.toggle('detail-open',Boolean(next));
  if (next) {
    selected = next;
    tab = 'overview';
    renderDetail();
    if (focus) $('#detail').focus({preventScroll:true});
  }
  renderList();
  if (!next && focus) {
    const link = [...document.querySelectorAll('.skill')].find(item => item.hash === `#${selected.name}`);
    link?.focus({preventScroll:true});
  }
}
async function copyText(value, button) {
  const request = ++copySequence;
  try {
    await navigator.clipboard.writeText(value);
    if (request !== copySequence) return;
    $('#toast').textContent = 'Copied to clipboard';
    $('#toast').classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => $('#toast').classList.remove('show'),1800);
    if (button.isConnected) {
      const label = button.dataset.copy === 'install' ? 'Copy command' : 'Copy';
      clearTimeout(buttonTimers.get(button));
      button.textContent = 'Copied';
      buttonTimers.set(button,setTimeout(() => { if (button.isConnected) button.textContent = label; },1500));
    }
  } catch {
    if (request !== copySequence) return;
    $('#manual-text').value = value;
    if (!$('#manual-dialog').open) $('#manual-dialog').showModal();
    $('#manual-text').focus();
    $('#manual-text').select();
  }
}
$('#detail').addEventListener('click',event => {
  if (event.target.closest('[data-reset]')) resetFilters();
  const copy = event.target.closest('[data-copy]');
  if (copy) copyText(selected[copy.dataset.copy],copy);
  const target = event.target.closest('[data-tab]');
  if (target) selectTab(target.dataset.tab);
});
function selectTab(value) {
  tab = value;
  document.querySelectorAll('[data-tab]').forEach(button => {
    const active = button.dataset.tab === tab;
    button.setAttribute('aria-selected',active);
    button.tabIndex = active ? 0 : -1;
    if (active) button.focus();
  });
  $('#overview-panel').hidden = tab !== 'overview';
  $('#instructions-panel').hidden = tab !== 'instructions';
}
$('#detail').addEventListener('keydown',event => {
  if (!event.target.matches('[data-tab]')) return;
  if (['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) {
    event.preventDefault();
    selectTab(event.key === 'Home' ? 'overview' : event.key === 'End' ? 'instructions' : tab === 'overview' ? 'instructions' : 'overview');
  }
});
$('#search').addEventListener('input',renderList);
$('#search').addEventListener('keydown',event => {
  if (event.isComposing) return;
  if (event.key === 'Enter') $('#results a')?.click();
  if (event.key === 'Escape') { event.preventDefault();$('#search').value = '';renderList(); }
});
$('.filters').addEventListener('click',event => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  filter = button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed',item === button));
  renderList();
});
function resetFilters() {
  $('#search').value = '';
  document.querySelector('[data-filter="all"]').click();
  $('#search').focus();
}
$('#reset').addEventListener('click',resetFilters);
$('.brand').addEventListener('click',resetFilters);
$('#select-text').addEventListener('click',() => {$('#manual-text').focus();$('#manual-text').select();});
function setTheme(dark) {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  $('#theme').setAttribute('aria-label',`Switch to ${dark ? 'light' : 'dark'} appearance`);
  $('#theme').innerHTML = glyph(dark ? 'sun' : 'moon');
}
let savedTheme;
try {savedTheme = localStorage.getItem('skills-appearance');} catch {}
setTheme(savedTheme ? savedTheme === 'dark' : matchMedia('(prefers-color-scheme:dark)').matches);
$('#theme').addEventListener('click',() => {
  const dark = document.documentElement.dataset.theme !== 'dark';
  setTheme(dark);
  try {localStorage.setItem('skills-appearance',dark ? 'dark' : 'light');} catch {}
});
document.addEventListener('keydown',event => {
  if (event.key === '/' && !/INPUT|TEXTAREA/.test(document.activeElement.tagName) && !$('#manual-dialog').open) {
    event.preventDefault();
    if (matchMedia('(max-width:700px)').matches) location.hash = '';
    requestAnimationFrame(() => $('#search').focus());
  }
});
window.addEventListener('hashchange',() => route(true));
renderDetail();route();
