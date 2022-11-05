import { Component } from "solid-js";

import { StepProps } from "./App";

import styles from "./SingleWord.module.css"

const SingleWord: Component<Pick<StepProps, 'next'>> = () => {
  return (
    <div class={styles.root}>
      <h2 class={styles.title}>Write exactly 1 word, any you want</h2>
      <input type="text" class={styles.input} />
    </div>
  )
}

export default SingleWord
