import { Component } from 'solid-js'

import styles from './Cloud.module.css'

type CloudProps = {
  columns: number
  phrases: string[]
  onPick: (phrase: string) => void
}

const Cloud: Component<CloudProps> = ({ columns, phrases, onPick }) => {
  return (
    <div class={styles.root} style={{ '--columns': columns }}>
      {phrases.map((phrase, index) => (
        <p
          class={styles.phrase}
          style={{
            '--translate-x-ratio': Math.random() * (index % 2 ? -1 : 1),
            '--translate-y-ratio': Math.random() * (index % 2 < 0.5 ? -1 : 1),
          }}
          onClick={() => onPick(phrase)}
        >
          {phrase}
        </p>
      ))}
    </div>
  )
}

export default Cloud
