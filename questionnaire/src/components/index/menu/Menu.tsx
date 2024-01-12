import { createMemo, createSignal, Show } from "solid-js"
import { Collapse } from "solid-collapse"
import styles from "./styles.module.scss"
import clsx from "clsx"

type Props = {
  size?: "normal" | "small"
}

export default function Menu(props: Props) {
  const menu = createMenu(props)

  const [isOpen, setIsOpen] = createSignal(false)

  return (
    <div class={styles.menu}>
      <button
        class={styles.button}
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
          <line x1="6" y1="9.5" x2="22" y2="9.5" stroke="white" />
          <line x1="6" y1="19.5" x2="22" y2="19.5" stroke="white" />
        </svg>
      </button>
      <Show when={isOpen()}>
        <div class={styles.collapsed}>
          <div class={styles.box}>
            <p class={styles.item}>каталоги</p>
          </div>
          <div class={styles.box}>
            <p class={styles.item}>материалы</p>
          </div>
          <div class={styles.box}>
            <p class={styles.item}>этапы</p>
          </div>
          <div class={styles.box}>
            <p class={styles.item}>команда</p>
          </div>
          <div class={clsx(styles.box, styles.target)}>
            <p class={styles.item}>наши дома</p>
          </div>
        </div>
      </Show>
    </div>
  )
}

function createMenu(props: Props) {
  const size = createMemo(() => props.size ?? "normal")
  const buttonDimention = createMemo(() => (size() === "normal" ? 62.49 : 29))

  return { size, buttonDimention }
}
