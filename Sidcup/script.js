let crsr = document.querySelector("#cursor");
let blur = document.querySelector("#cursor-blur");

let prevX = 0;
let prevY = 0;

function updateCursorPos(dets) {
  let newX = dets.x;
  let newY = dets.y;

  if (Math.abs(newX - prevX) > 1 || Math.abs(newY - prevY) > 1) {
    crsr.style.transform = `translate(${newX}px, ${newY}px)`;
    blur.style.transform = `translate(${newX - 200}px, ${newY - 200}px)`;

    prevX = newX;
    prevY = newY;
  }
}

document.addEventListener("mousemove", function (dets) {
  requestAnimationFrame(() => {
    updateCursorPos(dets);
  });
});

let h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = "scale(4)";
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.transform = "translate(-50%, -50%)"; // Reset to original position
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});
//  ============ Navigation =======================
gsap.to("#nav",{
    backgroundColor:"#000",
    height:"90px",
    duration:1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2
    }
})
//  ============ Main =======================

gsap.to("#main",{
    backgroundColor:"#000",
        scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})
gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
  gsap.from(".card", {
    scale: 0.5,
    // opacity:0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      // markers:false,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
  gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 45%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });
