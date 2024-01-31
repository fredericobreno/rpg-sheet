'use client'

import { SheetForm } from '@/components/sheet-form'
import { Button } from '@/components/ui/button'
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useRef } from 'react'

const NewSheetPage = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = () => {
    formRef.current?.dispatchEvent(
      new Event('submit', { cancelable: true, bubbles: true }),
    )
  }

  return (
    <>
      <CardHeader>
        <CardTitle>New sheet</CardTitle>
        <CardDescription>Create a new RPG sheet</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 snap-y overflow-y-scroll">
        <SheetForm ref={formRef} />
      </CardContent>
      <CardFooter className="pt-6">
        <Button className="w-full" onClick={handleSubmit}>
          Save new sheet
        </Button>
      </CardFooter>
    </>
  )
}

export default NewSheetPage
