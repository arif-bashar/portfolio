'use client'

import styles from './footer.module.scss'

type FooterProps = {
  mouseCursor: React.MutableRefObject<HTMLDivElement | null>
}

export default function Footer({ mouseCursor }: FooterProps) {
  const onHoverLinks = () => {
    mouseCursor.current?.classList.add('cursor-grow')
  }

  const onLeaveLinks = () => {
    mouseCursor.current?.classList.remove('cursor-grow')
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a
          href="https://github.com/arif-bashar"
          target="_blank"
          rel="noopener noreferrer"
          onMouseLeave={onLeaveLinks}
          onMouseOver={onHoverLinks}
        >
          GitHub
        </a>
        <a
          href="https://www.behance.net/arifbashar/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseLeave={onLeaveLinks}
          onMouseOver={onHoverLinks}
        >
          Behance
        </a>
        <a
          href="https://www.linkedin.com/in/arif-bashar/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseLeave={onLeaveLinks}
          onMouseOver={onHoverLinks}
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}

