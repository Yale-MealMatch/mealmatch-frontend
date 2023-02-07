import type { Database } from 'types/supabase';

export type Row = Database['public']['Tables']['profiles']['Row'];

type SelectOption = {
	label: string;
	value: string;
	subtitle?: string;
};

type FormRadio = {
	type: 'radio';
	name: keyof Row;
	label: string;
	description: string;
	options: SelectOption[];
	validationFunction: (value: string) => boolean;
	errorMessage: string;
};

type FormCheckboxes = {
	type: 'checkboxes';
	name: keyof Row;
	label: string;
	description: string;
	options: SelectOption[];
	validationFunction: (value: string[]) => boolean;
	errorMessage: string;
};

type FormInput = {
	type: 'input';
	name: keyof Row;
	label: string;
	description: string;
	placeholder: string;
	validationFunction: (value: string) => boolean;
	errorMessage: string;
};

// Description can be a string or a Svelte component
type FormTextArea = {
	type: 'textarea';
	name: keyof Row;
	label: string;
	description: string | typeof SvelteComponent;
	placeholder: string;
	validationFunction: (value: string) => boolean;
	errorMessage: string;
};

export type Question = FormRadio | FormCheckboxes | FormInput | FormTextArea;
