import type { definitions } from '$lib/types/supabase';

type SelectOption = {
	label: string;
	value: string | number;
	subtitle?: string;
};

type FormCheckboxesOption = SelectOption;
type FormRadioSelectOption = SelectOption;

type FormRadio = {
	type: 'radio';
	name: keyof definitions['responses'];
	label: string;
	description: string;
	options: FormRadioSelectOption[];
};

type FormCheckboxes = {
	type: 'checkboxes';
	name: keyof definitions['responses'];
	label: string;
	description: string;
	options: FormCheckboxesOption[];
};

type FormInput = {
	type: 'input';
	name: keyof definitions['responses'];
	label: string;
	description: string;
	placeholder: string;
	validationFunction: (value: string) => boolean;
	errorMessage: string;
};

// Description can be a string or a Svelte component
type FormTextArea = {
	type: 'textarea';
	name: keyof definitions['responses'];
	label: string;
	description: string | typeof SvelteComponent;
	placeholder: string;
	validationFunction: (value: string) => boolean;
	errorMessage: string;
};

export type Question = FormRadio | FormCheckboxes | FormInput | FormTextArea;
