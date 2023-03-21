import { FC, ReactNode } from 'react'
import style from './styles.module.scss'

type text = {
  children: ReactNode
  type?: 'p1' | 'p2' | 'p3'
}

const Text: FC<text> = ({ children, type = 'p1' }) => {
  return <p className={`${style.text} ${style[type]}`}>{children}</p>
}

export default Text
