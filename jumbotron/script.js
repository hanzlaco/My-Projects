// use append child to crevte elements in javascript
// Throttling Function
const throttleFunction = (func, delay) => {
    // Previously called time of the function
    let prev = 0;
    return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();

        // Logging the difference
        // between previously
        // called and current called timings
        console.log(now - prev, delay);

        // If difference is greater
        // than delay call
        // the function again.
        if (now - prev > delay) {
            prev = now;

            // "..." is the spread
            // operator here
            // returning the function with the
            // array of arguments
            return func(...args);
        }
    };
};
document.querySelector("#center").addEventListener(
    "mousemove",
    throttleFunction((dets) => {
        var div = document.createElement("div");
        div.classList.add("card");
        div.style.left = dets.clientX + "px";
        div.style.top = dets.clientY + "px"; 
        var img = document.createElement("img");
        img.setAttribute(
            "src",
            "https://images.unsplash.com/photo-1703364342344-135b38cedcac?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        );
        div.appendChild(img);
        document.body.appendChild(div);
        gsap.to(img, {
            y: 0,
            ease: Power3,
            duration: 0.5,
        });
        gsap.to(img, {
            y: 300,
            delay: 0.5,
        });
        setTimeout(() => {
            div.remove();
        }, 1500);
    }, 300)
);
