'use client'

import { PropsWithChildren, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible'
import { cn } from '@/lib/utils'

type SectionProps = {
  collapsable?: boolean
  shrink?: boolean
  title: string
  className?: string
  contentCn?: string
}

export const Section = ({
  collapsable = false,
  shrink,
  children,
  title,
  className,
  contentCn,
}: PropsWithChildren<SectionProps>) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className={cn(className, shrink && 'border-0 shadow-none w-fit')}>
      <Collapsible
        open={!collapsable || (isOpen && collapsable)}
        onOpenChange={setIsOpen}
      >
        <CollapsibleTrigger className="w-full">
          <CardHeader className={cn('items-start p-4', shrink && 'p-2')}>
            <CardTitle className="flex w-full justify-between text-lg">
              <p>{title}</p>
              {collapsable ? (
                isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )
              ) : null}
            </CardTitle>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent
            className={cn('px-4 pb-4', shrink && 'px-2 pb-2', contentCn)}
          >
            {children}
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
}
