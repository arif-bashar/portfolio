import styles from './MenuButton.module.scss'
import cn from 'classnames'

type MenuButtonProps = {
  label: string
  active: boolean
}

export default function MenuButton({ label, active }: MenuButtonProps) {
  return (
    <div
      className={cn(styles.menuButton, {
        [styles.menuButtonActive]: active,
        [styles.menuButtonInactive]: !active,
      })}
    >
      {label}
    </div>
  )
}

