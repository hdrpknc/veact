import { div } from './veact.js';
import { Header } from './components/Header.js';
import { Table } from './components/Table.js';
 
const someData = {
    rows: "Table",
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
