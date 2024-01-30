import { SimpleSheet } from '@/components/simple-sheet'
import { Button } from '@/components/ui/button'
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'

const SheetsPage = () => {
  return (
    <>
      <CardHeader>
        <CardTitle>Sheets</CardTitle>
        <CardDescription>Select your sheet</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 snap-y overflow-y-scroll">
        <div className="grid grid-cols-2 gap-4">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <SimpleSheet key={i} title="John Wick" description="Arcarum" />
            ))}
        </div>
      </CardContent>
      <CardFooter className="pt-6">
        <Button asChild className="w-full">
          <Link href="/sheets/new">Add new sheet</Link>
        </Button>
      </CardFooter>
    </>
  )
}

export default SheetsPage
