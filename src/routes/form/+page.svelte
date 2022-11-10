<script lang="ts">
	import FormCheckboxes from '$lib/form/FormCheckboxes.svelte';
	import FormHeader from '$lib/form/FormHeader.svelte';
	import FormInput from '$lib/form/FormInput.svelte';
	import FormRadioGroup from '$lib/form/FormRadioGroup.svelte';
	import FormTextArea from '$lib/form/FormTextArea.svelte';
	import NextButton from '$lib/form/NextButton.svelte';
	import PreviousButton from '$lib/form/PreviousButton.svelte';
	import { questions } from '$lib/form/questions';
	import ProgressBar from './ProgressBar.svelte';
	import { postUserResponses } from './+page';
	import {responses} from './+page';

	let currentPageIndex = 0;
	$: currentPage = questions[currentPageIndex];

	let isError = false;
	const previousSlide = () => (isError ? '' : currentPageIndex--);
	const nextSlide = () => (isError ? '' : currentPageIndex++);
	const jumpSlide = (index: number) => (isError ? '' : (currentPageIndex = index));
</script>
