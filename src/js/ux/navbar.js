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
        console.log('boooom');
        evt.preventDefault();
        evt.target.nextElementSibling.classList.toggle('dn');
        //blog.play();
        //evt.target.nextElementSibling.classList.contains('dn') ? console.log('Contains') : console.log('NOOOOO');
        evt.target.nextElementSibling.classList.contains('dn') ? blob.reverse() : blob.play();

      })
    })

    anime.easings['myCustomEasingName'] = function(t) {
      return Math.pow(Math.sin(t * 3), 3);
    }

    const blob = anime({
      targets: '.absolute .db',
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
      sidebar.classList.toggle('slider-reset');
    })

  })
}
