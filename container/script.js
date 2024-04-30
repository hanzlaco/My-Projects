var rect = document.querySelector("#card");
window.addEventListener("mousemove", function (e) {
  let xval = gsap.utils.mapRange(
    0,
    window.innerWidth,
    100 + (rect.getBoundingClientRect().width/2),
    window.innerWidth - 100,
    e.clientX
  );
  gsap.to(rect, {
    left: xval,
    ease: Power2,
    duration:1,
  });
});
