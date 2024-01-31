'use client'

import { SimpleSheet } from './simple-sheet'
import Link from 'next/link'
import { useSheetsContext } from '@/hooks/use-sheets-context'

export const SimpleSheetList = () => {
  const { sheets } = useSheetsContext()

  return sheets.map((sheet) => (
    <Link key={sheet.id} href={`/sheets/${sheet.id}`}>
      <SimpleSheet
        title={sheet.header.name}
        description={sheet.header.chronicle}
      />
    </Link>
  ))
}
