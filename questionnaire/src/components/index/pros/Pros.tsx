import styles from "./styles.module.scss"
import clsx from "clsx"
import Observer from "~/components/observer";

export default function Pros() {
  return (
    <>
      <div class={styles.containerMain}>
          <div class={styles.head}>
              <h1 class={styles.textMain}>ПЛЮСЫ</h1>
          </div>
          <div class={styles.container}>
              <Observer animationClass={""}>
                  {(isAnimated) => (
                      <>
                          <p class={isAnimated ? clsx(styles.text1, styles.itemMain) : styles.nonDisplay}>мобильные бригады по всей россии</p>
                          <p class={isAnimated ? clsx(styles.text2, styles.itemMain) : styles.nonDisplay}>Используем европейские материалы</p>
                          <p class={isAnimated ? clsx(styles.text3, styles.itemMain) : styles.nonDisplay}>СОБСТВЕННЕ ПРОИЗВОДСТВО</p>
                          <p class={isAnimated ? clsx(styles.text4, styles.itemMain) : styles.nonDisplay}>низкая цена за счет серийного производства</p>
                          <hr class={isAnimated ? styles.line1 : styles.nonDisplay}/>
                          <hr class={isAnimated ? styles.line2 : styles.nonDisplay}/>
                          <hr class={isAnimated ? styles.line3 : styles.nonDisplay}/>
                          <hr class={isAnimated ? styles.line4 : styles.nonDisplay}/>
                          <hr class={isAnimated ? styles.line5 : styles.nonDisplay}/>
                          <hr class={isAnimated ? styles.line6 : styles.nonDisplay}/>
                          <hr class={isAnimated ? styles.line7 : styles.nonDisplay}/>
                          <hr class={isAnimated ? styles.line8 : styles.nonDisplay}/>
                          <hr class={isAnimated ? styles.line9 : styles.nonDisplay}/>
                      </>
                  )}
              </Observer>
          </div>
      </div>
    </>
  )
}
