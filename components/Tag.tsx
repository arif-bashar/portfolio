import styles from './Tag.module.scss'

type TagProps = {
  label: string
}

export default function Tag({ label }: TagProps) {
  return <div className={styles.tag}>{label}</div>
}

