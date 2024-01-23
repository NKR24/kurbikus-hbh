import StartScreen from "~/components/StartScreen/StartScreen"
import Barnhouse from "~/components/index/barnhouse"
import styles from "./styles.module.scss"

function Test() {
  return (
    <>
      <StartScreen LowerSection={<Barnhouse />} LowerClass={styles.fadeIn} />
    </>
  )
}

export default Test
