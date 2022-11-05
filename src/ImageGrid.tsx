import { Component } from 'solid-js'

import { StepProps } from './App'

import styles from './ImageGrid.module.css'

type ImageGridProps = Pick<StepProps, 'onPick'> & {
  images: string[]
}

const ImageGrid: Component<ImageGridProps> = ({ onPick, images }) => {
  // const onClick = (event) => {
  //   const value = event.target.attributes.getNamedItem('data-value').value;
  //   next({
  //     imageOption: parseInt(value)
  //   });
  // }

  return (
    <div>
      <h2 class={styles.title}>What image do you like more?</h2>
      <div class={styles.images}>
        {images.map((src, index) => (
          <img src={src} data-value={index} alt="" class={styles.image} />
        ))}
      </div>
    </div>
  )
}

export default ImageGrid
