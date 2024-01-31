'use client'

import { FormType, SheetForm } from '@/components/sheet-form'
import { Button } from '@/components/ui/button'
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useSheetsContext } from '@/hooks/use-sheets-context'
import { useEffect, useRef, useState } from 'react'

const SheetPage = ({ params: { id } }: { params: { id: string } }) => {
  const { sheets } = useSheetsContext()
  const [sheet, setSheet] = useState<FormType | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = () => {
    formRef.current?.dispatchEvent(
      new Event('submit', { cancelable: true, bubbles: true }),
    )
  }

  useEffect(() => {
    const sheet = sheets.find((sheet) => sheet.id === id)

    if (sheet) setSheet(sheet)
  }, [id, sheets])

  if (!sheet) return null

  return (
    <>
      <CardHeader>
        <CardTitle>{sheet.header.name}</CardTitle>
        <CardDescription>{sheet.header.chronicle}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 snap-y overflow-y-scroll">
        <SheetForm ref={formRef} sheet={sheet} />
      </CardContent>
      <CardFooter className="pt-6">
        <Button className="w-full" onClick={handleSubmit}>
          Save sheet
        </Button>
      </CardFooter>
    </>
  )
}

export default SheetPage
