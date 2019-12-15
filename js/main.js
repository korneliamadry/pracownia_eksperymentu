
// Mikke Quin
//codepen.io/mprquinn/pen/OmOMrR
//worthy check!!!!!!!!!!!//



// try!!!! https://codepen.io/chrisgannon/details/rvBMmM //


//TRY!!! codepen.io/joshy/details/cojbD //




//Inspired by TRY!!!!!!
//http://blog.legomushroom.com/2014/03/defining-advanced-animation-path/
//https://dribbble.com/shots/921928-Playing-With-Science




// https://codepen.io/brandondward/pen/yMxPYZ try!!!! //



// Made with Zdog   https://zzz.dog/getting-started try!!!!

// create illo

"use strict";

AOS.init({
  duration: 1500,
})

var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

var w = (canvas.width = 80);
var h = (canvas.height = innerHeight);

// Variables
var mouse = {
   x: undefined,
   y: undefined
};

var colors = [
   "#f15a29",
   "#4800ba",
   "#00c1b3",
];
var mouseDown = 0;
document.body.onmousedown = function() {
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}
// Event Listeners
addEventListener("mousemove", function(event) {
   mouse.x = event.clientX;
   mouse.y = event.clientY;
});
addEventListener("touchmove", function(event) {
  	mouse.y = event.targetTouches[0].clientY;
  	mouse.x = event.targetTouches[0].clientX;
});
addEventListener("resize", function() {
   w = canvas.width = 80;
   h = canvas.height = 700;
   init();
});

// Utility Functions
function randomIntFromRange(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
   return colors[Math.floor(Math.random() * colors.length)];
}

function Dot(x, y, color) {
   this.x = x;
   this.y = y;
   this.dx = x;
   this.dy = y;
   this.color = color;
   this.radius = 1;
   this.zIndex = -30; // doesn't help //
}
Dot.prototype.update = function() {
   var rad = 10000;
   var disX = this.x - mouse.x;
   var disY = this.y - mouse.y;
   var ds =  disX * disX + disY * disY;
   var angle = Math.atan2(disY, disX) ;
   var dist = rad / ds;
   if (ds < rad) {
      this.x += Math.cos(angle) * dist * 0.6;
      this.y += Math.sin(angle) * dist * 0.6;
   } else {
      if (this.x < this.dx) this.x -= Math.cos(angle) * dist;
      if (this.y < this.dy) this.y -= Math.cos(angle) * dist;
      // this.y = this.dy;
   }
   if (this.x < 0 || this.x > w) this.x = this.dx;
   if (this.y < 0 || this.y > h) this.y = this.dy;

   this.draw();
};
Dot.prototype.draw = function() {
   c.beginPath();
   c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
   c.fillStyle = this.color;
   c.fill();
   c.closePath();
};

var dots = [];
var spacing = 20;

function init() {
   dots = [];
   for (var x = spacing / 2; x < w; x += spacing) {
      for (var y = spacing / 2; y < h; y += spacing) {
         var color = randomColor(colors);
         var dot = new Dot(x, y, color);
         dots.push(dot);
         dot.draw();
      }
   }
}

function animate() {
   c.clearRect(0, 0, canvas.width, canvas.height);
   dots.forEach(dot => {
      dot.update();
   });
   requestAnimationFrame(animate);
}

init();
animate();




function hideAllPages() {
  let pages = document.querySelectorAll(".page");
  for (let page of pages) {
    page.style.display = "none";
  }
}

// show page or tab
function showPage(pageId) {
  hideAllPages();
  document.querySelector(`#${pageId}`).style.display = "block";
  location.href = `#${pageId}`;
  setActiveTab(pageId);
}

    // sets active tabbar/ menu item
    function setActiveTab(pageId) {
      let pages = document.querySelectorAll(".tabbar a");
      for (let page of pages) {
        if (`#${pageId}` === page.getAttribute("href")) {
          page.classList.add("active");
        } else {
          page.classList.remove("active");
        }

      }
    }

    // set default page
    function setDefaultPage() {
      let page = "home";
      if (location.hash) {
        page = location.hash.slice(1);
      }
      showPage(page);
    }

    setDefaultPage();
    //
    // var triangle = document.getElementById("triangle");
    // var length = triangle.getTotalLength();
    //
    // // The start position of the drawing
    // triangle.style.strokeDasharray = length;
    //
    // // Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
    // triangle.style.strokeDashoffset = length;
    //
    // // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
    // window.addEventListener("scroll", myFunction);
    //
    // function myFunction() {
    // var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    //
    //   var draw = length * scrollpercent;
    //
    //   // Reverse the drawing (when scrolling upwards)
    //   triangle.style.strokeDashoffset = length - draw;
    // }
    //
    //
    //
    //



// mobile navigation //



// hide all pages
function hideAllPages() {
  let pages = document.querySelectorAll(".page");
  for (let page of pages) {
    page.style.display = "none";
  }
}

// show page or tab
function showPage(pageId) {
  hideAllPages();
  document.querySelector(`#${pageId}`).style.display = "block";
  location.href = `#${pageId}`;
  setActiveTab(pageId);
}

// sets active tabbar/ menu item
function setActiveTab(pageId) {
  let pages = document.querySelectorAll(".tabbar a");
  for (let page of pages) {
    if (`#${pageId}` === page.getAttribute("href")) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }

  }
}

// set default page
function setDefaultPage() {
  let page = "home";
  if (location.hash) {
    page = location.hash.slice(1);
  }
  showPage(page);
}












// Animation, lab //
//Copyright (c) 2019 by kokolinche (https://codepen.io/kokolinche/pen/xxbGryr)
//Fork of an original work SVG chemistry flask animation (https://codepen.io/agathaco/pen/brWxJY




// TweenMax.set("svg", {visibility:"visible"})
//
// TweenMax.staggerTo('#bubble-group circle', 4, {
//   attr: {
//     cy: 200
//   },
//   ease:Power2.easeIn,
//   repeat: -1
// }, 0.6)
//
// var speed = 3.5;
// var tlFront1 = new TimelineMax({repeat:-1});
// tlFront1.to("#front-1", speed, {morphSVG:"#front-2", ease: Power0.easeNone})
//   .to("#front-1", speed, {morphSVG:"#front-1", ease: Power0.easeNone});
//
// var tlFront2 = new TimelineMax({repeat:-1});
// tlFront2.to("#front-3", speed, {morphSVG:"#front-4", ease: Power0.easeNone})
//   .to("#front-3", speed, {morphSVG:"#front-3", ease: Power0.easeNone});
//
// var tlFront3 = new TimelineMax({repeat:-1});
// tlFront3.to("#front-5", speed, {morphSVG:"#front-6", ease: Power0.easeNone})
//   .to("#front-5", speed, {morphSVG:"#front-5", ease: Power0.easeNone});
//
// var tlBack = new TimelineMax({repeat:-1});
// tlBack.to("#back-1", speed, {morphSVG:"#back-2", ease: Power0.easeNone})
//   .to("#back-1", speed, {morphSVG:"#back-1", ease: Power0.easeNone});
//
// var bubbles = document.getElementsByClassName("steam-bubble");
// var tlSteam = new TimelineMax({ repeat: -1 });
// function animateBubbles() {
//   for (var i = 0; i < bubbles.length; i++) {
//     var b = bubbles[i];
//     var tl = new TimelineMax({ repeat: -1 });
//     tl
//       .to(b, 1, {
//         attr: {
//           r: "+=7"
//         },
//         ease: Linear.easeNone
//       })
//       .to(b, 1, {
//         attr: {
//           r: "-=7"
//         },
//         ease: Linear.easeNone
//       });
//     tlSteam.add(tl, i/2);
//   }
// }
// animateBubbles();
