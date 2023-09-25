import { BaseFormControlProps } from '../models/base-form-control-props.ts';
import { ReactElement } from 'react';
import { Input } from '../Input/Input.tsx';

interface DatePickerProps extends BaseFormControlProps<HTMLInputElement> {
}

export function DatePicker({ label, value, name, required, onChange }: DatePickerProps): ReactElement {
	return <Input type={'date'} label={label} value={value} required={required} name={name} onChange={onChange} />
}
