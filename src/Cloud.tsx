import { Component } from "solid-js";

import { StepProps } from "./App";

import styles from "./Cloud.module.css"

type CloudProps = Pick<StepProps, 'next'> & {
  phrases: string[]
}

const Cloud: Component<CloudProps> = ({ next, phrases }) => {
  return (
    <div>
      <h2 class={styles.title}>Pick a phrase you like the most</h2>
      <div class={styles.phrases}>
        {phrases.map((phrase, index) => (
          <p
            class={styles.phrase}
            style={{
              "--translate-x-ratio": Math.random() * (index % 2 ? -1 : 1),
              "--translate-y-ratio": Math.random() * (index % 2 < 0.5 ? -1 : 1),
            }}
            onClick={next}
          >{phrase}</p>
        ))}
      </div>
    </div>
  )
}

export default Cloud
