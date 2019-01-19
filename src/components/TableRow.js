import { div } from '../libs/veact.js';
import { button } from '../libs/veact.js';
import { p } from '../libs/veact.js';
import * as store from '../store.js';

export const TableRow = (initialData) => {
    let el = null;
  
    // called when the component is called
    const render = data => (
      div(
        { className: `table-row` },
        div(
          {
            className: `table-row__content`
          },
          button(
            { onclick: e => store.selectItemById(data.id) },
            `render again`,
          ),
          p(data.name),
        ),
      )
    );
  
    // when the data changes, update() will be called with the new data
    const update = (prevEl, newData) => {
      const nextEl = render(newData);
  
      if (nextEl.isEqualNode(prevEl)) {
        console.warn(`render() was called but there was no change in the rendered output`, el);
      } else {
        prevEl.parentElement.replaceChild(nextEl, prevEl);
      }
  
      return nextEl;
    };
  
    el = render(initialData);
  
    // the store will call this when data has changed that will affect this component
    store.listen(initialData.id, (newData) => {
      el = update(el, newData);
    });
  
    return el;
}