import styles from "./styles.module.scss"
import hbhLogo from "~/assets/img/hbh-logo.svg"
import { createSignal, JSX, onMount } from "solid-js"
import AnimatedLogo from "~/components/AnimatedLogo/AnimatedLogo"

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
    }, 4000)
  })

  return (
    <>
      {isVisible() && (
        <div class={styles.fadeOut}>
          <div class={styles.ContainerMain}>
            <div class={styles.Section}>
              <img src={hbhLogo} alt="logo" />
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
