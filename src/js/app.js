import { AnimateCurve } from './ux/animate';
import { AnimateJumbotron } from './ux/animate';
import { Navbar } from './ux/navbar';
import { Tip } from './ux/tip';
import "./custom/search";
import makeSlider from "./custom/slider";

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
const animateJumbotron = new AnimateJumbotron();
const navbar = new Navbar();
const tooltip = new Tip();

makeSlider();
