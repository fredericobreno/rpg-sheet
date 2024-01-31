import { FieldPath, useFormContext } from 'react-hook-form'
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  FormField,
} from '../ui/form'
import { Input } from '../ui/input'
import { FormType } from '.'

type FormFieldProps = {
  label: string
  name: FieldPath<FormType>
}

export const InputField = ({ label, name }: FormFieldProps) => {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
