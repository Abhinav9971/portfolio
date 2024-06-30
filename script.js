var typed = new Typed("#element", {
  strings: ["Web Developer.", "UI/UX Designer.", "Software Engineer."],
  typeSpeed: 100,
  showCursor: false,
  loop: Infinity,
  // loopCount: Infinity,
});
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

// ---------------------------------GSAP---------------------------------
var page1 = document.querySelector("#main");
var cursor1 = document.querySelector("#cursor1");
page1.addEventListener("mousemove", function (dets) {
  gsap.to(cursor1, {
    x: dets.x - 50,
    y: dets.y,
    duration: 2.5,
    ease: "elastic.out(1,0.3)",
  });
});
page1.addEventListener("mouseleave", function () {
  cursor1.style.display = "none";
});
page1.addEventListener("mouseenter", function () {
  cursor1.style.display = "inline-block";
});
// --------------------------------cursor2-----------------------
var main = document.querySelector("#page1");
var cursor2 = document.querySelector("#cursor2");
main.addEventListener("mouseenter", function (dets) {
  let intervalId = setInterval(() => {
    gsap.to(cursor2, {
      x: Math.random() * 1000,
      y: Math.random() * 1100,
      duration: 3,
      ease: "bounce.out", // Adjust duration for desired jump speed
    });
  }, 1000);
});

main.addEventListener("mouseover", function (dets) {
  gsap.to(cursor2, {
    x: dets.x + 200,
    y: dets.y + 2000,
  });
});
// ---------------------------page2-----------------------
var main = document.querySelector("#mainhtml");
var mainn = document.querySelector("body");
var maincss = document.querySelector("#maincss");
var cursor = document.querySelector("#cursor");
var cursor2 = document.querySelector("#cursor2");
var cursor3 = document.querySelector("#cursor3");
var cursor4 = document.querySelector("#cursor4");
var mainjs = document.querySelector("#mainjs");
var mainreact = document.querySelector("#mainreact");
var cursor9 = document.querySelector("#cursor9");
var random = document.querySelector("#bgcode");
var random2 = document.querySelector("#bgcode2");

// ------------------maincursor------------------
mainn.addEventListener("mousemove", function (dets) {
  gsap.to(cursor9, {
    x: dets.x,
    y: dets.y,
    duration: 2.5,
    ease: "elastic.out(1,0.3)",
  });
});
mainn.addEventListener("mouseleave", function () {
  cursor9.style.display = "none";
});
mainn.addEventListener("mouseenter", function () {
  cursor9.style.display = "inline-block";
});

// ------------------html------------
main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x - 500,
    y: dets.y - 200,
  });
});
main.addEventListener("mouseleave", function () {
  cursor.style.display = "none";
});
main.addEventListener("mouseenter", function () {
  cursor.style.display = "inline-block";
});

// ---------------------css------------
maincss.addEventListener("mousemove", function (dets) {
  gsap.to(cursor10, {
    x: dets.x - 500,
    y: dets.y - 200,
  });
});
maincss.addEventListener("mouseleave", function () {
  cursor10.style.display = "none";
});
maincss.addEventListener("mouseenter", function () {
  cursor10.style.display = "inline-block";
});

// ---------------------js----------
mainjs.addEventListener("mousemove", function (dets) {
  gsap.to(cursor3, {
    x: dets.x - 500,
    y: dets.y - 500,
  });
});
mainjs.addEventListener("mouseleave", function () {
  cursor3.style.display = "none";
});
mainjs.addEventListener("mouseenter", function () {
  cursor3.style.display = "inline-block";
});
// ---------------------------react--------------------
mainreact.addEventListener("mousemove", function (dets) {
  gsap.to(cursor4, {
    x: dets.x - 700,
    y: dets.y - 600,
  });
});
mainreact.addEventListener("mouseleave", function () {
  cursor4.style.display = "none";
});
mainreact.addEventListener("mouseenter", function () {
  cursor4.style.display = "inline-block";
});
// ------------------------mongodb---------------------
maindb.addEventListener("mousemove", function (dets) {
  gsap.to(cursor5, {
    x: dets.x - 1000,
    y: dets.y - 300,
  });
});
maindb.addEventListener("mouseleave", function () {
  cursor5.style.display = "none";
});
maindb.addEventListener("mouseenter", function () {
  cursor5.style.display = "inline-block";
});
// -------------------------node-----------------------\

mainnode.addEventListener("mousemove", function (dets) {
  gsap.to(cursor6, {
    x: dets.x - 1000,
    y: dets.y - 500,
  });
});
mainnode.addEventListener("mouseleave", function () {
  cursor6.style.display = "none";
});
mainnode.addEventListener("mouseenter", function () {
  cursor6.style.display = "inline-block";
});

// ------------------express-------------------------
mainex.addEventListener("mousemove", function (dets) {
  gsap.to(cursor7, {
    x: dets.x - 1000,
    y: dets.y - 600,
  });
});
mainex.addEventListener("mouseleave", function () {
  cursor7.style.display = "none";
});
mainex.addEventListener("mouseenter", function () {
  cursor7.style.display = "inline-block";
});
// ---------------------------tailwind-------------------/
maintail.addEventListener("mousemove", function (dets) {
  gsap.to(cursor8, {
    x: dets.x - 1000,
    y: dets.y - 600,
  });
});
maintail.addEventListener("mouseleave", function () {
  cursor8.style.display = "none";
});
maintail.addEventListener("mouseenter", function () {
  cursor8.style.display = "inline-block";
});
// ----------------------------------cursors----------------------------
