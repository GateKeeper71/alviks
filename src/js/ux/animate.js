import anime from 'animejs'

export function AnimateCurve () {
  document.addEventListener("DOMContentLoaded", () => {
    const curveTop = document.getElementById('buuu'),
    curveBottom = document.getElementById('muuu'),
    duration = 6000;

    if (curveTop) {
      const svgAnime = anime({
        targets: [curveTop],
        d: "M0,12.9774643 C339.135417,-10.0283452 688.375,-0.122095232 1047.71875,42.6962143 C1407.0625,85.5145238 1738.35938,82.2124405 2041.60938,32.7899643 L2041.60938,75.3524643 L0,75.3524643 L0,12.9774643 Z",
        easing: 'linear',
        duration: duration,
        loop: true,
        direction: "alternate"
      })
    }
    if (curveBottom) {
      const svgAnimeBottom = anime({
        targets: [curveBottom],
        d: "M0,33.6579177 C516.21875,11.2193059 883.520833,17.4757098 1101.90625,52.4271294 C1320.29167,87.378549 1618.41146,81.1221451 1996.26562,33.6579177 L1996.26562,0 L0,0 L0,33.6579177 Z",
        easing: 'linear',
        duration: duration,
        loop: true,
        direction: "alternate"
      })
    }
  })
}
