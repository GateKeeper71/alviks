import anime from 'animejs'

export function Navbar () {
  document.addEventListener("DOMContentLoaded", () => {
    console.log('Badam');
    const list = document.querySelectorAll('.am-has-submenu');
    list.forEach((item) => {
      item.addEventListener('click', (evt) => {
        evt.preventDefault();
        console.log('clicked');
        console.log(evt.target.nextElementSibling);
        evt.target.nextElementSibling.classList.add('wow');
      })
    })
  })
}
