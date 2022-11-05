import { Component, onMount } from "solid-js";

import { StepProps } from "./App";

import strawberry from './strawberry.png'
import purpleBear from './purple-bear.png'
import blueGem from './blue-gem.png'
import lightBlueInstax from './light-blue-instax.png'
import greenLizard from './green-lizard.png'
import greenFish from './green-fish.png'
import smallRocks from './small-rocks.png';
import orange from './orange.png';
import cutTree from './cut-tree.png';

import styles from "./ColorPicker.module.css"

const colors = [
  [strawberry, 'E57373'],
  [purpleBear, 'BA68C8'],
  [blueGem, '7986CB'],
  [lightBlueInstax, '4FC3F7'],
  [greenLizard, '4DB6AC'],
  [greenFish, 'AED581'],
  [orange, 'FFF176'],
  [cutTree, 'A1887F'],
  [smallRocks, '90A4AE'],
]

const ColorPicker: Component<Pick<StepProps, 'next'>> = ({ next }) => {
  let page: HTMLElement | null

  onMount(() => {
    page = document.getElementById("page")
  })

  const onMouseEnter = (background: string) => {
    if (!page) return

    page.style.backgroundColor = `#${background}`
  }

  const onMouseLeave = () => {
    if (!page) return

    page.style.backgroundColor = ''
  }

  const onClick = (event) => {
    const value = event.target.style.backgroundColor
      .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
      .slice(1);

    const rgb = {
      r: value[0],
      g: value[1],
      b: value[2]
    }
    next({ colorOption: rgb });
  };

  return (
    <div>
      <h2 class={styles.title}>Pick a most appropriate color for your mood</h2>
      <div class={styles.colors}>
        {colors.map(([src, background], index) => (
          <img
            src={src}
            class={styles.color}
            style={{
              "--translate-x-ratio": Math.random() * (index % 2 ? -1 : 1),
              "--translate-y-ratio": Math.random() * (index % 2 < 0.5 ? -1 : 1),
            }}
            onMouseEnter={() => onMouseEnter(background)}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  )
}

export default ColorPicker
