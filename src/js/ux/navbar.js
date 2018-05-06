import anime from 'animejs'

export function Navbar () {
  document.addEventListener("DOMContentLoaded", () => {
    console.log('Badam');
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

  })
}
