'use client'

import { FormType } from '@/components/sheet-form'
import { LOCAL_STORAGE_KEY } from '@/consts'
import React, { useEffect } from 'react'

type SheetsContextType = {
  sheets: FormType[]
  setSheets: React.Dispatch<React.SetStateAction<FormType[]>>
}

type SheetsContextProviderProps = {
  children: React.ReactNode
}

export const SheetsContext = React.createContext({} as SheetsContextType)

export const SheetsContextProvider: React.FC<SheetsContextProviderProps> = ({
  children,
}) => {
  const [sheets, setSheets] = React.useState<FormType[]>([])

  useEffect(() => {
    const rpgSheets = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) || '[]',
    ) as FormType[]

    setSheets(rpgSheets)
  }, [])

  useEffect(() => {
    if (sheets.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(sheets))
    }
  }, [sheets])

  return (
    <SheetsContext.Provider
      value={{
        sheets,
        setSheets,
      }}
    >
      {children}
    </SheetsContext.Provider>
  )
}
