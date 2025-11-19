'use client'

import { useRef } from 'react'
import MenuButton from '../MenuButton'
import SectionNumber from '../SectionNumber'
import moveNumElement from '@/animations/moveNumElement'
import styles from './ExperienceSection.module.scss'
import sectionStyles from '../../styles/modules/sections.module.scss'

export default function ExperienceSection() {
  const menuRef = useRef<HTMLDivElement>(null)

  let pos = { top: 0, left: 0, x: 0, y: 0 }

  const mouseDownHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (menuRef.current != null) {
      menuRef.current.style.cursor = 'grabbing'
      menuRef.current.style.userSelect = 'none'

      pos = {
        left: menuRef.current.scrollLeft,
        top: menuRef.current.scrollTop,
        x: e.clientX,
        y: e.clientY,
      }
    }

    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', mouseUpHandler)
  }

  const mouseMoveHandler = (e: MouseEvent) => {
    const dx = e.clientX - pos.x
    const dy = e.clientY - pos.y

    if (menuRef.current != null) {
      menuRef.current.scrollTop = pos.top - dy
      menuRef.current.scrollLeft = pos.left - dx
    }
  }

  const mouseUpHandler = () => {
    if (menuRef.current != null) {
      menuRef.current.style.cursor = 'grab'
      menuRef.current.style.removeProperty('user-select')
    }

    document.removeEventListener('mousemove', mouseMoveHandler)
    document.removeEventListener('mouseup', mouseUpHandler)
  }

  return (
    <section
      onMouseMove={(event) => moveNumElement(event)}
      id="experience"
      className="experience-section"
    >
      <div className={sectionStyles.sectionContainer}>
        <div className={sectionStyles.topSection}>
          <h2>Experience</h2>
        </div>
        <div
          ref={menuRef}
          className={styles.expMidSection}
          onMouseDown={mouseDownHandler}
        >
          <div className={styles.menuContainer}>
            <MenuButton label="Cigna" active={true} />
            <MenuButton label="Plz Hire Me" active={false} />
          </div>
        </div>
        <div className={styles.expContentSection}>
          <h3>
            Full Stack Intern <a href="https://www.cigna.com/">@Cigna</a>
          </h3>
          <div className={styles.jobDate}>May 2019 - May 2020</div>
          <div className={styles.expJobDesc}>
            <ul>
              <li>
                Built a serverless RESTful API using Node.js, AWS DynamoDB, AWS
                Lambda, and AWS API Gateway
              </li>
              <li>
                Translated SQL batch scripts from the Apache Impala engine over
                to Apache Hive in order to reduce the poor performance end-users
                were experiencing running small queries
              </li>
              <li>
                Designed the UI/UX for a progressive web application (PWA) that
                won the Cigna Summer Innovations Project against 5 other teams
              </li>
              <li>
                Used the Angular framework to build components in Typescript for
                the mentioned PWA
              </li>
            </ul>
          </div>
        </div>
        <div className={sectionStyles.bottomSection}>
          <div className={sectionStyles.horizontalLine}></div>
          <SectionNumber num="02" />
        </div>
      </div>
    </section>
  )
}

