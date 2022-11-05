import { Component, createEffect, createSignal } from 'solid-js'

import { StepProps } from './App'

import { DURATION } from './scrollToTarget'

import styles from './SingleWord.module.css'

const SingleWord: Component<StepProps> = ({ step, currentStep, onPick }) => {
  let input: HTMLInputElement | undefined

  const [value, setValue] = createSignal('')

  createEffect(() => {
    if (step === currentStep()) {
      setTimeout(() => {
        input?.focus()
      }, DURATION)
    }
  })

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') onPick(value())
  }

  const onChange = (
    e: Event & { currentTarget: HTMLInputElement; target: Element },
  ) => {
    setValue((e.target as HTMLInputElement).value)
  }

  const onBlur = () => {
    if (step === currentStep()) {
      requestAnimationFrame(() => input?.focus())
    }
  }

  return (
    <div class={styles.root}>
      <h2 class={styles.title}>Write exactly one word, any you want</h2>
      <input
        type="text"
        class={styles.input}
        ref={input}
        value={value()}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
      />
    </div>
  )
}

export default SingleWord
