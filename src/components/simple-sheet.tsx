import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'

type SimpleSheetProps = {
  title: string
  description: string
}

export const SimpleSheet = ({ title, description }: SimpleSheetProps) => {
  return (
    <Card className="h-64 snap-start">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
