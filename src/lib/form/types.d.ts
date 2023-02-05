import type { Database } from 'types/supabase';
type SelectOption = {
	label: string;
	value: string;
	subtitle?: string;
};

type FormCheckboxesOption = SelectOption;
type FormRadioSelectOption = SelectOption;

type FormRadio = {
	type: 'radio';
	name: keyof Database['public']['Tables']['profiles']['Row'];
	label: string;
	description: string;
	options: FormRadioSelectOption[];
	validationFunction: (value: string) => boolean;
	errorMessage: string;
};

type FormCheckboxes = {
	type: 'checkboxes';
	name: keyof Database['public']['Tables']['profiles']['Row'];
	label: string;
	description: string;
	options: FormCheckboxesOption[];
	validationFunction: (value: string[]) => boolean;
	errorMessage: string;
};

type FormInput = {
	type: 'input';
	name: keyof Database['public']['Tables']['profiles']['Row'];
	label: string;
	description: string;
	placeholder: string;
	validationFunction: (value: string) => boolean;
	errorMessage: string;
};

// Description can be a string or a Svelte component
type FormTextArea = {
	type: 'textarea';
	name: keyof Database['public']['Tables']['profiles']['Row'];
	label: string;
	description: string | typeof SvelteComponent;
	placeholder: string;
	validationFunction: (value: string) => boolean;
	errorMessage: string;
};

export type Question = FormRadio | FormCheckboxes | FormInput | FormTextArea;
