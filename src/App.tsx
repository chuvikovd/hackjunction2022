import { Accessor, Component, createSignal, onMount } from 'solid-js';
import throttle from 'lodash/throttle'

import Step from './Step'
import ImageGrid from './ImageGrid'
import ColorPicker from './ColorPicker';
import SingleWord from './SingleWord';
import Cloud from './Cloud';

import styles from './App.module.css';

export type StepProps = {
  step: number
  currentStep: Accessor<number>
  next: () => void
}

const App: Component = () => {
  let root: HTMLDivElement | undefined
  const [scrollTop, setScrollTop] = createSignal(0);
  const [pos, setPos] = createSignal({ x: 0, y: 0 });

  const [step, setStep] = createSignal(0)

  const handleScroll = throttle(() => {
    setScrollTop(window.scrollY)
  }, 10);

  onMount(() => {
    window.scrollTo(0, 0)

    window.addEventListener('scroll', handleScroll)
  })

  function handleMouseMove(e: MouseEvent) {
    setPos({
      x: e.clientX,
      y: e.clientY
    });
  }

  const next = () => setStep(step => step + 1)

  return (
    <div
      class={styles.App}
      onMouseMove={handleMouseMove}
      style={{
        "--index": "calc(1vh + 1vw)",
        "--scroll-top": `${scrollTop()}px`,
        "--x-position": `${pos().x}px`,
        "--y-position": `${pos().y}px`,
      }}
      ref={root}
    >
      <div id="page" class={styles.root}>
        <Step step={0} currentStep={step}>
          <ImageGrid next={next} images={Array.from(Array(9).keys()).map(() => "https://via.placeholder.com/150x150")} />
        </Step>
        <Step step={1} currentStep={step}>
          <ColorPicker next={next} />
        </Step>
        <Step step={2} currentStep={step}>
          <SingleWord step={2} currentStep={step} next={next} />
        </Step>
        <Step step={3} currentStep={step}>
          <Cloud next={next} phrases={[
            'zalupa betona 1',
            'lorem ipsum',
            'dyorka zhopy',
            'hevosenpaan how are you today my dear chatbot',
            'Zirga galva top 1 podjezda',
            'laksdjfasdkljfsad sadfksadnfs fasdf'
          ]} />
        </Step>
      </div>
    </div>
  );
};

export default App;
