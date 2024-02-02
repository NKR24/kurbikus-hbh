import styles from "./styles.module.scss"
import YouTubeVideo from "~/components/index/YouTubeVideo/YouTubeVideo";

export default function Excursion() {
  return (
    <>
      <div class={styles.container}>
        <section class={styles.section}>
          <div class={styles.mobSection}>
            <p class={styles.mainText}>ЭКСКУРСИЯ ПО НАШИМ ОБЪЕКТАМ</p>
            <YouTubeVideo videoId="ZGKVhUQEK5c" child={styles.frame}/>
          </div>
          <div class={styles.end}>
            <p class={styles.paragraph}>
              Демонстрируем построенный вариант дома, однако может отвезти на
              недостроенный объект, чтобы вы могли проверить и убедиться своими
              глазами.
            <br />
              Экскурсию проводит наш проектный менеджер, поэтому вы
              получите ответы на все интересующие вас вопросы.
            <br />
              Также поможем подобрать вам участок, если вы в растерянности от
              большого количества предложений и не знаете, что лучше.
            </p>
            <button class={styles.button}>
                записаться
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
