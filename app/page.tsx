"use client";

import { useState, useEffect } from "react";
import IntroScreen from "@/components/sections/IntroScreen";
import Layout from "@/components/layout";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleIntroComplete = () => {
    setIntroDone(true);
  };

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  if (introDone) {
    return <Layout />;
  }

  return <IntroScreen onComplete={handleIntroComplete} />;
}
