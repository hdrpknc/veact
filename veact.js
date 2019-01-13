function makeElement(type, props, text) {
  const el = document.createElement(type);
  
  Object.keys(props).forEach(prop => {
   el[prop] = props[prop];
  });
  
  const textNode = document.createTextNode(text);
  
  el.appendChild(textNode);
  
  return el;
 }
 
 const h1 = (...args) => makeElement(`h1`, ...args);
 
 
 // and then ...
 document.body.appendChild(
  h1(
    { className: `title` },
    `Hello, world.`,
  )
 );