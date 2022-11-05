import {
  Accessor,
  Component,
  createEffect,
  createSignal,
  onMount,
} from 'solid-js'
import throttle from 'lodash/throttle'

import Step from './Step'
import ColorPicker from './ColorPicker'
import PickPhrase from './PickPhrase'
import DescribeImage from './DescribeImage'
import Result from './Result'

import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'

import styles from './App.module.css'

export type StepProps = {
  step: number
  currentStep: Accessor<number>
  onPick: (result: string) => void
}

interface Coeff {
  emotionalStability: number
  strongFeelings: number
  indifference: number
}

const App: Component = () => {
  let root: HTMLDivElement | undefined
  const [scrollTop, setScrollTop] = createSignal(0)
  const [pos, setPos] = createSignal({ x: 0, y: 0 })
  const [words, setWords] = createSignal<string[]>([])
  const [coeffs, setCoeffs] = createSignal<Coeff>({
    emotionalStability: 0,
    strongFeelings: 0,
    indifference: 0,
  })

  const [step, setStep] = createSignal(0)

  const handleScroll = throttle(() => {
    setScrollTop(window.scrollY)
  }, 10)

  onMount(() => {
    window.scrollTo(0, 0)

    window.addEventListener('scroll', handleScroll)
  })

  function handleMouseMove(e: MouseEvent) {
    setPos({
      x: e.clientX,
      y: e.clientY,
    })
  }

  const next = () => {
    setStep((step) => step + 1)
  }

  createEffect(() => {
    console.log(words(), coeffs())
  })

  return (
    <div
      class={styles.App}
      onMouseMove={handleMouseMove}
      style={{
        '--index': 'calc(1vh + 1vw)',
        '--scroll-top': `${scrollTop()}px`,
        '--x-position': `${pos().x}px`,
        '--y-position': `${pos().y}px`,
      }}
      ref={root}
    >
      <div id="page" class={styles.root}>
        <Step step={0} currentStep={step}>
          <PickPhrase
            onPick={(result: string) => {
              setWords((words) => [...words, result])
              next()
            }}
            title="Which story narative is closer to you?"
            phrases={['Epic', 'Dramatic', 'Comedic', 'Realistic']}
            columns={4}
          />
        </Step>
        <Step step={1} currentStep={step}>
          <DescribeImage
            onPick={(result: string) => {
              setCoeffs((coeffs) => {
                switch (result) {
                  case 'Discomfort':
                  case 'Ribcage':
                    return {
                      ...coeffs,
                      strongFeelings: coeffs.strongFeelings + 1,
                    }
                  case '4 legged animals':
                  case 'Joy':
                  case 'Calm':
                    return coeffs
                  default:
                    return {
                      ...coeffs,
                      emotionalStability: coeffs.emotionalStability + 1,
                    }
                }
              })

              next()
            }}
            title="What do you see/feel looking at this picture?"
            image={img5}
            phrases={[
              '4 legged animals',
              'Ribcage',
              'Butterfly',
              'Cristmas tree',
              'Joy',
              'Discomfort',
              'Calm',
            ]}
            columns={3}
          />
        </Step>
        <Step step={2} currentStep={step}>
          <PickPhrase
            onPick={(result: string) => {
              setWords((words) => [...words, result])
              next()
            }}
            title="In which fiction sub genre would you be interested to read your next book?"
            phrases={['Fantasy', 'Horror', 'Dystopia', 'Science Fiction']}
            columns={4}
          />
        </Step>
        <Step step={3} currentStep={step}>
          <DescribeImage
            onPick={(result: string) => {
              setCoeffs((coeffs) => {
                switch (result) {
                  case 'Indifference':
                    return {
                      ...coeffs,
                      indifference: coeffs.indifference + 1,
                    }
                  case 'Irritation':
                    return {
                      ...coeffs,
                      emotionalStability: coeffs.emotionalStability + 1,
                    }
                  default:
                    return coeffs
                }
              })

              next()
            }}
            title="What is your attitude to the story told by this picture?"
            image={img1}
            phrases={['Admiration', 'Sympathy', 'Indifference', 'Irritation']}
            columns={4}
          />
        </Step>
        <Step step={4} currentStep={step}>
          <DescribeImage
            onPick={(result: string) => {
              setCoeffs((coeffs) => {
                switch (result) {
                  case 'Wolf Face':
                  case 'Halloween Mask':
                  case 'Spider':
                  case 'Scary Silhouette':
                    return {
                      ...coeffs,
                      strongFeelings: coeffs.strongFeelings + 1,
                    }
                  case 'Female Figure':
                    return {
                      ...coeffs,
                      emotionalStability: coeffs.emotionalStability + 1,
                    }
                  default:
                    return coeffs
                }
              })

              next()
            }}
            title="What do you see in this picture?"
            image={img2}
            phrases={[
              'Wolf Face',
              'Halloween Mask',
              'Spider',
              'Bat',
              'Butterfly',
              'Female Figure',
              'Birds',
              'Scary Silhouette',
            ]}
            columns={4}
          />
        </Step>
        <Step step={5} currentStep={step}>
          <PickPhrase
            onPick={(result: string) => {
              setCoeffs((coeffs) => {
                switch (result) {
                  case 'Anger':
                  case 'Pain':
                    return {
                      ...coeffs,
                      strongFeelings: coeffs.strongFeelings + 1,
                    }
                  case 'Stress':
                  case 'Feeling low':
                  case 'Loneliness':
                    return {
                      ...coeffs,
                      emotionalStability: coeffs.emotionalStability + 1,
                    }
                  case 'Tiredness':
                    return {
                      ...coeffs,
                      indifference: coeffs.indifference + 1,
                    }
                  default:
                    return coeffs
                }
              })

              next()
            }}
            title="Which of these best describes what you're dealing with right now?"
            phrases={[
              'Feeling low',
              'Tiredness',
              'Stress',
              'Loneliness',
              'Anger',
              'Pain',
            ]}
            columns={3}
          />
        </Step>
        <Step step={6} currentStep={step}>
          <DescribeImage
            onPick={(result: string) => {
              setCoeffs((coeffs) => {
                switch (result) {
                  case 'Scissors':
                    return {
                      ...coeffs,
                      strongFeelings: coeffs.strongFeelings + 1,
                    }
                  case 'Scared':
                  case 'Disturbing':
                    return {
                      ...coeffs,
                      emotionalStability: coeffs.emotionalStability + 1,
                    }
                  case 'Indifference':
                    return {
                      ...coeffs,
                      indifference: coeffs.indifference + 1,
                    }
                  default:
                    return coeffs
                }
              })

              next()
            }}
            title="What do you see/feel in this picture?"
            image={img3}
            phrases={[
              'Scissors',
              'Butterfly',
              'Bat',
              'Bird',
              'Scared',
              'Disturbing',
              'Indifference',
            ]}
            columns={4}
          />
        </Step>
        <Step step={7} currentStep={step}>
          <ColorPicker
            onPick={(result: string) => {
              setWords((words) => [...words, result])
              next()
            }}
          />
        </Step>
        <Step step={8} currentStep={step}>
          <DescribeImage
            onPick={(result: string) => {
              setCoeffs((coeffs) => {
                switch (result) {
                  case 'Fight':
                    return {
                      ...coeffs,
                      strongFeelings: coeffs.strongFeelings + 1,
                    }
                  case 'Bug':
                  case 'Dead animal':
                    return {
                      ...coeffs,
                      emotionalStability: coeffs.emotionalStability + 1,
                    }
                  default:
                    return coeffs
                }
              })

              next()
            }}
            title="What do you see in this picture?"
            image={img4}
            phrases={[
              'People lifting heavy object',
              'Fight',
              'Bug',
              'Dancing pair',
              'Drummers',
              'Dead animal',
            ]}
            columns={3}
          />
        </Step>
        <Step step={9} currentStep={step}>
          <Result step={9} currentStep={step} />
        </Step>
      </div>
    </div>
  )
}

export default App
