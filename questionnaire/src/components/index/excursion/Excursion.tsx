import styles from "./styles.module.scss"
import YouTubeVideo from "~/components/index/YouTubeVideo/YouTubeVideo";

export default function Excursion() {
  return (
    <>
      <div class={styles.container}>
        <section class={styles.section}>
          <text class={styles.mainText}>ЭКСКУРСИЯ ПО НАШИМ ОБЪЕКТАМ</text>
          <YouTubeVideo videoId="ZGKVhUQEK5c" child={styles.frame}/>
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
