import React from 'react'
import {
  Select,
  FormControl,
  InputLabel,
  OutlinedInput
} from '@material-ui/core'
import { SelectProps } from '@material-ui/core/Select'

type Props = Pick<SelectProps, 'value' | 'onChange' | 'children'> & {
  label: string
  name: string
}

const OutlinedSelect = (props: Props) => {
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor={props.name}>{props.label}</InputLabel>
      <Select
        input={<OutlinedInput labelWidth={200} name={props.name} />}
        onChange={props.onChange}
        value={props.value}
      >
        {props.children}
      </Select>
    </FormControl>
  )
}

export default OutlinedSelect
