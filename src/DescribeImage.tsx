import { Component } from 'solid-js'

import { StepProps } from './App'
import Cloud from './Cloud'

import styles from './DescribeImage.module.css'

type DescribeImageProps = Pick<StepProps, 'onPick'> & {
  title: string
  image: string
  phrases: string[]
  columns: number
}

const DescribeImage: Component<DescribeImageProps> = ({
  onPick,
  title,
  image,
  phrases,
  columns,
}) => {
  return (
    <div>
      <h2 class={styles.title}>Look at this picture</h2>
      <img src={image} alt="" class={styles.image} />
      <h2 class={styles.subtitle}>{title}</h2>
      <Cloud
        phrases={phrases}
        onPick={(phrase) => onPick(phrase)}
        columns={columns}
      />
    </div>
  )
}

export default DescribeImage
