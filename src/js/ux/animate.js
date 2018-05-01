import anime from 'animejs'

export function AnimateCurve () {
  document.addEventListener("DOMContentLoaded", () => {
    const curveTop = document.getElementById('buuu');
    if (curveTop) {
      const svgAnime = anime({
        targets: [curveTop],
        d: "M0,12.9774643 C339.135417,-10.0283452 688.375,-0.122095232 1047.71875,42.6962143 C1407.0625,85.5145238 1738.35938,82.2124405 2041.60938,32.7899643 L2041.60938,75.3524643 L0,75.3524643 L0,12.9774643 Z",
        easing: 'linear',
        duration: 10000,
        loop: true,
        direction: "alternate"
      })
    }
  })
}
