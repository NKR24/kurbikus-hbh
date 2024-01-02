import clsx from "clsx"
import styles from "./styles.module.scss"

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
          <div class={styles.module}>
            <div class={styles.linesOne}>
              <div class={styles.partMobOne}>
                <div class={styles.markOne}>
                  <h1 class={clsx(styles.main, styles.one)}>01</h1>
                  <div class={styles.lineOne}>
                    <svg
                      width="235"
                      height="1"
                      viewBox="0 0 235 1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="2.18557e-08"
                        y1="0.75"
                        x2="235"
                        y2="0.750021"
                        stroke="black"
                        stroke-width="0.5"
                      />
                    </svg>
                  </div>
                </div>
                <p class={clsx(styles.des, styles.first)}>
                  СТРОИМ/МОНТАЖ КРУГЛЫЙ ГОД
                </p>
              </div>
              <div class={styles.lineTwo}>
                <svg
                  width="1"
                  height="60"
                  viewBox="0 0 1 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.249995 0.5L0.249995 120"
                    stroke="black"
                    stroke-width="0.9"
                  />
                </svg>
              </div>
            </div>
            <div class={styles.linesTwo}>
              <div class={styles.lineFour}>
                <svg
                  width="16"
                  height="25"
                  viewBox="0 0 16 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.25"
                    x2="0.25"
                    y2="25"
                    stroke="black"
                    stroke-width="0.5"
                  />
                  <line
                    x1="16"
                    y1="0.25"
                    y2="0.25"
                    stroke="black"
                    stroke-width="0.5"
                  />
                </svg>
              </div>
              <h1 class={clsx(styles.main, styles.two)}>02</h1>
              <div class={styles.lineThree}>
                <svg
                  width="167.7"
                  height="69"
                  viewBox="0 0 167 69"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M163 0L163 60" stroke="black" stroke-width="0.5" />
                  <line
                    x1="163"
                    y1="60.25"
                    x2="4"
                    y2="60.25"
                    stroke="black"
                    stroke-width="0.5"
                  />
                </svg>
              </div>
            </div>
            <div class={styles.linesThree}>
              <div class={styles.lineFive}>
                <svg
                  width="1"
                  height="64"
                  viewBox="0 0 1 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.25"
                    x2="0.25"
                    y2="94"
                    stroke="black"
                    stroke-width="0.5"
                  />
                </svg>
              </div>
              <p class={clsx(styles.des, styles.second)}>
                ЛУЧШИЕ ИННОВАЦИОННЫЕ ТЕХНОЛОГИИ И ГАРАНТИЯ КАЧЕСТВА
              </p>
            </div>
            <div class={styles.linesFour}>
              <div class={styles.lineSix}>
                <svg
                  width="103"
                  height="62"
                  viewBox="0 0 103 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.25"
                    x2="0.25"
                    y1="-10"
                    y2="22"
                    stroke="black"
                    stroke-width="0.5"
                  />
                  <line
                    y1="21.75"
                    x2="103"
                    y2="21.75"
                    stroke="black"
                    stroke-width="0.5"
                  />
                </svg>
              </div>
              <h1 class={clsx(styles.main, styles.three)}>03</h1>
              <div class={styles.lineSeven}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="172"
                  height="32"
                  viewBox="0 0 172 26"
                  fill="none"
                >
                  <path d="M171 -2V32" stroke="black" stroke-width="0.5" />
                  <line
                    y1="-1.7"
                    x2="171"
                    y2="-1.7"
                    stroke="black"
                    stroke-width="0.5"
                  />
                </svg>
              </div>
            </div>
            <div class={styles.linesFive}>
              <p class={clsx(styles.des, styles.third)}>
                ДОСТУПНАЯ СТОИМОСТЬ ЗА СЧЕТ СОБСТВЕННОГО ПРОИЗВОДСТВА
              </p>
              <div class={styles.lineEight}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="48"
                  viewBox="0 0 2 48"
                  fill="none"
                >
                  <path d="M1 0L1 48" stroke="black" stroke-width="0.5" />
                </svg>
              </div>
            </div>
            <div class={styles.linesSix}>
              <div class={styles.lineEleven}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="112"
                  height="31"
                  viewBox="0 0 112 31"
                  fill="none"
                >
                  <line
                    x1="0.25"
                    y1="1"
                    x2="0.25"
                    y2="31"
                    stroke="black"
                    stroke-width="0.5"
                  />
                  <line
                    x1="2.18557e-08"
                    y1="0.75"
                    x2="112"
                    y2="0.75001"
                    stroke="black"
                    stroke-width="0.5"
                  />
                </svg>
              </div>
              <h1 class={clsx(styles.main, styles.four)}>04</h1>
              <div class={styles.linesTen}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="196"
                  height="53"
                  viewBox="0 0 196 53"
                  fill="none"
                >
                  <path d="M195 0L195 53" stroke="black" stroke-width="0.5" />
                  <line
                    y1="52.75"
                    x2="195"
                    y2="52.75"
                    stroke="black"
                    stroke-width="0.5"
                  />
                </svg>
              </div>
            </div>
            <div class={styles.linesSeven}>
              <div class={styles.lineTwelve}>
                <svg
                  width="1"
                  height="71"
                  viewBox="0 0 1 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.25"
                    x2="0.25"
                    y2="71"
                    stroke="black"
                    stroke-width="0.5"
                  />
                </svg>
              </div>
              <p class={clsx(styles.des, styles.fourth)}>
                ГИБКАЯ СИСТЕМА ОПЛАТЫ
              </p>
            </div>
            <div class={styles.linesEight}>
              <div class={styles.lineThirdteen}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="28"
                  viewBox="0 0 22 28"
                  fill="none"
                >
                  <line
                    x1="0.25"
                    y1="5.03462e-08"
                    x2="0.249994"
                    y2="28"
                    stroke="black"
                    stroke-width="0.5"
                  />
                  <line
                    x1="2.18557e-08"
                    y1="27.75"
                    x2="22"
                    y2="27.75"
                    stroke="black"
                    stroke-width="0.5"
                  />
                </svg>
              </div>
              <div class={styles.lastdes}>
                <h1 class={clsx(styles.main, styles.fifth)}>05</h1>
                <p class={clsx(styles.des, styles.five)}>
                  БЕСПЛАТНЫЙ ПОДБОР УЧАСТКА И РАСЧЁТ ФУНДАМЕНТА
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
