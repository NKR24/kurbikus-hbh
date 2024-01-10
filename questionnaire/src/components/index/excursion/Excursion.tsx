import styles from "./styles.module.scss"

export default function Excursion() {
  return (
    <>
      <div class={styles.container}>
        <section class={styles.section}>
          <text class={styles.mainText}>ЭКСКУРСИЯ ПО НАШИМ ОБЪЕКТАМ</text>
          <div class={styles.videobox}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="99"
                height="99"
                viewBox="0 0 99 99"
                fill="none"
              >
                <path
                  d="M49.4061 97.8121C76.14 97.8121 97.8121 76.14 97.8121 49.4061C97.8121 22.6721 76.14 1 49.4061 1C22.6721 1 1 22.6721 1 49.4061C1 76.14 22.6721 97.8121 49.4061 97.8121Z"
                  stroke="#DEDEDE"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M35.0002 49.0698V32L49.7893 40.529L64.5784 49.0698L49.7893 57.6107L35.0002 66.1396V49.0698Z"
                  fill="black"
                  fill-opacity="0.05"
                  stroke="#DEDEDE"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
              </svg>
            </span>
          </div>
          <div class={styles.end}>
            <text class={styles.paragraph}>
              Демонстрируем построенный вариант дома, однако может отвезти на
              недостроенный объект, чтобы вы могли проверить и убедиться своими
              глазами. Экскурсию проводит наш проектный менеджер, поэтому вы
              получите ответы на все интересующие вас вопросы.
            </text>
            <text class={styles.paragraph}>
              Также поможем подобрать вам участок, если вы в растерянности от
              большого количества предложений и не знаете, что лучше.
            </text>
            <button class={styles.button}>
              <span>записаться</span>
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
