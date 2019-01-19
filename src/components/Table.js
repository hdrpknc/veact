import { div } from '../libs/veact.js';
import { tablerow } from './TableRow.js';

export const Table = props => div({ className: `skill-table` }, tablerow(props.rows), props.rows);
