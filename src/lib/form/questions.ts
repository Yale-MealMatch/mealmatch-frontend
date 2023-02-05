import type { Question } from './types';

export const questions: Question[][] = [
	[
		{
			type: 'radio',
			name: 'year',
			label: 'What year are you?',
			description: '',
			options: [
				{ label: 'First-year', value: '2026' },
				{ label: 'Sophomore', value: '2025' },
				{ label: 'Junior', value: '2024' },
				{ label: 'Senior', value: '2023' }
			],
			validationFunction: (value) => !!value,
			errorMessage: 'Please select a year'
		},
		{
			type: 'radio',
			name: 'pronouns',
			label: 'What are your pronouns?',
			description: 'Your pronouns will be provided to your match for ease of communication.',
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
			description: 'We will try to match you with someone within your preferences.',
			options: [
				{ label: 'First-year', value: '2026' },
				{ label: 'Sophomore', value: '2025' },
				{ label: 'Junior', value: '2024' },
				{ label: 'Senior', value: '2023' }
			],
			validationFunction: (value) => !!value,
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
			description: 'Your number will be provided to your match for ease of communication.',
			placeholder: 'Your number',
			validationFunction: (value) => /^\d{10}$/.test(value),
			errorMessage: 'Please enter 10 digits in the form XXXYYYZZZZ'
		},
		{
			type: 'input',
			name: 'nickname',
			label: 'Create a nickname:',
			description:
				'For privacy, your match will refer to you by your nickname before meeting in person.',
			placeholder: 'Your nickname',
			validationFunction: (value) => !!value,
			errorMessage: 'Please enter a nickname'
		},
		{
			type: 'textarea',
			name: 'bio',
			label: '<span class="text-slate-500">(Recommended)</span> Personal Bio',
			// description:
			description: `Based on your answer to this question, we will try to match you with someone you are compatible with. If you choose not to answer it, we will match you randomly.
<br />
<br />
If you answer this question, your response will be shown to your match.
<br />
<br />
Some things you can talk about:
<ul class="list-disc list-inside">
<li>What you're looking for in a match</li>
<li>What you're interested in</li>
<li>What you're passionate about</li>
<li>What you're looking forward to in college</li>
<li>Your interests</li>
<li>Your goals</li>
<li>What you hope to find in the person you match with</li>
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
				'<span class="text-slate-500">(Recommended)</span> List keywords that describe your ideal match:',
			// description:
			// 'For instance, "literature, philosophy, Led Zeppelin, entrepreneurship, swimming, curious"',
			description:
				'They can be the same as yours, or different. We will try our best to match you to someone with these keywords in their description!',
			placeholder: 'List keywords separated by commas',
			// validationFunction: (value) => /,\s*/.test(value),
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			validationFunction: () => true,
			errorMessage: 'Please enter a comma separated list of keywords'
		},
		{
			type: 'checkboxes',
			name: 'signed_confirmation',
			label: 'By submitting this form, I agree to the following:',
			description: '',
			options: [
				{
					label:
						'I will not ghost my match, and understand that doing so may ban me from using MealMatch in the future.',
					value: '1'
				},
				{
					label:
						'I will not ask for any identity-revealing information (real name, Instagram, etc.) from my match before meeting them in person unless they volunteer to do so.',
					value: '2'
				},
				{
					label:
						'I certify that my email and phone number are correct, and that I will opt in via weekly confirmation texts to be matched.',
					value: '3'
				}
			],
			validationFunction: (value) => value.length === 3,
			errorMessage: 'Please accept all three statements'
		}
	]
];
