import { createSignal, JSX, onCleanup, onMount } from "solid-js"
import styles from "./IntersectionObserverComponent.module.scss"

interface IntersectionObserverProps {
  children: ((isAnimated: boolean) => JSX.Element) | JSX.Element
}

const IntersectionObserverComponent = (props: IntersectionObserverProps) => {
  const [isAnimated, setIsAnimated] = createSignal(false)
  let ref: HTMLDivElement | null = null

  onMount(() => {
    const onIntersect: IntersectionObserverCallback = ([entry], observer) => {
      if (entry.isIntersecting) {
        setIsAnimated(true)
        observer.unobserve(entry.target)
      }
    }

    const observer = new IntersectionObserver(onIntersect, { threshold: 0.1 })

    if (ref) {
      observer.observe(ref)
    }

    onCleanup(() => observer.disconnect())
  })

  return (
    <div ref={(el) => (ref = el)} class={isAnimated() ? styles.animated : ""}>
      {typeof props.children === "function"
        ? props.children(isAnimated())
        : props.children}
    </div>
  )
}

export default IntersectionObserverComponent
