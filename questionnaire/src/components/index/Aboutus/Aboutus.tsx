import styles from "./styles.module.scss"
import clsx from "clsx"
import home1 from "~/assets/img/home1.jpg"
import PDF from "~/assets/img/PDF.png"
import home3 from "~/assets/img/home3.jpg"
import home2 from "~/assets/img/home2.jpg"
import home4 from "~/assets/img/home4.jpg"
import "../../observer/IntersectionObserverComponent.module.scss"
import IntersectionObserverComponent from "~/components/observer"

export default function Aboutus() {
  return (
    <>
      <div class={styles.containerMain}>
        <IntersectionObserverComponent>
          {(isAnimated) => (
            <div class={isAnimated ? "animated" : ""}>
              <div class={styles.containerSection}>
                <p class={styles.textMain}>О НАС</p>
                <div class={styles.table}>
                  <div class={clsx(styles.box, styles.One)}>
                    <div class={clsx(styles.photo, styles.photoOne)} />
                    <h1 class={styles.main}>Александр</h1>
                    <p class={styles.text}>Технический директор</p>
                  </div>
                  <div class={clsx(styles.box, styles.Two)}>
                    <div class={clsx(styles.photo, styles.photoTwo)} />
                    <h1 class={styles.main}>Андрей</h1>
                    <p class={styles.text}>Технический надзор</p>
                  </div>
                  <div class={clsx(styles.box, styles.Three)}>
                    <div class={clsx(styles.photo, styles.photoThree)} />
                    <h1 class={styles.main}>Александр</h1>
                    <p class={styles.text}>Бригадир монтажников</p>
                  </div>
                  <div class={clsx(styles.box, styles.Four)}>
                    <div class={clsx(styles.photo, styles.photoFour)} />
                    <h1 class={styles.main}>Александр</h1>
                    <p class={styles.text}>Бригадир кровельщиков</p>
                  </div>
                  <div class={clsx(styles.box, styles.Five)}>
                    <div class={clsx(styles.photo, styles.photoFive)} />
                    <h1 class={styles.main}>Федор</h1>
                    <p class={styles.text}>Бетонных дел мастер</p>
                  </div>
                  <div class={clsx(styles.box, styles.Six)}>
                    <div class={clsx(styles.photo, styles.photoSix)} />
                    <h1 class={styles.main}>Максим</h1>
                    <p class={styles.text}>Руководитель производства</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </IntersectionObserverComponent>
      </div>
    </>
  )
}
