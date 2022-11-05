import { Component } from "solid-js";

import { StepProps } from "./App";
import Cloud from "./Cloud"

import styles from "./PickPhrase.module.css"

type PickPhraseProps = Pick<StepProps, 'next'> & {
  phrases: string[]
}

const PickPhrase: Component<PickPhraseProps> = ({ next, phrases }) => {
  return (
    <div>
      <h2 class={styles.title}>Pick a phrase you like the most</h2>
      <Cloud phrases={phrases} onPick={() => next()} />
    </div>
  )
}

export default PickPhrase
