import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const MobileTextAnim = () => {

    let mm = gsap.matchMedia();
    
    mm.add("(max-width: 767px)", () => {
        gsap.to(".text-reveal", {
            scrollTrigger: {
                trigger: ".text-reveal",
                scrub: 1,
                start: "top 53%",
                end: "center 55%",
            },
            opacity: 0,
        })

        gsap.to(".text-reveal-2", {
            scrollTrigger: {
                trigger: ".text-reveal-2",
                scrub: 1,
                start: "top 53%",
                end: "center 55%",
            },
            opacity: 0,
        })

        gsap.to(".text-reveal-3", {
            scrollTrigger: {
                trigger: ".text-reveal-3",
                scrub: 1,
                start: "top 53%",
                end: "center 55%",
            },
            opacity: 0,
        })
    })

}
