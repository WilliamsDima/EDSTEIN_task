import DuSvg from '../components/ui/Du'
import EnSvg from '../components/ui/En'
import ItSvg from '../components/ui/It'
import PlSvg from '../components/ui/Pl'
import RuSvg from '../components/ui/Ru'
import SpSvg from '../components/ui/Sp'
import { TSelect } from '../types'

export const countriesMok: TSelect[] = [
  {
    select: false,
    text: 'Русский',
    value: 'Русский',
    icon: () => <RuSvg />,
  },
  {
    select: false,
    text: 'Английский',
    value: 'Английский',
    icon: () => <EnSvg />,
  },
  {
    select: false,
    text: 'Испанский',
    value: 'Испанский',
    icon: () => <SpSvg />,
  },
  {
    select: false,
    text: 'Немецкий',
    value: 'Немецкий',
    icon: () => <DuSvg />,
  },
  {
    select: false,
    text: 'Итальянский',
    value: 'Итальянский',
    icon: () => <ItSvg />,
  },
  {
    select: false,
    text: 'Польский',
    value: 'Польский',
    icon: () => <PlSvg />,
  },
]
