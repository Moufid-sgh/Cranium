import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export const SmoothScroll = () => {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      })
  
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
        ScrollTrigger.update()
      }
      requestAnimationFrame(raf)
}
