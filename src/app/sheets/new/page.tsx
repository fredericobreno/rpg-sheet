import { SheetForm } from '@/components/sheet-form'
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const NewSheetPage = () => {
  return (
    <>
      <CardHeader>
        <CardTitle>New sheet</CardTitle>
        <CardDescription>Create a new RPG sheet</CardDescription>
      </CardHeader>
      <CardContent>
        <SheetForm />
      </CardContent>
    </>
  )
}

export default NewSheetPage
