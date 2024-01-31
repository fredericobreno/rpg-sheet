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
import { LOCAL_STORAGE_KEY } from '@/consts'
import { useEffect, useRef, useState } from 'react'

export const SheetPage = ({ params: { id } }: { params: { id: string } }) => {
  const [sheet, setSheet] = useState<FormType | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = () => {
    formRef.current?.dispatchEvent(
      new Event('submit', { cancelable: true, bubbles: true }),
    )
  }

  useEffect(() => {
    const rpgSheets = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) || '[]',
    ) as FormType[]
    const sheet = rpgSheets.find((sheet) => sheet.id === id)

    if (sheet) setSheet(sheet)
  }, [id])

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
