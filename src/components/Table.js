import { div } from '../libs/veact.js';
import { TableRow } from './TableRow.js';

export const Table = props => div({ className: `skill-table` }, TableRow(props.rows), TableRow(props.rows));
