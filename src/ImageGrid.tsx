import { Component, createSignal, onMount } from "solid-js";

import { StepProps } from "./App";

import styles from './ImageGrid.module.css'

type ImageGridProps = Pick<StepProps, 'next'> & {
  images: string[]
}

const ImageGrid: Component<ImageGridProps> = ({ next, images }) => {
  // let root: HTMLDivElement | undefined
  // const [scrollTop, setScrollTop] = createSignal(0)

  // onMount(() => {
  //   setScrollTop(root?.getBoundingClientRect().top ?? 0)
  // })

  // style={{ "--scrollTop": `calc(var(--root-scroll-top) - ${scrollTop()}px)` }}

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
