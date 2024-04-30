// ------------------ cursor---------------------
// <==================CURSOR ANIMATION==========================>
function cursor() {
    let cursor = document.querySelector(".cursor");
    let body = document.querySelector("body");
  
    // now we run an evenlisener
    body.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.clientX + "px",
        y: e.clientY + "px",
      });
    });
  }
  cursor();
//-------------------------- section 1 ------------------------------
function section1() {
    let tl = gsap.timeline();
    tl.from(".section1 nav", {
      y: -50,
      opacity: 0,
      duration: 1,
    });
    tl.from(".text-content h2, .text-content p", {
      y: 100,
      opacity: 0,
      duration: 1,
    });
  }
  section1();
  function section2() {
    
  }
  section2()