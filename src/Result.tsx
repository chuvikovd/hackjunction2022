import { Component, createEffect } from 'solid-js'

import { StepProps } from './App'
import { DURATION } from './scrollToTarget'

import result from './result.mp4'

import styles from './Result.module.css'

const Result: Component<Pick<StepProps, 'step' | 'currentStep'>> = ({
  step,
  currentStep,
}) => {
  let video: HTMLVideoElement | undefined

  createEffect(() => {
    if (step === currentStep()) {
      setTimeout(() => {
        if (!video) return

        video.style.opacity = '1'

        setTimeout(() => {
          video?.play()
        }, 1000)
      }, DURATION)
    }
  })

  return (
    <div>
      <video
        class={styles.video}
        src={result}
        controls={false}
        autoplay={false}
        ref={video}
      />
    </div>
  )
}

export default Result
