(function(root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.CatalogCore = factory();
})(typeof window !== 'undefined' ? window : globalThis, function() {
  const categories = {'agent-readiness':'Agent access','landing-page-design':'Design','product-ux-writing':'Writing','vibe-ui':'Design'};
  function search(skills, query = '', category = 'All skills') {
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    return skills.filter(skill => (category === 'All skills' || categories[skill.name] === category) && terms.every(term => `${skill.name} ${skill.description} ${categories[skill.name]}`.toLowerCase().includes(term)));
  }
  function route(hash, skills) {
    if (!hash || hash === '#' || hash === '#/' || hash === '#main') return {type:'catalog'};
    const match = /^#\/skill\/([^/]+)$/.exec(hash);
    if (!match) return {type:'missing'};
    let name;
    try { name = decodeURIComponent(match[1]); } catch { return {type:'missing'}; }
    const skill = skills.find(item => item.name === name);
    return skill ? {type:'detail', skill} : {type:'missing'};
  }
  async function copy(text, writer) {
    try { if (typeof writer !== 'function') return false; await writer(text); return true; } catch { return false; }
  }
  function escape(text) { return String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  return {categories, search, route, copy, escape};
});
