'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Puddle } from '../SvgIcons'
import styles from './IntroScreen.module.scss'

type IntroScreenProps = {
  onComplete: () => void
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const circleRef = useRef<HTMLDivElement>(null)
  const circleRef2 = useRef<HTMLDivElement>(null)
  const screenRef = useRef<HTMLDivElement>(null)
  const dropletSVG = useRef<SVGSVGElement>(null)
  const dropletPath = useRef<SVGPathElement>(null)
  const onCompleteRef = useRef(onComplete)

  // Keep the callback ref updated
  onCompleteRef.current = onComplete

  // Use screenRef as the scope to ensure all child refs are ready
  useGSAP(
    () => {
      // Calculate starting position above viewport (use viewport height to ensure it's off-screen)
      const startY = typeof window !== 'undefined' ? -window.innerHeight - 200 : -1000
      
      // Set the droplet to start from way above the viewport
      gsap.set(dropletSVG.current, {
        y: startY,
        opacity: 1,
      })

      // Droplet falls down onto the puddle
      // Start immediately and make the fall longer so it looks natural
      const tl = gsap
        .timeline({ delay: 0.3 })
        .to(
          dropletSVG.current,
          {
            duration: 1.2, // Longer duration for natural fall from above
            y: 120,
            transformOrigin: '50% 50%',
            ease: 'power1.easeIn',
          },
          'bounce2'
        )
        // Squash the droplet
        .to(
          dropletSVG.current,
          {
            duration: 0.15,
            transformOrigin: '50% 100%',
            scaleX: 1.5,
            scaleY: 0.6,
            ease: 'power1.easeInOut',
          },
          'bounce3-=0.04'
        )
        // Droplet bounces back up
        .to(
          dropletSVG.current,
          {
            duration: 0.4,
            y: -60,
            rotation: 180,
            transformOrigin: '50% 50%',
            ease: 'power1.easeOut',
          },
          'bounce'
        )
        // When the droplet bounces back up, change the fill to soak up the puddle color
        .to(
          dropletPath.current,
          {
            duration: 0.05,
            attr: {
              fill: '#221C47',
            },
            ease: 'power1.easeIn',
          },
          '<'
        )
        // Bring the tiny circle div into view as soon as droplet bounces up to max height
        .to(
          [circleRef.current, circleRef2.current],
          {
            duration: 0,
            opacity: 1,
          },
          'bounce+=0.4'
        )
        // Explode the circle to fill the screen
        .to(
          [circleRef2.current, circleRef.current],
          {
            duration: 0.5,
            stagger: 0.05,
            scale: 200,
            ease: 'power3.easeOut',
          },
          'bounce+=0.4'
        )
        // Fade out the circle after it has filled to bring the main site into view
        .to(
          screenRef.current,
          {
            duration: 1,
            opacity: 0,
            ease: 'power3.easeOut',
            onComplete: () => {
              onCompleteRef.current()
            },
          },
          '>'
        )

      return () => {
        tl.kill()
      }
    },
    { scope: screenRef }
  ) // Use scope to ensure refs are ready

  return (
    <div ref={screenRef} className={styles.introScreen}>
      <div className={styles.dropletContainer}>
        <div ref={circleRef} className={styles.circleExpand}></div>
        <div ref={circleRef2} className={styles.circleExpand2}></div>
        <svg
          ref={dropletSVG}
          width="34"
          height="67"
          viewBox="0 0 34 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0 }}
        >
          <path
            ref={dropletPath}
            d="M34 45.2133C34 57.2458 26.3888 67 17 67C7.61116 67 0 57.2458 0 45.2133C0 33.1808 7.61116 0 17 0C26.3888 0 34 33.1808 34 45.2133Z"
            fill="white"
          />
        </svg>
      </div>
      <div className={styles.puddleContainer}>
        <Puddle />
      </div>
    </div>
  )
}

