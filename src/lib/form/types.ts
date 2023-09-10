import type { Database } from '$lib/types/supabase';
import type { SvelteComponent } from 'svelte';

export type Row = Database['public']['Tables']['profiles']['Row'];

type SelectOption = {
	label: string;
	value: string;
	subtitle?: string;
};

type ValidationFn<T> = (value: T) => boolean;

type BaseQuestion = {
	name: keyof Row;
	label: string;
	description: string | typeof SvelteComponent;
	errorMessage: string;
};

type FormRadio = BaseQuestion & {
	type: 'radio';
	options: SelectOption[];
	validationFunction: ValidationFn<string>;
};

type FormCheckboxes = BaseQuestion & {
	type: 'checkboxes';
	options: SelectOption[];
	validationFunction: ValidationFn<string[]>;
};

type FormInput = BaseQuestion & {
	type: 'input';
	placeholder: string;
	validationFunction: ValidationFn<string>;
};

type FormTextArea = BaseQuestion & {
	type: 'textarea';
	placeholder: string;
	validationFunction: ValidationFn<string>;
};

export type Question = FormRadio | FormCheckboxes | FormInput | FormTextArea;
