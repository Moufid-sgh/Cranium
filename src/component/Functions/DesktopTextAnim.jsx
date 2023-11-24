import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const DesktopTextAnim = () => {

    let mm = gsap.matchMedia();

    let tl = gsap.timeline();
    mm.add("(min-width: 768px)", () => {

        tl.from('.split-title', {
            scrollTrigger: {
                trigger: ".split-title",
                start: 'top 90%',
                end: 'center 80%',
                scrub: true,
                once: true
            },
            opacity: 0.1,
            stagger: 0.2,
            ease: "back.out",
        })
        .from(".char", {
            scrollTrigger: {
                trigger: ".char",
                start: 'top 75%',
                end: 'bottom 53%',
                scrub: true,
                once: true
            },
            opacity: 0.1,
            stagger: 0.2,
            ease: "back.out",
        })

        //---third section
        tl.from('.split-title-2', {
            scrollTrigger: {
                trigger: ".split-title-2",
                start: 'top 90%',
                end: 'center 80%',
                scrub: true,
                once: true
            },
            opacity: 0.1,
            stagger: 0.2,
            ease: "back.out",
        })
        .from(".char-2", {
            scrollTrigger: {
                trigger: ".char-2",
                start: 'top 75%',
                end: 'bottom 53%',
                scrub: true,
                once: true
            },
            opacity: 0.1,
            stagger: 0.2,
            ease: "back.out",
        })
    });
}
