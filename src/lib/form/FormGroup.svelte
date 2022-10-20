<script lang="ts">
	import FormHeader from './FormHeader.svelte';
	import FormRadioGroup from './FormRadioGroup.svelte';
	import FormCheckboxes from './FormCheckboxes.svelte';
	import FormInput from './FormInput.svelte';
	import FormTextArea from './FormTextArea.svelte';
	import type { Question } from '$lib/form/types';

	export let question: Question;
	export let value: string | string[] = '';
	$: console.log(value);
</script>

<div class="rounded-lg border border-gray-200 p-6 shadow-md">
	<FormHeader title={question.label} description={question.description} />
	{#if question.type === 'radio'}<FormRadioGroup {question} bind:value /> {/if}
	{#if question.type === 'checkboxes'}<FormCheckboxes {question} bind:value /> {/if}
	{#if question.type === 'input'}<FormInput {question} bind:value /> {/if}
	{#if question.type === 'textarea'}<FormTextArea {question} bind:value /> {/if}
</div>
