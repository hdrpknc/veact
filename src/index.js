import { App } from './components/App.js';

const someData = {
    rows: "Table",
    version: 1
  };
  
// and then ...
document.body.appendChild(
     App(someData)
  );
