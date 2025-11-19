'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import styles from './header.module.scss'

type HeaderProps = {
  mouseCursor: React.MutableRefObject<HTMLDivElement | null>
}

export default function Header({ mouseCursor }: HeaderProps) {
  const [logoHovered, setLogoHovered] = useState(false)
  const [animStatus, setAnimStatus] = useState<'play' | 'reverse' | 'pause'>('pause')
  const [scrollPos, setScrollPos] = useState(0)

  const headerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const expRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const showHeaderTL = useRef<gsap.core.Timeline | null>(null)

  const logoStyleProps = {
    color: 'white',
  }

  const onHoverLinks = () => {
    mouseCursor.current?.classList.add('cursor-grow')
  }

  const onHoverLogo = () => {
    mouseCursor.current?.classList.add('cursor-grow')
    setLogoHovered(true)
  }

  const onLeaveLogo = () => {
    mouseCursor.current?.classList.remove('cursor-grow')
    setLogoHovered(false)
  }

  const onLeaveLinks = () => {
    mouseCursor.current?.classList.remove('cursor-grow')
    setLogoHovered(false)
  }

  const scrollHandler = () => {
    const newScrollPos = window.scrollY

    if (newScrollPos > scrollPos) {
      setAnimStatus('play')
    } else {
      setAnimStatus('reverse')
    }

    setScrollPos(newScrollPos)
  }

  useGSAP(() => {
    showHeaderTL.current = gsap.timeline({ paused: true })
    showHeaderTL.current
      .to([aboutRef.current, expRef.current, projectsRef.current], {
        duration: 0.1,
        stagger: 0.07,
        y: -10,
        opacity: 0,
        ease: 'power3.easeOut',
      })
      .to(
        logoRef.current,
        {
          duration: 0.1,
          color: 'red',
          y: -5,
          skewY: 1,
          opacity: 0,
        },
        '<'
      )
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [scrollPos])

  useEffect(() => {
    if (animStatus === 'play' && showHeaderTL.current) {
      showHeaderTL.current.play()
    } else if (animStatus === 'reverse' && showHeaderTL.current) {
      showHeaderTL.current.reverse()
    }
  }, [animStatus])

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.innerHeader}>
        <div ref={logoRef} className={styles.logo}>
          <Link
            href="/"
            style={logoHovered ? logoStyleProps : undefined}
            onMouseLeave={onLeaveLogo}
            onMouseOver={onHoverLogo}
          >
            Arif Bashar.
          </Link>
          Software Engineer
        </div>
        <div className={styles.navigation}>
          <nav>
            <div ref={aboutRef}>
              <Link
                id="about-link"
                href="/#about"
                onMouseLeave={onLeaveLinks}
                onMouseOver={onHoverLinks}
              >
                About
              </Link>
            </div>
            <div ref={expRef}>
              <Link
                id="exp-link"
                href="/#experience"
                onMouseLeave={onLeaveLinks}
                onMouseOver={onHoverLinks}
              >
                Experience
              </Link>
            </div>
            <div ref={projectsRef}>
              <Link
                href="/#projects"
                onMouseLeave={onLeaveLinks}
                onMouseOver={onHoverLinks}
              >
                Projects
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

