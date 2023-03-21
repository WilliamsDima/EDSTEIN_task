import cn from 'classnames'
import { FC, useEffect, useMemo } from 'react'
import { useAppContext } from '../../../context/appContext'
import { useInput } from '../../../hooks/useInput'
import Input from '../../atoms/Input'
import MenuItem from '../MenuItem'
import style from './styles.module.scss'

type menuSelect = {
  open: boolean
}

const DropDownMenu: FC<menuSelect> = ({ open }) => {
  const [valueSerch, bind] = useInput('')

  const { countries } = useAppContext()

  const searchCountries = useMemo(() => {
    return countries.length
      ? countries.filter((c) =>
          c.text.toLocaleLowerCase().includes(valueSerch.toLocaleLowerCase())
        )
      : countries
  }, [valueSerch, countries])

  useEffect(() => {}, [])
  return (
    <div
      className={cn(style.menu, {
        [style.open]: open,
      })}
    >
      <div className={style.search}>
        <Input {...bind} />
      </div>

      <ul className={style.list}>
        {searchCountries.map(({ icon, text, value, select }) => {
          return (
            <MenuItem
              key={value}
              value={value}
              icon={icon}
              text={text}
              select={select}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default DropDownMenu
