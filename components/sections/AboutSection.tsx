'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Tag from '../Tag'
import SectionNumber from '../SectionNumber'
import moveNumElement from '@/animations/moveNumElement'
import styles from './AboutSection.module.scss'
import sectionStyles from '../../styles/modules/sections.module.scss'

export default function AboutSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  return (
    <section
      onMouseMove={(event) => moveNumElement(event)}
      id="about"
      className="about-section"
    >
      <div className={sectionStyles.sectionContainer}>
        <div className={sectionStyles.topSection}>
          <h2 ref={titleRef}>About Me</h2>
          <div className={styles.profilePic}>
            <Image
              src="/images/profile-pic.jpg"
              alt="Profile"
              width={50}
              height={50}
              style={{ borderRadius: '50%' }}
            />
          </div>
        </div>
        <div className={styles.aboutMidSection}>
          <p>
            Hi there! I&apos;m Arif. I&apos;m a Computer Science student
            graduating from
            <a href="https://www.mtsu.edu/"> MTSU</a> in December 2020.
            <br></br>
            <br></br>
            In my free time, I&apos;ve been learning to build applications in
            React and React Native. While my main focus has been on React,
            I&apos;ve also been dabbling in NLP and using it to reinforce some
            of the fundamental topics I&apos;ve learned about in Artificial
            Intelligence.
          </p>
          Most recent tech stack:
          <div className={styles.techStack}>
            <Tag label="TypeScript" />
            <Tag label="React" />
            <Tag label="React Native" />
            <Tag label="Node.js" />
            <Tag label="Python" />
          </div>
        </div>
        <div className={sectionStyles.bottomSection}>
          <div className={sectionStyles.horizontalLine}></div>
          <SectionNumber num="01" />
        </div>
      </div>
    </section>
  )
}

