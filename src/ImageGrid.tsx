import { Component } from "solid-js";

import { StepProps } from "./App";

import styles from './ImageGrid.module.css'

type ImageGridProps = Pick<StepProps, 'next'> & {
  images: string[]
}

const ImageGrid: Component<ImageGridProps> = ({ next, images }) => {
  return (
    <div>
      <h2 class={styles.title}>What image do you like more?</h2>
      <div class={styles.images}>
        {images.map((src) => <img src={src} alt="" class={styles.image} onClick={next} />)}
      </div>
    </div>
  )
}

export default ImageGrid
