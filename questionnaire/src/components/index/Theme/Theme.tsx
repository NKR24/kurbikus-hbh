import StartScreen from "~/components/StartScreen/StartScreen"
import styles from "./styles.module.scss"
import Barnhouse from "~/components/index/barnhouse"

export default function Theme() {
  return (
      <StartScreen LowerSection={<Barnhouse/>} LowerClass={styles.fadeIn} />
  )
}

