import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

import { Card } from '@/components/ui/card'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RPG Sheet',
  description: 'Build your own RPG character sheet',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'flex h-dvh p-4')}>
        <Card className="flex flex-1 flex-col">{children}</Card>
      </body>
    </html>
  )
}
