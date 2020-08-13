import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

type SlideProps = {
  revealed: boolean
}

function Slide1(props: SlideProps) {
  let nameRef = useRef<HTMLDivElement>(null);


  // Calls name entrance animation after page load
  useEffect(() => {
    if (!props.revealed)
      animateName(nameRef);
  }, []);

  // Animates name after page load
  const animateName = (nameNode: React.RefObject<HTMLDivElement>) => {
    gsap.from(nameNode.current, {
      duration: 2,
      opacity: 0,
      y: 40,
      skewY: 5,
      delay: 0.1,
      ease: "power3.inOut",
    });
  };

  // Name moves in direction of mouse
  const moveNameonMouse = (
    event: React.MouseEvent,
    nameNode: React.RefObject<HTMLDivElement>
  ) => {
    let x = event.clientX / window.innerWidth - 0.5;
    let y = event.clientY / window.innerHeight - 0.5;

    gsap.to(nameNode.current, 0.6, {
      x: x * 30,
      y: y * 30,
      ease: "power4.easeOut",
    });
  };

  return (
    <div
      className="slide-1"
      onMouseMove={event => moveNameonMouse(event, nameRef)}
    >
      <div ref={nameRef} className="name-title">
        <h1>Arif Bashar</h1>
      </div>
    </div>
  );
}

export default Slide1;
