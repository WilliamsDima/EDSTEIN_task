import { FC, useMemo, MouseEvent, WheelEvent } from 'react'
import { useAppContext } from '../../../context/appContext'
import { TSelect } from '../../../types'
import Text from '../../atoms/Text'
import CloseSvg from '../../ui/Close'
import style from './styles.module.scss'

type select = {}

const Selected: FC<select> = ({}) => {
  const { countries, selectHandler } = useAppContext()

  const scrollHandler = (event: WheelEvent<HTMLUListElement>) => {
    if (
      event.target instanceof HTMLElement &&
      event.target.closest('ul[class*="selectList"]')
    ) {
      const list = event.target.closest('ul[class*="selectList"]')
      event.isDefaultPrevented()
      if (list) list.scrollLeft += event.deltaY
    }
  }

  const empty = useMemo(() => {
    return countries.find((c) => c.select)
  }, [countries])

  const deleteHandler = (e: MouseEvent, item: TSelect) => {
    e?.nativeEvent?.stopPropagation()
    selectHandler(item)
  }

  return (
    <>
      {empty ? (
        <ul className={style.selectList} onWheel={scrollHandler}>
          {countries
            .filter((item) => {
              if (item.select) {
                return item
              }
            })
            .map((item) => {
              if (item.select) {
                return (
                  <li key={item.value}>
                    <Text>{item.text}</Text>
                    <CloseSvg onClickCapture={(e) => deleteHandler(e, item)} />
                  </li>
                )
              } else {
                return <></>
              }
            })}
        </ul>
      ) : (
        <p className={style.empty}>Страна не выбрана</p>
      )}
    </>
  )
}

export default Selected
