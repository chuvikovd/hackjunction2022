import { Component, onMount } from "solid-js";

import { StepProps } from "./App";

import styles from "./ColorPicker.module.css"

const colors = [
  ['C62828', 'E57373'],
  ['6A1B9A', 'BA68C8'],
  ['283593', '7986CB'],
  ['0277BD', '4FC3F7'],
  ['00695C', '4DB6AC'],
  ['558B2F', 'AED581'],
  ['F9A825', 'FFF176'],
  ['4E342E', 'A1887F'],
  ['37474F', '90A4AE'],
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

  return (
    <div>
      <h2 class={styles.title}>Pick a most appropriate color for your mood</h2>
      <div class={styles.colors}>
        {colors.map(([foreground, background]) => (
          <div
            class={styles.color}
            style={{
              "--translate-x-ratio": Math.random() * (Math.random() < 0.5 ? -1 : 1),
              "--translate-y-ratio": Math.random() * (Math.random() < 0.5 ? -1 : 1),
              "background-color": `#${foreground}`,
            }}
            onMouseEnter={() => onMouseEnter(background)}
            onMouseLeave={onMouseLeave}
            onClick={next}
          />
        ))}
      </div>
    </div>
  )
}

export default ColorPicker
