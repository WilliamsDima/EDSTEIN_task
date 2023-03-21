import { FC, ChangeEvent } from 'react'
import SearchSvg from '../../ui/Search'
import style from './styles.module.scss'

type input = {
  type?: 'search'
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<input> = ({ type = 'search', value, onChange }) => {
  return (
    <div className={style.inputWrapper}>
      {type === 'search' && <SearchSvg />}
      <input placeholder="Поиск" value={value} onChange={onChange} />
    </div>
  )
}

export default Input
