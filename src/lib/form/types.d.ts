import type { Database } from 'types/supabase';
type SelectOption = {
	label: string;
	value: string | number;
	subtitle?: string;
};

type FormCheckboxesOption = SelectOption;
type FormRadioSelectOption = SelectOption;

type KeyOfType<T, V> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T];

type FormRadio = {
	type: 'radio';
	name: KeyOfType<Database['public']['Tables']['responses']['Row'], string | number>;
	label: string;
	description: string;
	options: FormRadioSelectOption[];
	validationFunction: (value: string | number) => boolean;
	errorMessage: string;
};

type FormCheckboxes = {
	type: 'checkboxes';
	name: KeyOfType<Database['public']['Tables']['responses']['Row'], string[] | number[]>;
	label: string;
	description: string;
	options: FormCheckboxesOption[];
	validationFunction: (value: string[] | number[]) => boolean;
	errorMessage: string;
};

type FormInput = {
	type: 'input';
	name: KeyOfType<Database['public']['Tables']['responses']['Row'], string>;
	label: string;
	description: string;
	placeholder: string;
	validationFunction: (value: string) => boolean;
	errorMessage: string;
};

// Description can be a string or a Svelte component
type FormTextArea = {
	type: 'textarea';
	name: KeyOfType<Database['public']['Tables']['responses']['Row'], string>;
	label: string;
	description: string | typeof SvelteComponent;
	placeholder: string;
	validationFunction: (value: string) => boolean;
	errorMessage: string;
};

export type Question = FormRadio | FormCheckboxes | FormInput | FormTextArea;
