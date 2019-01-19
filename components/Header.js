const {header} = require('../veact');
const {h1} = require('../veact');
const {a} = require('../veact');

const Header = props => (
    header({ className: "header" },
      h1({ className: "header__title" }, "Welcome to veact.js"),
      a(
        {
          className: `header__help`,
          target: `_blank`,
          rel: `noopener noreferrer`,
          title: `Find out more about know it all, version ${props.version}`,
          href: "https://github.com/hdrpknc/veact/blob/master/README.md",
        },
        `What is veact.js?`,
      ),
    )
  );

module.exports = Header;