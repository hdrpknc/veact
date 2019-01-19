import { div } from '../libs/veact.js';
import { Header } from './Header.js';
import { Table } from './Table.js';


export const App = props => (
    div({ id: `app` },
    Header({ version: props.version }),
    Table({ rows: props.rows }),
    )
  );