import type { Question } from './types';

export const questions: Question[][] = [
	[
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
			type: 'radio',
			name: 'pronouns',
			label: 'What are your pronouns?',
			description: 'Your pronouns will be provided to your match for ease of communication.',
			options: [
				{ label: 'he/him', value: 'he/him' },
				{ label: 'she/her', value: 'she/her' },
				{ label: 'they/them', value: 'they/them' },
				{ label: 'other', value: 'other' }
			],
			validationFunction: (value) => value !== '',
			errorMessage: 'Please select your pronouns'
		}
	],
	[
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
			name: 'pronouns_match',
			label: 'Match me with someone with ____ pronouns.',
			description: 'We will try our best!',
			options: [
				{ label: 'any', value: 'any' },
				{ label: 'same', value: 'same' },
				{ label: 'different', value: 'different' }
			],
			validationFunction: (value) => value !== '',
			errorMessage: 'Please select an option'
		}
	],
	[
		{
			type: 'input',
			name: 'nickname',
			label: 'Create a nickname:',
			description:
				'For privacy, your match will refer to you by your nickname before meeting in person.',
			placeholder: 'Your answer',
			validationFunction: (value) => value.length > 0,
			errorMessage: 'Please enter a nickname'
		},
		{
			type: 'input',
			name: 'email',
			label: 'What is email address?',
			description: 'Please make sure that this is correct',
			placeholder: 'jane.doe@yale.edu',
			validationFunction: (value) => /@yale.edu$/.test(value),
			errorMessage: 'Please enter your Yale email address (@yale.edu)'
		},
		{
			type: 'input',
			name: 'phone',
			label: 'What is your phone number? (Ten digits, no special characters)',
			description: 'Your number will be provided to your match for ease of communication.',
			placeholder: '1234567890',
			validationFunction: (value) => /^\d{10}$/.test(value),
			errorMessage: 'Please enter 10 digits in the form xxxyyyzzzz'
		},
		{
			type: 'input',
			name: 'keywords',
			label:
				'List keywords that describe you (hobbies, interest groups, personality traits, etc.):',
			// description:
			// 'For instance, "literature, philosophy, Led Zeppelin, entrepreneurship, swimming, curious"',
			description:
				'Example response: <em>literature, philosophy, Led Zeppelin, entrepreneurship, swimming, curious</em>',
			placeholder: 'Your answer',
			validationFunction: (value) => /,\s*/.test(value),
			errorMessage: 'Please enter a comma separated list of keywords'
		},
		{
			type: 'input',
			name: 'keywords_match',
			label: 'List keywords that describe your ideal match:',
			// description:
			// 'For instance, "literature, philosophy, Led Zeppelin, entrepreneurship, swimming, curious"',
			description: 'They can be the same as yours, or different.',
			placeholder: 'Your answer',
			validationFunction: (value) => /,\s*/.test(value),
			errorMessage: 'Please enter a comma separated list of keywords'
		}
	]
];
