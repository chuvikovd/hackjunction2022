import { Component } from 'solid-js'

import { StepProps } from './App'
import Cloud from './Cloud'

import styles from './PickPhrase.module.css'

type PickPhraseProps = Pick<StepProps, 'onPick'> & {
  title: string
  columns: number
  phrases: string[]
}

const PickPhrase: Component<PickPhraseProps> = ({
  onPick,
  title,
  phrases,
  columns,
}) => {
  return (
    <div>
      <h2 class={styles.title}>{title}</h2>
      <Cloud
        phrases={phrases}
        onPick={(phrase) => onPick(phrase)}
        columns={columns}
      />
    </div>
  )
}

export default PickPhrase
