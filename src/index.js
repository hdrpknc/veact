import { App } from './components/App.js';

const someData = {
    rows: 2,
    version: 1
  };
  
// and then ...
document.body.appendChild(
     App(someData)
  );
