import {div} from './veact.js';
// const Header = require("./components/Header");
// const Table = require("./components/Table");

const someData = {
    rows: " ",
    version: 1
  };
  
const App = props => (
    div({ id: `app` },
    Header({ version: props.version }),
    Table({ rows: props.rows }),
    )
  );

// and then ...
document.body.appendChild(
     App(someData)
  );

  console.log(count + ability);