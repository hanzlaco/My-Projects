function loader() {
  let tl = gsap.timeline();

  tl.to("#yellow1", {
    top: "-100%",
    duration: 0.5,
    delay: 0.5,
    ease: "expo.out"
  })
  tl.from("#yellow2", {
    top: "100%",
    duration: 0.5,
    delay: 0.5,
    ease: "expo.out"
  }, "elem")
  tl.to("#loader h1", {
    color: "#000",
    delay: 0.5,
  }, "elem")
  tl.to("#loader", {
    display: "none"
  },)
 
}
loader();
  

gsap.to("#nav", {
    opacity:"100%",
    y:10
  });

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
  // ======================== Page 2 Transition Bg-img =====================================
 function page2(){
   let elem = document.querySelectorAll(".elem");
  let page2 = document.querySelector("#page2");
elem.forEach(function(ele){
  ele.addEventListener("mouseenter",function(){
    let bgimg =  ele.getAttribute("data-img");
    page2.style.backgroundImage = `url(${bgimg})`
  })
})

}
page2();