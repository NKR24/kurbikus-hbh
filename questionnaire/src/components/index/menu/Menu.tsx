import { createMemo } from "solid-js"

type Props = {
  size?: "normal" | "small"
}

export default function Menu(props: Props) {
  const menu = createMenu(props)

  return (
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
  )
}

function createMenu(props: Props) {
  const size = createMemo(() => props.size ?? "normal")
  const buttonDimention = createMemo(() => (size() === "normal" ? 62.49 : 29))

  return { size, buttonDimention }
}
