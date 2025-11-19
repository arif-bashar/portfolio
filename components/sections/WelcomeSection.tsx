'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {
  BrowserMock,
  XButton,
  LeftArrow,
  RightArrow,
  LockIcon,
} from '../SvgIcons'
import styles from './WelcomeSection.module.scss'

export default function WelcomeSection() {
  const nameRef = useRef<HTMLHeadingElement>(null)
  const proRef = useRef<HTMLDivElement>(null)
  const defRef = useRef<HTMLParagraphElement>(null)

  useGSAP(() => {
    gsap.from([nameRef.current, proRef.current, defRef.current], {
      delay: 0.2,
      stagger: 0.1,
      duration: 1,
      opacity: 0,
      y: 20,
      skewY: 2,
      ease: 'power3.easeIn',
    })
  }, [])

  return (
    <section className="welcome-section">
      <div className={styles.browser}>
        <div className={styles.browserTop}>
          <div className={styles.redClose}></div>
          <div className={styles.yellowMinimize}></div>
          <div className={styles.greenMaximize}></div>
          <span>define arif bashar - Google Search</span>
          <XButton />
        </div>
        <div className={styles.browserNavigation}>
          <LeftArrow />
          <RightArrow />
          <div className={styles.addressBar}>
            <LockIcon />
            <div className={styles.addressText}>
              google.com/search?q=define+arif+bashar+&ggs_lcp=CffjgEqkfAzD...
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <h1 ref={nameRef}>Arif Bashar.</h1>
          <div className={styles.proText} ref={proRef}>
            ah-reef &nbsp; &nbsp; bah-shar
          </div>
          <p ref={defRef}>
            A human being (not a robot 😉) who spent 3.5 years in school to
            become a software engineer and really likes designing and building
            beautiful applications in React and React Native.
          </p>
        </div>
      </div>
    </section>
  )
}

