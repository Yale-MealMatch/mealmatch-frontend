<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import { onMount } from 'svelte';

	let currentQuestionIndex = 0;
	const previousSlide = () => {
		if (currentQuestionIndex > 0) currentQuestionIndex--;
	};
	const nextSlide = () => {
		if (currentQuestionIndex < questions.length - 1) currentQuestionIndex++;
	};
	const jumpSlide = (index: number) => (currentQuestionIndex = index);
	$: question = questions[currentQuestionIndex] as Question;
</script>