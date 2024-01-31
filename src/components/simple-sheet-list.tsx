'use client'

import { LOCAL_STORAGE_KEY } from '@/consts'
import { FormType } from './sheet-form'
import { SimpleSheet } from './simple-sheet'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const SimpleSheetList = () => {
  const [sheets, setSheets] = useState<FormType[]>([])

  useEffect(() => {
    setSheets(
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]') as FormType[],
    )
  }, [])

  return sheets.map((sheet) => (
    <Link key={sheet.id} href={`/sheets/${sheet.id}`}>
      <SimpleSheet
        title={sheet.header.name}
        description={sheet.header.chronicle}
      />
    </Link>
  ))
}
