'use client'

import SectionNumber from '../SectionNumber'
import moveNumElement from '@/animations/moveNumElement'
import styles from './ProjectsSection.module.scss'
import sectionStyles from '../../styles/modules/sections.module.scss'

export default function ProjectsSection() {
  return (
    <section
      onMouseMove={(event) => moveNumElement(event)}
      id="projects"
      className="projects-section"
    >
      <div
        style={{ background: 'none', boxShadow: 'none' }}
        className={sectionStyles.sectionContainer}
      >
        <div className={sectionStyles.topSection}>
          <SectionNumber num="03" />
          <h2>Projects</h2>
        </div>
        <table cellPadding={0} cellSpacing={0} className={styles.projectsTable}>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Year</th>
              <th>Technologies</th>
              <th>Link</th>
            </tr>
            <tr>
              <td className={styles.projectName}>Spacejam</td>
              <td>2020</td>
              <td className={styles.projectTech}>
                React Native, Redux, TypeScript
              </td>
              <td>
                <a
                  href="https://github.com/arif-bashar/spacejam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Git
                </a>
              </td>
            </tr>
            <tr>
              <td className={styles.projectName}>Discord Bot</td>
              <td>2020</td>
              <td className={styles.projectTech}>Node.js, Discord.js, TypeScript</td>
              <td>
                <a
                  href="https://github.com/arif-bashar/goon-bot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Git
                </a>
              </td>
            </tr>
            <tr>
              <td className={styles.projectName}>Lab Scheduler</td>
              <td>2020</td>
              <td className={styles.projectTech}>Node.js, React.js</td>
              <td>
                <a
                  href="https://github.com/arif-bashar/gta-scheduler"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Git
                </a>{' '}
                &nbsp; &nbsp;
                <a
                  href="https://gtascheduler.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={sectionStyles.bottomSection}></div>
    </section>
  )
}

