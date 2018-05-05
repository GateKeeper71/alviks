import { AnimateCurve } from './ux/animate'
import { Navbar } from './ux/navbar'

// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

const animateCurve = new AnimateCurve();
const navbar = new Navbar();
