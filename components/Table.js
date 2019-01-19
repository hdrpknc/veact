const {div} = require('../veact');

const Table = props => div({ className: `skill-table` }, props.rows);

module.exports = Table;