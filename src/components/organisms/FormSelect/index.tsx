import { FC, useEffect } from 'react'
import Text from '../../atoms/Text'
import DropDownMenu from '../../molecules/DropDownMenu'
import Select from '../../molecules/Select'
import style from './styles.module.scss'
import { countriesMok } from '../../../api/data'
import { useAppContext } from '../../../context/appContext'
import { useOutside } from '../../../hooks/useOutside'

const FormSelect: FC = () => {
  const { isShow, ref, setIsShow } = useOutside(false)

  const { setCountries } = useAppContext()

  useEffect(() => {
    // имитирую загрузку списка
    setCountries(countriesMok)
  }, [])
  return (
    <div className={style.form} ref={ref}>
      <Text type="p2">Язык</Text>
      <Select open={isShow} setOpen={setIsShow} />
      <DropDownMenu open={isShow} />
    </div>
  )
}

export default FormSelect
