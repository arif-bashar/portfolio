import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

let SQ_CONTAINER;
let NUM_CONTAINER;
let DOT_GRID;

if (typeof window !== `undefined`) {
  SQ_CONTAINER = document.getElementsByClassName("square");
  NUM_CONTAINER = document.getElementsByClassName("number");
  DOT_GRID = document.getElementsByClassName("dot-grid-svg");
}

// Name moves in direction of mouse
function moveNumElement(event: React.MouseEvent) {
  let x = event.clientX / window.innerWidth - 0.5;
  let y = event.clientY / window.innerHeight - 0.5;

  gsap.to([SQ_CONTAINER, NUM_CONTAINER], 0.6, {
    x: x * 20,
    y: y * 20,
    ease: "power4.easeOut",
  });

  gsap.to(DOT_GRID, 0.6, {
    x: -x * 20,
    y: -y * 20,
  })  
};

export default moveNumElement;