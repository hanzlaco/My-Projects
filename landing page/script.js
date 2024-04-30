function name(params) {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

 document.addEventListener("DOMContentLoaded", function () {
   const scroll = new window.LocomotiveScroll({
     el: document.querySelector("#main"),
     smooth: true,
   });
 });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".smooth-scroll").style.transform
      ? "transform"
      : "fixed",
  });

  // --- RED PANEL ---
  gsap.from(".line-1", {
    scrollTrigger: {
      trigger: ".line-1",
      scroller: ".smooth-scroll",
      scrub: true,
      start: "top bottom",
      end: "top top",
      onUpdate: (self) => console.log(self.direction),
    },
    scaleX: 0,
    transformOrigin: "left center",
    ease: "none",
  });

  // --- ORANGE PANEL ---
  gsap.from(".line-2", {
    scrollTrigger: {
      trigger: ".orange",
      scroller: ".smooth-scroll",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%",
    },
    scaleX: 0,
    transformOrigin: "left center",
    ease: "none",
  });

  // --- PURPLE/GREEN PANEL ---
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".purple",
      scroller: ".smooth-scroll",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%",
    },
  });

  tl.from(".purple p", {
    scale: 0.3,
    rotation: 45,
    autoAlpha: 0,
    ease: "power2",
  })
    .from(
      ".line-3",
      { scaleX: 0, transformOrigin: "left center", ease: "none" },
      0
    )
    .to(".purple", { backgroundColor: "#28a92b" }, 0);

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
// locomotive js for smooth scrolling
//  gsap for animation
document.addEventListener("DOMContentLoaded", function () {
  const scroll = new window.LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
});

// gsap
let nav = document.querySelectorAll(".nlink");
gsap.from(nav, {
  duration: 2,
  opacity: 0, // Start with opacity set to 0
  y: 10,
  ease: "power2.out", // Use correct string format for easing
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#future .ved")
    .addEventListener("mouseover", function () {
      console.log("Mouseover event triggered");
      gsap.to("#future video", {
        opacity: 1,
        duration: 1,
        ease: "power4.easeOut",
      });
    });

  document
    .querySelector("#future .ved")
    .addEventListener("mouseleave", function () {
      console.log("Mouseleave event triggered");
      gsap.to("#future video", {
        opacity: 0,
        duration: 1,
        ease: "power4.easeOut",
      });
    });
});



Shery.textAnimate("#headings h1" /* Element to target.*/, {
  //Parameters are optional.
  style: 2,
  y: 10,
  delay: 0.3,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
});
gsap.from(".anim2", {
  y: 30,
  ease: Expo,
  opacity: 0,
  stagger:0.3,
  duration:2,
});

Shery.imageEffect("#ephemeral-img-wrapper img", {
  style: 2,
  config: {
    uFrequencyX: { value: 16.79, range: [0, 100] },
    uFrequencyY: { value: 6.87, range: [0, 100] },
    uFrequencyZ: { value: 24.43, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 6.29 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.75 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.24, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  
});
Shery.imageEffect(".img-eff img", {
  style: 2,
  config: {
    uFrequencyX: { value: 16.79, range: [0, 100] },
    uFrequencyY: { value: 6.87, range: [0, 100] },
    uFrequencyZ: { value: 24.43, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 6.29 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.75 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.24, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});
gsap.from("#ephemeral-img-wrapper img", {
  z: -.3,
    duration: 2,
  opacity:0,
  ease: Expo.easeInOut,
});



