import { FieldPath, useFormContext } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { FormType } from '.'
import { Rating } from './rating'

type RatingFieldProps = {
  label: string
  name: FieldPath<FormType>
}

export const RatingField = ({ label, name }: RatingFieldProps) => {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="whitespace-nowrap">{label}</FormLabel>
          <FormControl>
            <Rating {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
