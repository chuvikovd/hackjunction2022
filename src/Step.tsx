import { Component, createEffect, JSX } from 'solid-js'

import { StepProps } from './App'

import scrollToTarget from './scrollToTarget'

import styles from './Step.module.css'

const Step: Component<
  Omit<StepProps, 'onPick'> & { children?: JSX.Element }
> = ({ step, currentStep, children }) => {
  createEffect(() => {
    const current = document.querySelector(
      `[data-step="${step}"]`,
    ) as HTMLElement

    if (!current) return

    if (step === currentStep()) {
      current.style.display = 'flex'

      if (step <= 0) return

      requestAnimationFrame(() => {
        scrollToTarget(current, () => {
          const previous = document.querySelector(
            `[data-step="${step - 1}"]`,
          ) as HTMLElement

          if (!previous) return

          previous.style.display = ''

          window.scrollTo(0, 0)
        })
      })
    }
  })

  return (
    <div class={styles.root} data-step={step}>
      {children}
    </div>
  )
}

export default Step
