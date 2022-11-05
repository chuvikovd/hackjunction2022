import { Component, onMount } from 'solid-js'

import { StepProps } from './App'

import strawberry from './strawberry.png'
import purpleBear from './purple-bear.png'
import blueGem from './blue-gem.png'
import lightBlueInstax from './light-blue-instax.png'
import greenLizard from './green-lizard.png'
import greenFish from './green-fish.png'
import smallRocks from './small-rocks.png'
import orange from './orange.png'
import cutTree from './cut-tree.png'

import styles from './ColorPicker.module.css'

const colors = [
  [strawberry, 'E57373', 'red'],
  [purpleBear, 'BA68C8', 'purple'],
  [blueGem, '7986CB', 'dark blue'],
  [lightBlueInstax, '4FC3F7', 'light blue'],
  [greenLizard, '4DB6AC', 'dark green'],
  [greenFish, 'AED581', 'light green'],
  [orange, 'FFF176', 'orange'],
  [cutTree, 'A1887F', 'brown'],
  [smallRocks, '90A4AE', 'gray'],
]

const ColorPicker: Component<Pick<StepProps, 'onPick'>> = ({ onPick }) => {
  let page: HTMLElement | null

  onMount(() => {
    page = document.getElementById('page')
  })

  const onMouseEnter = (background: string) => {
    if (!page) return

    page.style.backgroundColor = `#${background}`
  }

  const onMouseLeave = () => {
    if (!page) return

    page.style.backgroundColor = ''
  }

  return (
    <div>
      <h2 class={styles.title}>Pick a most appropriate color for your mood</h2>
      <div class={styles.colors}>
        {colors.map(([src, background, result], index) => (
          <img
            src={src}
            class={styles.color}
            style={{
              '--translate-x-ratio': Math.random() * (index % 2 ? -1 : 1),
              '--translate-y-ratio': Math.random() * (index % 2 < 0.5 ? -1 : 1),
            }}
            onMouseEnter={() => onMouseEnter(background)}
            onMouseLeave={onMouseLeave}
            onClick={() => onPick(result)}
          />
        ))}
      </div>
    </div>
  )
}

export default ColorPicker
