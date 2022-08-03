export function html(htmlStrings, ...parts) {
  const htmlString = htmlStrings.reduce((acc, cur, i) => `${acc}${cur}${parts[i] || ''}`, '');
  const template = document.createElement('template');
  template.innerHTML = htmlString;
  return template.content;
}

export function removeChildren(element) {
  while (element.lastChild) {
    element.lastChild.remove();
  }
}

export function select(selector, parent = document.body) {
  return parent.querySelector(selector);
}

export function selectAll(selector, parent = document.body) {
  return [...parent.querySelectorAll(selector)];
}
