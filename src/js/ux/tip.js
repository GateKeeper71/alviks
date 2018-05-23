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
        console.log(test);
        test.options.placement === 'bottom' ? test.options.placement = 'top' : test.options.placement = 'bottom';
        test.update();
      })

      const test = new Popper(item, sibling, {
        trigger: "click",
        placement: 'bottom',
      });

    })
  })
}
