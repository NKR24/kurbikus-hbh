import clsx from "clsx"
import styles from "./styles.module.scss"
import Observer from "~/components/observer"

export default function Whyus() {
  return (
    <>
      <div class={styles.containerMain}>
        <div class={styles.containerDesktop}>
          <div class={styles.boxOne}>
            <h1 class={styles.mainText}>ПОЧЕМУ МЫ?</h1>
          </div>
          <div class={styles.boxSecond}>
            <div class={styles.partOne}>
              <p class={clsx(styles.itemMain, styles.One)}>01</p>
              <p class={clsx(styles.itemMain, styles.Two)}>02</p>
            </div>
            <div class={styles.partTwo}>
              <div class={styles.tableOne}>
                <p class={clsx(styles.itemDescription, styles.OneD)}>
                  СТРОИМ/МОНТАЖ КРУГЛЫЙ ГОД
                </p>
                <p class={clsx(styles.itemDescription, styles.TwoD)}>
                  ЛУЧШИЕ ИННОВАЦИОННЫЕ ТЕХНОЛОГИИ И ГАРАНТИЯ КАЧЕСТВА
                </p>
                <div class={styles.content}>
                  <p class={clsx(styles.itemMain, styles.Three)}>03</p>
                  <p class={clsx(styles.itemDescription, styles.ThreeD)}>
                    ГИБКАЯ СИСТЕМА ОПЛАТЫ
                  </p>
                </div>
              </div>
              <div class={styles.tableTwo}>
                <p class={clsx(styles.itemMain, styles.Five)}>05</p>
                <p class={clsx(styles.itemMain, styles.Four)}>04</p>
              </div>
            </div>
            <div class={styles.partThree}>
              <p class={clsx(styles.itemDescription, styles.FiveD)}>
                БЕСПЛАТНЫЙ ПОДБОР УЧАСТКА И РАСЧЁТ ФУНДАМЕНТА
              </p>
              <p class={clsx(styles.itemDescription, styles.FourD)}>
                ДОСТУПНАЯ СТОИМОСТЬ ЗА СЧЕТ СОБСТВЕННОГО ПРОИЗВОДСТВА
              </p>
            </div>
          </div>
        </div>

        <div class={styles.containerMobile}>
          <h1 class={styles.mainText}>ПОЧЕМУ МЫ?</h1>
          <Observer animationClass={""}>
            {(isAnimated) => (
              <div class={styles.container}>
                <div
                  class={isAnimated ? styles.line1 : styles.nonDisplayLine}
                />
                <div
                  class={isAnimated ? styles.line2 : styles.nonDisplayLine}
                />
                <div
                  class={isAnimated ? styles.line3 : styles.nonDisplayLine}
                />
                <div
                  class={isAnimated ? styles.line4 : styles.nonDisplayLine}
                />
                <div
                  class={isAnimated ? styles.line5 : styles.nonDisplayLine}
                />
                <div
                  class={isAnimated ? styles.line6 : styles.nonDisplayLine}
                />
                <div
                  class={isAnimated ? styles.line7 : styles.nonDisplayLine}
                />
                <div
                  class={isAnimated ? styles.line8 : styles.nonDisplayLine}
                />
                <div
                  class={isAnimated ? styles.line9 : styles.nonDisplayLine}
                />
                <div
                  class={isAnimated ? styles.line10 : styles.nonDisplayLine}
                />
                <div
                  class={isAnimated ? styles.line11 : styles.nonDisplayLine}
                />
                <div
                  class={isAnimated ? styles.line12 : styles.nonDisplayLine}
                />
                <div class={isAnimated ? styles.OneMob : styles.nonDisplayLine}>
                  <div class={styles.hide}>
                    <h1 class={styles.main}>01</h1>
                    <p class={styles.des}>СТРОИМ/МОНТАЖ КРУГЛЫЙ ГОД</p>
                  </div>
                </div>
                <div class={isAnimated ? styles.TwoMob : styles.nonDisplayLine}>
                  <h1 class={styles.main}>02</h1>
                  <p class={clsx(styles.des, styles.two)}>
                    ЛУЧШИЕ ИННОВАЦИОННЫЕ ТЕХНОЛОГИИ И ГАРАНТИЯ КАЧЕСТВА
                  </p>
                </div>
                <div
                  class={isAnimated ? styles.ThreeMob : styles.nonDisplayLine}
                >
                  <h1 class={styles.main}>03</h1>
                  <p class={clsx(styles.des, styles.three)}>
                    ДОСТУПНАЯ СТОИМОСТЬ ЗА СЧЕТ СОБСТВЕННОГО ПРОИЗВОДСТВА
                  </p>
                </div>
                <div
                  class={isAnimated ? styles.FourMob : styles.nonDisplayLine}
                >
                  <h1 class={styles.main}>04</h1>
                  <p class={clsx(styles.des, styles.four)}>
                    ГИБКАЯ СИСТЕМА ОПЛАТЫ
                  </p>
                </div>
                <div
                  class={isAnimated ? styles.FiveMob : styles.nonDisplayLine}
                >
                  <h1 class={styles.main}>05</h1>
                  <p class={clsx(styles.des, styles.five)}>
                    БЕСПЛАТНЫЙ ПОДБОР УЧАСТКА И РАСЧЁТ ФУНДАМЕНТА
                  </p>
                </div>
              </div>
            )}
          </Observer>
        </div>
      </div>
    </>
  )
}
