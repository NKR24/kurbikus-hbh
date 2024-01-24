import styles from "./styles.module.scss"
import hbhLogo from "./logo.svg"
import name from "./name.svg"
import { createSignal, JSX, onMount } from "solid-js"

type Props = {
  LowerSection: ((nextComponentVisible: boolean) => JSX.Element) | JSX.Element
  LowerClass: string
}

export default function StartScreen(props: Props) {
  const [isVisible, setIsVisible] = createSignal(true)
  const [nextComponentVisible, setNextComponentVisible] = createSignal(false)

  onMount(() => {
    setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => {
        setNextComponentVisible(true)
      }, 0)
    }, 5500)
  })

  return (
    <>
      {isVisible() && (
        <div class={styles.fadeOut}>
          <div class={styles.ContainerMain}>
            <div class={styles.Section}>
              <div class={styles.first}>
                <img src={hbhLogo} alt="logo" />
              </div>
              <div class={styles.second}>
                <img src={name} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      )}
      {nextComponentVisible() && (
        <div class={props.LowerClass}>
          {typeof props.LowerSection === "function"
            ? props.LowerSection(nextComponentVisible())
            : props.LowerSection}
        </div>
      )}
    </>
  )
}
