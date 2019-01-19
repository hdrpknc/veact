import { App } from './components/App.js';

const someData = {
    rows: [{name : "eins", id: "1"}, {name : "zwei", id: "2"}],
    version: 1
  };
  
// and then ...
document.body.appendChild(
     App(someData)
  );
