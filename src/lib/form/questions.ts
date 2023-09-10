import type { Question } from './types';

export const questions: Question[][] = [
	[
		{
			type: 'radio',
			name: 'year',
			label: 'What year are you?',
			description: '',
			options: [
				{ label: 'First-year', value: '2027' },
				{ label: 'Sophomore', value: '2026' },
				{ label: 'Junior', value: '2025' },
				{ label: 'Senior', value: '2024' }
			],
			validationFunction: (value) => !!value,
			errorMessage: 'Please select a year'
		},
		{
			type: 'radio',
			name: 'pronouns',
			label: 'What are your pronouns?',
			description: 'Your match will be shown your bio for ease of communication.',
			options: [
				{ label: 'she/her', value: 'she/her' },
				{ label: 'he/him', value: 'he/him' },
				{ label: 'they/them', value: 'they/them' },
				{ label: 'other', value: 'other' }
				// { label: 'prefer not to say', value: 'prefer not to say' }
			],
			validationFunction: (value) => !!value,
			errorMessage: 'Please select your pronouns'
		}
	],
	[
		{
			type: 'checkboxes',
			name: 'year_match',
			label: 'What year(s) would you like to match with?',
			description: 'We will try our best!',
			options: [
				{ label: 'First-year', value: '2027' },
				{ label: 'Sophomore', value: '2026' },
				{ label: 'Junior', value: '2025' },
				{ label: 'Senior', value: '2024' }
			],
			validationFunction: (value) => !!value && value.length > 0,
			errorMessage: 'Please select at least one year'
		},
		{
			type: 'radio',
			name: 'pronouns_match',
			label: 'Match me with somebody with ____ pronouns.',
			description: '',
			options: [
				{ label: 'any', value: 'any' },
				{ label: 'same', value: 'same' },
				{ label: 'different', value: 'different' }
			],
			validationFunction: (value) => !!value,
			errorMessage: 'Please select an option'
		}
	],
	[
		// {
		// 	type: 'input',
		// 	name: 'email',
		// 	label: 'What is your Yale email?',
		// 	description: '',
		// 	placeholder: 'Your email',
		// 	validationFunction: (value) => /@yale.edu$/.test(value),
		// 	errorMessage: 'Please enter your Yale email address (@yale.edu)'
		// },
		{
			type: 'input',
			name: 'phone',
			label: 'What is your phone number? (10 digits, no special characters)',
			description: 'Your match will be given your number for ease of communication.',
			placeholder: 'Your number',
			validationFunction: (value) => /^\d{10}$/.test(value),
			errorMessage: 'Please enter 10 digits in the form XXXYYYZZZZ'
		},
		{
			type: 'input',
			name: 'nickname',
			label: 'Create a nickname:',
			description:
				'For privacy, your match will know you by your nickname before meeting in person.',
			placeholder: 'Your nickname',
			validationFunction: (value) => !!value,
			errorMessage: 'Please enter a nickname'
		},
		{
			type: 'textarea',
			name: 'bio',
			label: '<span class="text-slate-500">(Recommended)</span> Short bio (80 words max)',
			// description:
			description: `Based on your bio, we'll try to provide a compatible match. If you choose not to answer, you will be matched randomly.
<br />
<br />
Your match will be shown your bio if you provide one.
<br />
<br />
Some possible topics:
<ul class="list-disc list-inside">
<li>Your interests and campus involvements</li>
<li>Your aspirations</li>
<li>Qualities you hope to find in a match</li>
</ul>
<br />
Please don't include any information that directly reveals who you are.`,
			placeholder: 'List keywords separated by commas',
			// validationFunction: (value) => /,\s*/.test(value),
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			validationFunction: (value) => !!value,
			errorMessage: 'Please enter a bio'
		},
		// {
		// 	type: 'input',
		// 	name: 'keywords',
		// 	label:
		// 		'<span class="text-slate-500">(Recommended)</span> List keywords that describe you, such as hobbies, interest groups, personality traits, etc.:',
		// 	// description:
		// 	description:
		// 		'Example response: <em>literature, philosophy, Led Zeppelin, entrepreneurship, swimming, curious</ em > <br /> Your keywords will be shown to your match.',
		// 	placeholder: 'List keywords separated by commas',
		// 	// validationFunction: (value) => /,\s*/.test(value),
		// 	// eslint-disable-next-line @typescript-eslint/no-unused-vars
		// 	validationFunction: (value) => true,
		// 	errorMessage: 'Please enter a comma separated list of keywords'
		// },
		{
			type: 'input',
			name: 'keywords_match',
			label:
				'<span class="text-slate-500">(Recommended)</span> List keywords you hope to find in the bio of the person you match with:',
			description: 'Example: music production, badminton, research, entrepreneurship, paramotor',
			placeholder: 'List keywords separated by commas',
			// validationFunction: (value) => /,\s*/.test(value),
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			validationFunction: () => true,
			errorMessage: 'Please enter a comma-separated list of keywords'
		},
		{
			type: 'checkboxes',
			name: 'signed_confirmation',
			label: 'By submitting this form, I agree to the following:',
			description: '',
			options: [
				{
					label:
						'I will not ghost my match. Ghosting may result in a ban from using MealMatch.',
					value: '1'
				},
				{
					label:
						'I will not ask for any identity-revealing information (real name, Instagram, etc.) from my match before meeting in person.',
					value: '2'
				},
				{
					label:
						'My email and phone number are correct, and I will opt-in via weekly confirmation texts to get matched.',
					value: '3'
				}
			],
			validationFunction: (value) => !!value && value.length === 3,
			errorMessage: 'Please accept all three statements'
		}
	]
];
