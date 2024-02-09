import { createEffect, createMemo, createSignal, Show } from "solid-js"
import { Collapse } from "solid-collapse"
import styles from "./styles.module.scss"
import clsx from "clsx"
import { setGlobalSignal } from '~/global_state/globalState';

type Props = {
  size?: "normal" | "small"
}

const [isOpen, setIsOpen] = createSignal(false)
export default function Menu(props: Props) {
  const menu = createMenu(props)

  return (
    <>
    <div class={styles.menu}>
      <button
        class={styles.btn}
        onClick={() => {
          setIsOpen(!isOpen())
        }}
      >
        <svg
          width={menu.buttonDimention()}
          height={menu.buttonDimention()}
          viewBox="0 0 29 29"
          fill="none"
        >
          <rect
            width={menu.buttonDimention()}
            height={menu.buttonDimention()}
            fill="black"
          />
          <line class={clsx(styles.btnLine, isOpen() ? styles.btnLineClosed1 : styles.btnLineOpen)} x1="6" y1="9.5"
                x2="22" y2="9.5" stroke="white" />
          <line class={clsx(styles.btnLine, isOpen() ? styles.btnLineClosed2 : styles.btnLineOpen)} x1="6" y1="19.5"
                x2="22" y2="19.5" stroke="white" />
        </svg>
      </button>
    </div>
    <Show when={isOpen()}>
      <div class={styles.collapsed}>
        <button class={styles.box} onClick={() => setAnchor("catalog")}>
          <p class={styles.item}>каталоги</p>
        </button>
        <button class={styles.box} onClick={() => {setAnchor("materials")
                                                    setGlobalSignal(true)}}
        >
          <p class={styles.item}>материалы</p>
        </button>
        <button class={styles.box} onClick={() => setAnchor("stages")} >
          <p class={styles.item}>этапы</p>
        </button>
        <button class={styles.box} onClick={() => setAnchor("team")} >
          <p class={styles.item}>команда</p>
        </button>
        <button class={clsx(styles.box, styles.target)} onClick={() => setAnchor("houses")} >
          <p class={styles.item}>наши дома</p>
        </button>
      </div>
    </Show>
  </>
  )
}

function createMenu(props: Props) {
  const size = createMemo(() => props.size ?? "normal")
  const buttonDimention = createMemo(() => (size() === "normal" ? 62.49 : 29))

  return { size, buttonDimention }
}


const [anchor, setAnchor] = createSignal("")
createEffect(() => {
  if (anchor() != "" && anchor() != null && document != null) {
    const elem = document.getElementById(anchor())
    if (elem != null) {
      elem.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
      setAnchor("")
    }
  }
})
