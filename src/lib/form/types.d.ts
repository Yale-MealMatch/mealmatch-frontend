type SelectOption = {
	label: string;
	value: string | number;
	subtitle?: string;
};

type FormCheckboxesOption = SelectOption;
type FormRadioSelectOption = SelectOption;

type FormRadio = {
	type: 'radio';
	name: string;
	label: string;
	description: string;
	options: FormRadioSelectOption[];
};

type FormCheckboxes = {
	type: 'checkboxes';
	name: string;
	label: string;
	description: string;
	options: FormCheckboxesOption[];
};

type FormInput = {
	type: 'input';
	name: string;
	label: string;
	description: string;
	placeholder: string;
};

// Description can be a string or a Svelte component
type FormTextArea = {
	type: 'textarea';
	name: string;
	label: string;
	description: string | typeof SvelteComponent;
	placeholder: string;
};

export type Question = FormRadio | FormCheckboxes | FormInput | FormTextArea;
