<script lang="ts">
	import type {FormRadio} from "src/routes/form/types";

	export let question: FormRadio;
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
const selected = []
</script>
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroupLabel className="sr-only">{question.name}</RadioGroupLabel>
      <div className="space-y-4">
        {#each question.options as option, index}
          <RadioGroupOption
            key={index}
            value={option}
            className={({ checked, active }) =>
              classNames(
                checked ? 'border-transparent' : 'border-gray-300',
                active ? 'border-rose-500 ring-2 ring-rose-500' : '',
                'relative block cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between'
              )
            }
          >
            {({ active, checked }) => (
              <>
                <span className="flex items-center">
                  <span className="flex flex-col text-sm">
                    <RadioGroup.Label as="span" className="font-medium text-gray-900">
                      {option.label}
                    </RadioGroup.Label>
                    <RadioGroup.Description as="span" className="text-gray-500">
                      <span className="block sm:inline">{option.subtitle}</span>{' '}
                    </RadioGroup.Description>
                  </span>
                </span>
                <RadioGroup.Description
                  as="span"
                  className="mt-2 flex text-sm sm:mt-0 sm:ml-4 sm:flex-col sm:text-right"
                >
                  <span className="ml-1 text-gray-500 sm:ml-0">{option.right}</span>
                </RadioGroup.Description>
                <span
                  className={classNames(
                    active ? 'border' : 'border-2',
                    checked ? 'border-rose-500' : 'border-transparent',
                    'pointer-events-none absolute -inset-px rounded-lg'
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroupOption>
      </div>
      <div>{}</div>
    </RadioGroup>