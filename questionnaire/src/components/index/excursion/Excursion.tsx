import styles from "./styles.module.scss"
import clsx from "clsx"

export default function Excursion() {
  return (
    <>
      <div class={styles.containerMain}>
        <div class={styles.containerSection}>
          <p class={styles.textMain}>ЭКСКУРСИЯ ПО НАШИМ ОБЪЕКТАМ</p>
          <div class={styles.videoBox}>
            <div class={styles.videoButton} />
          </div>
          <p class={clsx(styles.text, styles.textOne)}>
            Демонстрируем построенный вариант дома, однако может отвезти на
            недостроенный объект, чтобы вы могли проверить и убедиться своими
            глазами. Экскурсию проводит наш проектный менеджер, поэтому вы
            получите ответы на
          </p>
          <p class={clsx(styles.text, styles.textTwo)}>
            все интересующие вас вопросы.
          </p>
          <p class={clsx(styles.text, styles.textThree)}>
            Также поможем подобрать вам участок, если вы в растерянности от
            большого количества предложений и не знаете, что лучше.
          </p>
          <p class={styles.textSM}>
            Демонстрируем построенный вариант дома, однако может отвезти на
            недостроенный объект, чтобы вы могли проверить и убедиться своими
            глазами. Экскурсию проводит наш проектный менеджер, поэтому вы
            получите ответы на все интересующие вас вопросы. Также поможем
            подобрать вам участок, если вы в растерянности от большого
            количества предложений и не знаете, что лучше.
          </p>
          <button class={styles.button}>
            <span class={styles.textButton}>записаться</span>
          </button>
        </div>
      </div>
    </>
  )
}
