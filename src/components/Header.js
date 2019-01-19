import { header } from '../libs/veact.js';
import { h1 } from '../libs/veact.js';
import { a } from '../libs/veact.js';

export const Header = props => (
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