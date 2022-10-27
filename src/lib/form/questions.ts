import type { Question } from './types';

export const questions: Question[] = [
	{
		type: 'radio',
		name: 'year',
		label: 'What year are you?',
		description: '',
		options: [
			{ label: 'First-year', value: 2026 },
			{ label: 'Sophomore', value: 2025 },
			{ label: 'Junior', value: 2024 },
			{ label: 'Senior', value: 2023 }
		],
		validationFunction: (value) => value > 0,
		errorMessage: 'Please select a year'
	},
	{
		type: 'checkboxes',
		name: 'year_match',
		label: 'What year(s) would you like to match with?',
		description: 'We will try to match you with someone within your preferences.',
		options: [
			{ label: 'First-year', value: 2026 },
			{ label: 'Sophomore', value: 2025 },
			{ label: 'Junior', value: 2024 },
			{ label: 'Senior', value: 2023 }
		],
		validationFunction: (value) => value.length > 0,
		errorMessage: 'Please select at least one year'
	},
	{
		type: 'radio',
		name: 'pronouns',
		label: 'What are your pronouns?',
		description: 'Your pronouns will be provided to your match for ease of communication.',
		options: [
			{ label: 'he/him', value: 'he/him' },
			{ label: 'she/her', value: 'she/her' },
			{ label: 'other', value: 'other' }
		],
		validationFunction: (value) => value !== '',
		errorMessage: 'Please select your pronouns'
	},
	{
		type: 'checkboxes',
		name: 'pronouns_match',
		label: 'Match me with someone with ___ pronouns.',
		description: 'We will try our best!',
		options: [
			{ label: 'Any', value: 'any' },
			{ label: 'Same', value: 'same' },
			{ label: 'Different', value: 'different' },
		],
		validationFunction: (value) => value.length > 0,
		errorMessage: 'Please select at least one pronoun'
	},
	{
		type: 'input',
		name: 'phone',
		label: 'What is your phone number? (Ten digits, no special characters)',
		description: 'Your number will be provided to your match for ease of communication.',
		placeholder: '1234567890',
		validationFunction: (value) => /^\d{10}$/.test(value),
		errorMessage: 'Please enter 10 digits in the form 1234567890'
	},
	{
		type: 'input',
		name: 'nickname',
		label: 'Create a nickname:',
		description:
			"Your match will refer to you by your nickname before meeting in person. Don't use your real name. ",
		placeholder: 'Your answer',
		validationFunction: (value) => value.length > 0,
		errorMessage: 'Please enter a nickname.'
	},
	{
		type: 'textarea',
		name: 'bio',
		label: 'Personal description (75 words max, optional)',
		description: `<p>
		Based on your answer to this question, we will try to match you with someone you are compatible
		with. If you choose not to answer it, we will match you randomly.
			</p>
		<strong>If you answer this question, your response will be shown to your match.</strong>
		<div>
		<p>Some things you can talk about:</p>
		<ul class="list-disc pl-5">
		<li>Your interests</li>
		<li>Your goals</li>
		<li>What you hope to find in the person you match with</li>
		</ul>
		<p>Please don't include any information that directly reveals who you are.</p>
		</div>
		`,
		placeholder: 'I like to be',
		validationFunction: () => true,
		errorMessage: ''
	}
];
