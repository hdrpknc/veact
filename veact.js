window.alert('Hallo Welt!');
function makeElement(type, text) {
    const el = document.createElement(type);
    const textNode = document.createTextNode(text);
    
    el.appendChild(textNode);
    
    return el;
  }
  
  const h1 = (text) => makeElement(`h1`, text);
  
  // and then
  document.body.appendChild(h1(`Hello, world.`));