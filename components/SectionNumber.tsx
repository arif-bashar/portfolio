import { DotGrid } from './SvgIcons'
import styles from './SectionNumber.module.scss'

type SectionNumberProps = {
  num: string
}

export default function SectionNumber({ num }: SectionNumberProps) {
  return (
    <div className={styles.numberContainer}>
      <div className={styles.square}></div>
      <div className={styles.number}>
        <strong>{num}</strong>
      </div>
      <div className={styles.dotGridSvg}>
        <DotGrid />
      </div>
    </div>
  )
}

