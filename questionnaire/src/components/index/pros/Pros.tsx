import styles from "./styles.module.scss"
import clsx from "clsx"
import "../../observer/IntersectionObserverComponent.module.scss"
import IntersectionObserverComponent from "~/components/observer"

export default function Pros() {
  return (
    <>
      <div class={styles.containerMain}>
        <IntersectionObserverComponent>
          {(isAnimated) => (
            <div class={isAnimated ? "animated" : ""}>
              <div class={styles.containerSection}>
                <h1 class={styles.textMain}>ПЛЮСЫ</h1>
                <p class={clsx(styles.itemMain, styles.OneHalf)}>мобильные</p>
                <div class={styles.part}>
                  <div class={styles.tableOne}>
                    <div class={styles.SecondHalf}>
                      <p class={clsx(styles.itemMain, styles.OneHalfTwo)}>
                        бригады
                      </p>
                      <p class={clsx(styles.itemMain, styles.OneHalfThree)}>
                        по всей россии
                      </p>
                    </div>
                    <p class={clsx(styles.itemMain, styles.Two)}>
                      Используем европейские материалы
                    </p>
                  </div>
                  <div class={styles.tableTwo}>
                    <p class={clsx(styles.itemMain, styles.Three)}>
                      СОБСТВЕННЕ ПРОИЗВОДСТВО
                    </p>
                    <p class={clsx(styles.itemMain, styles.Four)}>
                      низкая цена за счет серийного производства
                    </p>
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
