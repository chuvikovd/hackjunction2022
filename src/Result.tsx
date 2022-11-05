import { Component, createEffect } from 'solid-js'

import { StepProps } from './App'
import { DURATION } from './scrollToTarget'

import result from './result.mp4'

import styles from './Result.module.css'

const Result: Component<Pick<StepProps, 'step' | 'currentStep'>> = ({
  step,
  currentStep,
}) => {
  let title: HTMLDivElement | undefined
  let video: HTMLVideoElement | undefined

  createEffect(() => {
    const delay = Math.floor(Math.random() * (10 - 5 + 1) + 5)

    if (step === currentStep()) {
      setTimeout(() => {
        if (!video || !title) return

        title.classList.add(styles.exit)

        setTimeout(() => {
          if (!video) return

          video.style.display = 'block'
          video.style.opacity = '1'

          setTimeout(() => {
            video?.play()
          }, 1000)
        }, 600)
      }, DURATION + delay * 1000)
    }
  })

  return (
    <div>
      <h2 class={styles.title} ref={title}>
        Wait a bit, visualising...
      </h2>
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
