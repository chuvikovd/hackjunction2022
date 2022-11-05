export const DURATION = 800

export default function scrollToTarget(
  target: HTMLElement,
  callback?: () => void,
) {
  const top = target.getBoundingClientRect().top
  const startPos = window.pageYOffset
  const diff = top

  let startTime: number | null = null
  let requestId: number

  const loop = function (currentTime: number) {
    if (!startTime) {
      startTime = currentTime
    }

    const time = currentTime - startTime

    const percent = Math.min(time / DURATION, 1)
    window.scrollTo(0, startPos + diff * percent)

    if (time < DURATION) {
      requestId = window.requestAnimationFrame(loop)
    } else {
      window.cancelAnimationFrame(requestId)

      callback?.()
    }
  }

  requestId = window.requestAnimationFrame(loop)
}
