import cn from 'classnames'
import { FC } from 'react'
import ArrowSvg from '../../ui/Arrow'
import Selected from '../Selected'
import style from './styles.module.scss'

type select = {
  open: boolean
  setOpen: (value: boolean) => void
}

const Select: FC<select> = ({ open, setOpen }) => {
  return (
    <div
      className={cn(style.select, {
        [style.open]: open,
      })}
      onClick={() => setOpen(!open)}
    >
      <span className={style.arrow}>
        <ArrowSvg />
      </span>

      <Selected />
    </div>
  )
}

export default Select
