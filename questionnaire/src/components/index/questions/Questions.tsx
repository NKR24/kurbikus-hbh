import styles from "./styles.module.scss"
import { A } from "solid-start"

export default function Questions() {
  return (
    <>
      <div class={styles.container}>
        <div class={styles.section}>
          <h1 class={styles.mainText}>5 вопросов о вашем доме</h1>
          <A href="../../../routes/houseParameters">
            <button class={styles.button}>
              <span>начать</span>
            </button>
          </A>
          <div class={styles.table}>
            <p class={styles.tableName}>Вы получите:</p>
            <ul class={styles.tableMark}>
              <li>Подходящие проекты с ценой в PDF</li>
              <li>Изменение комплектации и цены</li>
              <li>Выбор цветов и покрытий</li>
              <li>Подбор материалов кровли и окон</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
