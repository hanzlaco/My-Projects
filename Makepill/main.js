// <==================CURSOR ANIMATION==========================>
function cursor() {
  let cursor = document.querySelector(".cursor");
  let body = document.querySelector("body");

  // now we run an evenlisener
  body.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.x + "px",
      y: e.y + "px",
    });
  });
}
cursor();
// <==================SECTION 1 ANIMATION==========================>

function section1() {
  let tl = gsap.timeline();
  tl.from(".header", {
    y: -50,
    opacity: 0,
    duration: 1,
  });
  tl.from(".text-content h1, .text-content p", {
    y: 100,
    opacity: 0,
    duration: 1,
  });
}
section1();
// <==================SECTION 2 ANIMATION==========================>

function section2() {
  // Assuming these elements are declared globally
  let sectiontwo = document.querySelector(".section2");
  let video = document.getElementById('myVideo');
  let cursor = document.querySelector(".cursor");
  let body = document.querySelector("body");

  let isA = true; // Initial state

sectiontwo.addEventListener("click", (e) => {
  if (isA) {
    // Code for 'a'
    gsap.to(cursor, {
      height: "100px",
      width: "100px",
      innerHTML: `<i class="fa-solid fa-volume-mute"></i>`,
      fontSize: "25px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "white",
    });
  } else {
    // Code for 'b'
    gsap.to(cursor, {
      height: "100px",
      width: "100px",
      innerHTML: `<i class="fa-solid fa-volume-high"></i>`,
      fontSize: "25px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "white",
    });
  }

  // Toggle between 'a' and 'b'
  isA = !isA;
});

  sectiontwo.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      height: "100px",
      width: "100px",
      innerHTML: "<i class='fa-solid fa-volume-high'></i>",
      fontSize: "25px",
      color: "black",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "white",
    });

    gsap.to(body, {
      background: "#0f0f0f",
      color: "white",
    });
  });

  video.addEventListener('click', function () {
    this.muted = !this.muted;
  });

  sectiontwo.addEventListener("mouseleave", () => {
    gsap.to(".cursor", {
      width: "18px",
      height: "18px",
      innerHTML: "",
      margin: "0px",
    });

    gsap.to(body, {
      background: "white",
      color: "#0f0f0f",
    });
  });
}

section2();
// <==================SECTION 3 ANIMATION==========================>
function section3() {
  let cursor = document.querySelector(".cursor");
  let sectionThree = document.querySelector(".section3");

  // NOW WE WANT TO CHANGE OUR CURSOR TO BLACK WHEN IT ENTER TO SECTION3

  sectionThree.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      background: "#0f0f0f",

    });
    
  });
}
section3();

// =================Section4 Animation================
function section4() {
  let sectionFour = document.querySelector(".section4");
  let cursor = document.querySelector(".cursor");

  sectionFour.addEventListener("mouseenter", () => {
    cursor.style.background = "#0f0f0f";
  });

  gsap.to(sectionFour, {
    background: "#0f0f0f",
    color: "white",

    scrollTrigger: {
      trigger: ".section4 .four .moving-text",
      start: "bottom center",
      end: "botttom top",
      scrub: 2,
      // markers: true,
    },
  });

  gsap.to(".services", {
    color: "white",
    scrollTrigger: {
      trigger: ".section4 .four .moving-text",
      start: "bottom center",
      end: "botttom center",
      scrub: 2,
      // markers: true,
    },
  });

  // FOR CHANGING TO OUR CURSOR COLOR TO WHITE WHEN BACKGROUND WILL TURN ITO BLACK

  sectionFour.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      background: "white",
      scrollTrigger: {
        trigger: ".section4 .four .moving-text",
        start: "bottom center",
        end: "top center",
        scrub: 0.1,
        // markers: true,
      },
    });
  });
  let parentEl = document.querySelector(".bg");
  let childEl = document.querySelectorAll(".first-project .first");

  childEl.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      let ids = item.getAttribute("data-id");
      let bgEl = document.querySelector(`.id-${ids}`);
      // console.log(bgEl); HERE U CAN SEE WE ARE GETTING THE VIDEO THAT WE ARE SELECTING

      // NOW WE WANT TO DISPLAY THAT PARTICULAR VIDEO THAT WE ARE SELECTIONG

      parentEl.querySelectorAll("video").forEach((video) => {
        video.style.display = "none";
      });

      bgEl.style.display = "block"; //now u can see we are getting video according to our list that we have made in our html

      // NOW WE WANT OUR CURSOR TO INCREASE ITS SIZE WHEN IT ENTER TO THE RED DIV

      gsap.to(cursor, {
        height: "100px",
        width: "100px",
        duration: 0.3,
        innerHTML: "<P>See Projects</P>",
        display:"flex",
        whiteSpace:"nowrap",
        fontSize: "12px",
        fontWeight:"800",
      });
    });

    // NOW WE WANT IT TO COME BACK TO ITS NORAML POSITON ON MOUSE LEAVE

    item.addEventListener("mouseleave", () => {
      let ids = item.getAttribute("data-id");
      let bgEl = document.querySelector(`.id-${ids}`);

      parentEl.querySelectorAll("video").forEach((video) => {
        video.style.display = "none";
      });

      bgEl.style.display = "none";

      // NOW WE WANT OUR CURSOR TO CAME BACK TO ITS NORMAL SIZE WHEN IT COME OUT TO THE RED DIV

      gsap.to(cursor, {
        height: "18px",
        width: "18px",
        duration: .3,
        innerHTML: "",
        margin: 0,
      });
    });
  });
}
section4();

// <==================SECTION 5 ANIMATION==========================>
function section5() {
  let sectionfive = document.querySelector(".section5");
  let cursor = document.querySelector(".cursor");
  // FOR CHANGING OUR CURSOR COLOR TO BLACK

  sectionfive.addEventListener('mouseenter',()=> {
    gsap.to(cursor,{
      background:"#0f0f0f",
      duration:0.1,
    })
  })

  gsap.from(".section5 .five .left h1, .section5 .five .left h5",{
    y:100,
    opacity:0,
    stagger:1,
    duration:3,
    scrollTrigger:{
      trigger:".section5 .five",
      start:"top 60%",
      end:"top 30%",
      scrub:1,
      // markers:true
    }

  })
}
section5()
// <==================SECTION 6 ANIMATION==========================>
function section7() {
  let cursor = document.querySelector(".cursor");
  let body = document.querySelector("body");
  let sectionSeven = document.querySelector(".section6");

  gsap.to(body, {
    background: "#0f0f0f",
    color: "white",
    scrollTrigger: {
      trigger: ".section5",
      start: "bottom 60%",
      end: "bottom 40%",
      scrub: 1,
    },
  });

  // LET CHANGE OUR CURSOR TO WHITE WHEN BACKGROUND IS BLACK

  sectionSeven.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      background: "white",
      duration: 0.1,
      scrollTrigger: {
        trigger: ".section5",
        start: "bottom 60%",
        end: "bottom 40%",
        scrub: 1,
      },
    });
  });

  // LET CHANGE OUR CURSOR TO balc WHEN BACKGROUND IS white
  sectionSeven.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      background: "black",
      duration: 0.1,
      scrollTrigger: {
        trigger: ".section5",
        start: "bottom 60%",
        end: "bottom 40%",
        scrub: 1,
      },
    });
  });
}
section7();
