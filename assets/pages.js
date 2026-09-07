// Language is determined by the URL; navigation works without JavaScript.
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const english = document.documentElement.lang === 'en';
const prefix = english ? '/en' : '';
const sections = {research:'/research/', publications:'/publications/', teaching:'/teaching/', resources:'/resources/', bio:'/bio/', cv:'/bio/'};
function followFragment() {
  let id;
  try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
  if ([prefix + '/', prefix + '/index.html'].includes(location.pathname) && sections[id]) {
    location.replace(prefix + sections[id]);
    return;
  }
  const target = document.getElementById(id);
  if (!target) return;
  let opened = false;
  for (let node = target; node; node = node.parentElement) {
    if (node.tagName === 'DETAILS' && !node.open) { node.open = true; opened = true; }
  }
  if (opened) target.scrollIntoView();
}
window.addEventListener('hashchange', followFragment);
followFragment();
