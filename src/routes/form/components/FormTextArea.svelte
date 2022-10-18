<script lang="ts">
	import type {FormTextArea} from "src/routes/form/types";

	export let question: FormTextArea;
  let input = ''
</script>
    <div>
      <label for={ question.name } class="block text-sm font-medium text-gray-700 sr-only">
      {question.label}
      </label>
      <div class="mt-1">
        <textarea
          rows={4}
          name={question.name}
          id={question.name}
          class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder={question.placeholder}
          bind:value={input}
        />
      </div>
    </div>