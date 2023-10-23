import React, { forwardRef } from 'react';
import { Input } from '../Input/Input.tsx';

interface DatePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(({ ...rest }, ref) => {
	return <Input type={'date'} ref={ref} {...rest} />
})
