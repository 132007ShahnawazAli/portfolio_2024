import Lenis from 'lenis'

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';


import './style.css'

document.addEventListener('DOMContentLoaded', () => {
        const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
            curX += (tgX - curX) / 20;
            curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
                move();
            });
    }

    window.addEventListener('mousemove', (event) => {
            tgX = event.clientX;
            tgY = event.clientY;
        });

    move();
});

const lenis = new Lenis()
lenis.on('scroll', (e) => {
    console.log(e);
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);


gsap.registerPlugin(ScrollTrigger);
const splitTypes = document.querySelectorAll('.reveal-type')

splitTypes.forEach((words, i) => {
    const text = new SplitType(words, {
        types: 'words',
    })

    gsap.from(text.words, {
        scrollTrigger: {
            trigger: words,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            // markers: true,
        },
        mixBlendMode: 'overlay',
        // opacity: .2,
        stagger: 0.1,
    })
})
