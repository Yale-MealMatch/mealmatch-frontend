import Description from '@rgossiaux/svelte-headlessui/components/description/Description.svelte';
import type {Question} from 'src/routes/form/types';

export const questions: Question[] = [
	{
		type: 'radio',
		name: 'year',
		label: 'What year are you?',
		description: '',
		options: [
			{ label: 'First-year' },
			{ label: 'Sophomore' },
			{ label: 'Junior' },
			{ label: 'Senior' }
		]
	},
	{
		type: 'checkboxes',
		name: 'year',
		label: 'What year(s) would you like to match with?',
		description: 'We will try to match you with someone within your preferences.',
		options: [
			{ label: 'First-year' },
			{ label: 'Sophomore' },
			{ label: 'Junior' },
			{ label: 'Senior' }
		]
	},
	{
		type: 'radio',
		name: 'pronouns',
		label: 'What are your pronouns?',
		description: 'Your pronouns will be provided to your match for ease of communication.',
		options: [{ label: 'he/him' }, { label: 'she/her' }, { label: 'other' }]
	},
	{
		type: 'checkboxes',
		name: 'pronouns',
		label: 'Match me with someone with ___ pronouns.',
		description: 'We will try our best!',
		options: [{ label: 'he/him' }, { label: 'she/her' }, { label: 'other' }]
	},
	{
		type: 'input',
		name: 'phone',
		label: 'What is your phone number?',
		description: 'Your number will be provided to your match for ease of communication.',
		placeholder: '1234567890'
	},
	{
		type: 'input',
		name: 'phone',
		label: 'Create a nickname:',
		description:
			"Your match will refer to you by your nickname before meeting in person. Don't use your real name. ",
		placeholder: 'Your answer'
	},
	{
		type: 'textarea',
		name: 'bio',
		label: 'Personal description (75 words max, optional)',
		description: Description,
		placeholder: 'I like to be'
	}
];
