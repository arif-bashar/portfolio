"use client";

import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./header";
import Footer from "./footer";
import WelcomeSection from "./sections/WelcomeSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import styles from "./layout.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Layout() {
  const rootRef = useRef<HTMLDivElement>(null);
  const mouseCursor = useRef<HTMLDivElement>(null);

  const mouseCursorHandler = (event: MouseEvent) => {
    if (mouseCursor.current != null) {
      mouseCursor.current.style.top = event.pageY + "px";
      mouseCursor.current.style.left = event.pageX + "px";
    }
  };

  useGSAP(() => {
    gsap.to(rootRef.current, {
      duration: 1,
      opacity: 1,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", mouseCursorHandler);
    return () => {
      window.removeEventListener("mousemove", mouseCursorHandler);
    };
  }, []);

  return (
    <div ref={rootRef} className={styles.root}>
      <div ref={mouseCursor} className="cursor"></div>
      <Header mouseCursor={mouseCursor} />
      <main>
        <WelcomeSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <Footer mouseCursor={mouseCursor} />
    </div>
  );
}
