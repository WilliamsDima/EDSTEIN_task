import {
  useContext,
  createContext,
  useMemo,
  FC,
  ReactElement,
  useState,
  useCallback,
} from 'react'
import { TSelect } from '../types'

type IContext = {
  countries: TSelect[]
  setCountries: (value: TSelect[]) => void
  selectHandler: (value: TSelect) => void
}

const AppContext = createContext<IContext>({} as IContext)

type AppProviderType = {
  children: ReactElement | boolean
}

export const AppProvider: FC<AppProviderType> = ({ children }) => {
  const [countries, setCountries] = useState<TSelect[]>([])

  const selectHandler = useCallback(
    (country: TSelect) => {
      const newCountries = countries.map((c) => {
        if (c.value === country.value) {
          c.select = !country.select
        }
        return c
      })

      setCountries(newCountries)
    },
    [countries]
  )

  const value = useMemo(() => {
    return { countries, setCountries, selectHandler }
  }, [countries])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  return useContext(AppContext)
}
