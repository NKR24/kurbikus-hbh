/*import { onMount, createSignal } from "solid-js"
import styles from "./styles.module.scss"

const App = () => {
  const [sectionRef, setSectionRef] = createSignal<HTMLDivElement>()

  onMount(() => {
    const handleScroll = () => {
      const rect = sectionRef()?.getBoundingClientRect()
      if (rect && rect.top <= window.innerHeight && rect.bottom >= 0) {
        sectionRef()?.classList.add(styles.active)
      } else {
        sectionRef()?.classList.remove(styles.active)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <>
      <div ref={setSectionRef} class={styles.section}>
        <div class={styles.containerMain}>
          <h1>PRIVET</h1>
        </div>
      </div>
    </>
  )
}

export default App*/

import { createSignal, createEffect } from "solid-js"
import styles from "./styles.module.scss"

const App = () => {
  const [scrollPosition, setScrollPosition] = createSignal(0)

  createEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <div class={styles.container}>
      <div class={styles.upperSection}>
        <div class={styles.containerUpper}>
          <h1>PRIVET</h1>
        </div>
      </div>
      <div
        class={styles.lowerSection}
        style={{ transform: `translateY(${scrollPosition() * -1}px)` }}
      >
        <div class={styles.containerLower}>
          <h1>KONICIWA</h1>
        </div>
      </div>
    </div>
  )
}

export default App
