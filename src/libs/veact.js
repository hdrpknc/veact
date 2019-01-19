//html elements which veact.js supports
export const button = (...args) => makeElement("button", ...args);
export const div = (...args) => makeElement("div", ...args);
export const a = (...args) => makeElement("a", ...args);
export const header = (...args) => makeElement("header", ...args);
export const p = (...args) => makeElement("p", ...args);
export const span = (...args) => makeElement("span", ...args);
export const h1 = (...args) => makeElement("h1", ...args);

const attributeExceptions = [
  "role",
];

function appendText(el, text) {
  const textNode = document.createTextNode(text);
  el.appendChild(textNode);
}

function appendArray(el, children) {
  children.forEach((child) => {
    if (Array.isArray(child)) {
      appendArray(el, child);
    } else if (child instanceof window.Element) {
      el.appendChild(child);
    } else if (typeof child === `string`) {
      appendText(el, child);
    }
  });
}

function setStyles(el, styles) {
  if (!styles) {
    el.removeAttribute(`styles`);
    return;
  }

  Object.keys(styles).forEach((styleName) => {
    if (styleName in el.style) {
      el.style[styleName] = styles[styleName]; // eslint-disable-line no-param-reassign
    } else {
      console.warn(`${styleName} is not a valid style for a <${el.tagName.toLowerCase()}>`);
    }
  });
}

//the first argument will always be a tag name, such as "h1"
//the second argument could be: 
//  *An object defining the props for the element 
//  *A string defining some text to display
//  *A single element
//  *An array of elements
//After the second argument will be an element or an array of elements
function makeElement(type, textOrPropsOrChild, ...otherChildren) {
  const el = document.createElement(type);

  if (Array.isArray(textOrPropsOrChild)) {
    appendArray(el, textOrPropsOrChild);
  } else if (textOrPropsOrChild instanceof window.Element) {
    el.appendChild(textOrPropsOrChild);
  } else if (typeof textOrPropsOrChild === "string") {
    appendText(el, textOrPropsOrChild);
  } else if (typeof textOrPropsOrChild === "object") {
    Object.keys(textOrPropsOrChild).forEach((propName) => {
      if (propName in el || attributeExceptions.includes(propName)) {
        const value = textOrPropsOrChild[propName];

        if (propName === "style") {
          setStyles(el, value);
        } else if (value) {
          el[propName] = value;
        }
      } else {
        console.warn("${propName} is not a valid property of a <${type}>");
      }
    });
  }

  if (otherChildren) appendArray(el, otherChildren);

  return el;
}