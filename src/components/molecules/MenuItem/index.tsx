import { FC, ReactNode, memo, useEffect } from 'react'
import { useAppContext } from '../../../context/appContext'
import Checkbox from '../../atoms/Checkbox'
import Text from '../../atoms/Text'
import style from './styles.module.scss'

type item = {
  value: string
  text: string
  icon: () => ReactNode
  select: boolean
}

const MenuItem: FC<item> = memo((item) => {
  const { value, icon, text, select } = item
  const { selectHandler } = useAppContext()

  useEffect(() => {}, [item])
  return (
    <li key={value} className={style.item}>
      <label>
        <div className={style.country}>
          {icon()}
          <Text type="p3">{text}</Text>
        </div>

        <Checkbox
          alt={value}
          checked={select}
          onChange={() => selectHandler(item)}
        />
      </label>
    </li>
  )
})

export default MenuItem
