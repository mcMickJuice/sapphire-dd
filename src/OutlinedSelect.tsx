import React from 'react'
import ReadDom from 'react-dom'
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
  const labelRef = React.useRef<InputLabel>(null)
  const [labelWidth, updateLabelWidth] = React.useState(0)
  React.useEffect(() => {
    if (labelRef.current != null) {
      const node = ReadDom.findDOMNode(labelRef.current) as HTMLElement
      const width = node.offsetWidth
      updateLabelWidth(width)
    }
  }, [])
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel ref={labelRef} htmlFor={props.name}>
        {props.label}
      </InputLabel>
      <Select
        input={<OutlinedInput labelWidth={labelWidth} name={props.name} />}
        onChange={props.onChange}
        value={props.value}
      >
        {props.children}
      </Select>
    </FormControl>
  )
}

export default OutlinedSelect
