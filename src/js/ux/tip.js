import Tooltip from 'tooltip.js'
import Popper from 'popper.js'

export function Tip () {
  document.addEventListener('DOMContentLoaded', () => {
    const tools = document.querySelectorAll('.am-tooltip-reference');

    tools.forEach((item) => {
      const sibling = item.nextElementSibling;

      item.addEventListener('click', (evt) => {
        evt.preventDefault();
        sibling.classList.toggle('dn');
        test.update();
      })

      const test = new Popper(item, sibling, {
        trigger: "click",
        placement: 'bottom',
      });

    })
  })
}
