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

export function AnimateJumbotron () {
  document.addEventListener('DOMContentLoaded', () => {
    const curveOne = document.getElementById('jumbo-curve-1'),
    duration = 10000;

    if (curveOne) {
      const svg = anime({
        targets: [curveOne],
        d: "M0.046875,203 C451.010156,77.90625 819.426823,10.4166667 1105.29687,0.53125 C1413.27285,-10.1185917 1720.82607,634.370357 2059.375,611.252515 C2192.19888,602.182624 2608.62921,323.719189 2694.04687,303.59375 C2905.99479,253.65625 3074.66146,363.738941 3200.04688,633.841823 L3200.04688,740.560573 C2477.62674,937.395191 1932.93403,1035.8125 1565.96875,1035.8125 C1199.00347,1035.8125 677.013889,937.395191 0,740.560573 L0.046875,203 Z",
        fill: "#00FF00",
        easing: 'linear',
        duration: duration,
        loop: true,
        direction: 'alternate'
      })
    }
  })
}
