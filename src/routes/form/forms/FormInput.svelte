<script lang="ts">
	import type {FormInput} from "src/routes/form/types";

	export let question: FormInput;
  let input = '';
</script>
    <div>
      <label for={ question.name } class="block text-sm font-medium text-gray-700 sr-only">
      {question.label}
      </label>
      <div class="mt-1 border-b border-gray-300 focus-within:border-rose-600">
        <input
          type="text"
          name={question.name}
          id={question.name}
          class="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-rose-600 focus:ring-0 sm:text-sm"
          placeholder={question.placeholder}
          bind:value={input}
        />
      </div>
    </div>