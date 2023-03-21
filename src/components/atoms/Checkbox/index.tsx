import cn from 'classnames'
import { FC, memo, useEffect } from 'react'
import DoneSvg from '../../ui/Done'
import style from './styles.module.scss'

type TCheckbox = {
  alt: string
  checked: boolean
  onChange?: (value: boolean) => void
}

const Checkbox: FC<TCheckbox> = memo(({ alt, checked, onChange }) => {
  const onChangeHandler = () => {
    onChange && onChange(!checked)
  }

  useEffect(() => {}, [checked])

  return (
    <div
      className={cn(style.checkbox, {
        [style.active]: checked,
      })}
    >
      <input
        type={'checkbox'}
        alt={alt}
        checked={checked}
        onChange={onChangeHandler}
      />
      <DoneSvg className={style.iconDone} />
    </div>
  )
})

export default Checkbox
