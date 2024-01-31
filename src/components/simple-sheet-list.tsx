'use client'

import { LOCAL_STORAGE_KEY } from '@/consts'
import { FormType } from './sheet-form'
import { SimpleSheet } from './simple-sheet'

export const SimpleSheetList = () => {
  const sheets = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEY) || '[]',
  ) as FormType[]

  return sheets.map((sheet, i) => (
    <SimpleSheet
      key={i}
      title={sheet.header.name}
      description={sheet.header.chronicle}
    />
  ))
}
