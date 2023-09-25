import React from 'react';

export interface BaseFormControlProps<T extends HTMLElement> {
	label: string;
	value: any;
	name?: string;
	required?: boolean;
	onChange?: (e: React.ChangeEvent<T>) => void;
}
