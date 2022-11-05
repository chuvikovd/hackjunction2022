import { Component } from "solid-js";

import { StepProps } from "./App";
import Cloud from "./Cloud"

import styles from "./DescribeImage.module.css"

type DescribeImageProps = Pick<StepProps, 'next'> & {
  phrases: string[]
}

const DescribeImage: Component<DescribeImageProps> = ({ next, phrases }) => {
  return (
    <div>
      <h2 class={styles.title}>Look at this picture</h2>
      <img src="https://via.placeholder.com/150x150" alt="" class={styles.image} />
      <h2 class={styles.subtitle}>Select a phrase, which, in your opinion, describes this image better</h2>
      <Cloud phrases={phrases} onPick={(phrase) => next( { imagePhraseOption: phrase } )} />
    </div>
  )
}

export default DescribeImage
