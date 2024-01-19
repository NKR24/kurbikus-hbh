import { createEffect, createSignal, JSX } from "solid-js"

type TestClassProps = {
  upperContent: JSX.Element
  lowerContent: JSX.Element
  mainClass: string
  upperSection: string
  lowerSection: string
  /*children: ((scrollPosition: unknown) => JSX.Element) | JSX.Element*/
}

function ScrollAnimation(props: TestClassProps) {
  const [scrollPosition, setScrollPosition] = createSignal<number>(0)

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
    <div class={props.mainClass}>
      <div class={props.upperSection}>{props.upperContent}</div>
      <div
        class={props.lowerSection}
        style={{
          transform: `translate: none; rotate: none; scale: none; transform: translate3d(0px, ${
            scrollPosition() * -1
          }vh, 0px);`,
        }}
      >
        {props.lowerContent}
      </div>
    </div>
  )
}

export default ScrollAnimation
