import gsap from "gsap";

const SQ_CONTAINER = document.getElementsByClassName("square");
const NUM_CONTAINER = document.getElementsByClassName("number");
const DOT_GRID = document.getElementsByClassName("dot-grid-svg");

// Name moves in direction of mouse
const moveNumElement = (event: React.MouseEvent) => {
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