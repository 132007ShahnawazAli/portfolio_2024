import "./style.css";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

// GSAP ScrollTrigger Plugin Registration
gsap.registerPlugin(ScrollTrigger);

// Lenis animation
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

document.addEventListener("DOMContentLoaded", () => {
  // Background animation
  // const interBubble = document.querySelector(".interactive");
  // let curX = 0;
  // let curY = 0;
  // let tgX = 0;
  // let tgY = 0;

  // function move() {
  //   curX += (tgX - curX) / 20;
  //   curY += (tgY - curY) / 20;
  //   interBubble.style.transform = `translate(${Math.round(
  //     curX
  //   )}px, ${Math.round(curY)}px)`;
  //   requestAnimationFrame(() => {
  //     move();
  //   });
  // }

  // window.addEventListener("mousemove", (event) => {
  //   tgX = event.clientX;
  //   tgY = event.clientY;
  // });

  // move();

  // ScrollTrigger Text Reveal Animation
  const splitTypes = document.querySelectorAll(".reveal-type");
  splitTypes.forEach((words, i) => {
    const text = new SplitType(words, {
      types: "words",
    });

    gsap.from(text.words, {
      scrollTrigger: {
        trigger: words,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        // markers: true,
      },
      mixBlendMode: "overlay",
      // opacity: .2,
      stagger: 0.1,
    });
  });

  // Works Heading Animation
  const worksHeadings = document.querySelectorAll(".works-heading");
  worksHeadings.forEach((chars, i) => {
    const text = new SplitType(chars, {
      types: "chars",
    });

    gsap.fromTo(
      text.chars,
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        scrollTrigger: {
          trigger: chars,
          start: "top 75%",
          end: "top 35%",
          scrub: true,
          // markers: true
        },
        stagger: 0.1,
        ease: "power1.in",
        onComplete: () => {
          gsap.to(document.querySelectorAll(".work-heading-wrapper p"), {
            opacity: 1,
            duration: 0.8,
            ease: "power1.in",
          });
        },
      }
    );
  });

  // Work Cards Animation
  const workCards = document.querySelectorAll(".work-card");

  workCards.forEach((card, i) => {
    const image = card.querySelector("img");
    const h4 = card.querySelector("h4");
    image.style.willChange = 'transform, opacity';
    h4.style.willChange = 'opacity';

    gsap.fromTo(
      image,
      {
        // scale: 0,
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
    
    gsap.fromTo(
      h4,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 70%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  });
});
