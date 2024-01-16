import clsx from "clsx"
import styles from "./styles.module.scss"
import Observe from "~/components/index/whyus/observe/Observe"

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
          <h1 class={styles.mainTextMob}>ПОЧЕМУ МЫ?</h1>
          <div class={styles.snake}>
            <svg class={styles.snake_svg}
                 width="388" height="515" viewBox="0 0 388 515" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M288 1H53V0.5H288V1ZM288 119.5L288 0.5L288.5 0.5L288.5 119.5L288 119.5ZM129 119L288 119L288 119.5L129 119.5L129 119ZM33 119H49V119.5H33V119ZM33 260L33 119L33.5 119L33.5 260L33 260ZM136 260H33V259.5H136V260ZM387 260H216V259.5H387V260ZM387 386L387 259.5L387.5 259.5L387.5 386L387 386ZM387 386L192 386V385.5L387 385.5V386ZM112 386L5.63877e-06 386L5.68248e-06 385.5L112 385.5L112 386ZM0 515L5.63877e-06 386L0.500006 386L0.5 515L0 515ZM22 515L5.63877e-06 515L5.68248e-06 514.5L22 514.5L22 515Z" fill="black"/>
            </svg>
          </div>
          <div class={styles.OneMob}>
              <div class={styles.markOne}>
                <h1 class={clsx(styles.main, styles.one)}>01</h1>
              </div>
              <p class={clsx(styles.des, styles.first)}>
                СТРОИМ/МОНТАЖ КРУГЛЫЙ ГОД
              </p>
          </div>
          <div class={styles.TwoMob}>
            <h1 class={clsx(styles.main, styles.two)}>02</h1>
            <p class={clsx(styles.des, styles.second)}>
              ЛУЧШИЕ ИННОВАЦИОННЫЕ ТЕХНОЛОГИИ И ГАРАНТИЯ КАЧЕСТВА
            </p>
          </div>
          <div class={styles.ThreeMob}>
            <h1 class={clsx(styles.main, styles.three)}>03</h1>
            <p class={clsx(styles.des, styles.third)}>
              ДОСТУПНАЯ СТОИМОСТЬ ЗА СЧЕТ СОБСТВЕННОГО ПРОИЗВОДСТВА
            </p>
          </div>
          <div class={styles.FourMob}>
            <h1 class={clsx(styles.main, styles.four)}>04</h1>
            <p class={clsx(styles.des, styles.fourth)}>
              ГИБКАЯ СИСТЕМА ОПЛАТЫ
            </p>
          </div>
          <div class={styles.FiveMob}>
            <h1 class={clsx(styles.main, styles.fifth)}>05</h1>
            <p class={clsx(styles.des, styles.five)}>
              БЕСПЛАТНЫЙ ПОДБОР УЧАСТКА И РАСЧЁТ ФУНДАМЕНТА
            </p>
          </div>
        </div>
        <Observe/>
      </div>
    </>
  )
}
