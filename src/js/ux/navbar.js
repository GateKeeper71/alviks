import anime from 'animejs'
import Headroom from 'headroom.js'

export function Navbar () {
  document.addEventListener("DOMContentLoaded", () => {

    /* Headroom added to navbar. Visible on scoll up */
    const navElem = document.getElementById('main-nav'),
    headroom = new Headroom(navElem);

    headroom.init();

    /* Navbar folding clickable submenu */
    const list = document.querySelectorAll('.am-has-submenu');
    list.forEach((item) => {
      item.addEventListener('click', (evt) => {
        evt.preventDefault();

        const parentElemSibling = evt.target.parentElement.nextElementSibling;

        parentElemSibling.classList.toggle('dn-ns');

        parentElemSibling.classList.contains('dn-ns') ? blob.reverse() : blob.play();

      })
    })

    anime.easings['myCustomEasingName'] = function(t) {
      return Math.pow(Math.sin(t * 3), 3);
    }

    const blob = anime({
      targets: '.am-submenu .db',
      translateY: function(el, i) {
        return (i + 1) * 10;
      },
      duration: 300,
      delay: function(el, i) {
        return i * 100;
      },
      autoplay: false,
      easing: 'myCustomEasingName'
    });

    const menuBtn = document.getElementById('menu');
    const sidebar = document.getElementById('sidebar');
    menuBtn.addEventListener('click', (e) => {
      console.log('j');
      navElem.classList.toggle('headroom');
      navElem.classList.toggle('fixed');
      menuBtn.classList.toggle('closed');
      menuBtn.classList.toggle('alvik-1');
      menuBtn.classList.toggle('off-white');
      sidebar.classList.toggle('slider-reset');
    })

  })
}
