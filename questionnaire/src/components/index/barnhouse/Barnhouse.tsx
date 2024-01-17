import clsx from "clsx"
import styles from "./styles.module.scss"
import MainHome from "../../../assets/img/home-main.jpg"
import IntersectionObserverComponent from "~/components/observer"
import "../../observer/IntersectionObserverComponent.module.scss"

export default function Barnhouse() {
  return (
    <>
      <IntersectionObserverComponent>
        {(isAnimated) => (
          <div class={isAnimated ? "animated" : ""}>
            <div class={styles.containerMain}>
              <div class={styles.containerSection}>
                <div class={styles.containerDesktop}>
                  <div class={styles.containerFirst}>
                    <div class={clsx(styles.box, styles.box1)}>
                      <div class={clsx(styles.text, styles.text1large)}>
                        <p>БарнХаус</p>
                      </div>
                      <div class={clsx(styles.text, styles.text1small)}>
                        <p>В котором можно жить даже на крайнем северe</p>
                      </div>
                    </div>
                    <div class={clsx(styles.box, styles.box2)}>
                      <div class={clsx(styles.text, styles.text2)}>
                        <p>НА МОНОЛИТНОМ ФУНДАМЕНТЕ ЗА 60 ДНЕЙ </p>
                      </div>
                    </div>
                    <div class={clsx(styles.box, styles.box3)}>
                      <div class={clsx(styles.text, styles.text3)}>
                        <p>ГАРАНТИЯ 50 лет.</p>
                      </div>
                    </div>
                    <div class={clsx(styles.box, styles.box4)}>
                      <div class={clsx(styles.text, styles.text4)}>
                        <p>Ипотека без первоначального взноса</p>
                      </div>
                    </div>
                  </div>
                  <div class={styles.containerSecond}>
                    <img src={MainHome} alt={"homeImage"} />
                  </div>
                </div>
                <div class={styles.containerMobile}>
                  <div class={clsx(styles.box, styles.MobileImage)}>
                    <div class={styles.homeButton}>
                      <div class={styles.homeButtonText}>
                        <p>Консультация</p>
                      </div>
                    </div>
                  </div>
                  <div class={clsx(styles.box, styles.MobileFirst)}>
                    <div class={clsx(styles.text, styles.MobTextFirstLarge)}>
                      <p>барнхаус</p>
                    </div>
                    <p class={styles.smSize}>БарнХаус</p>
                    <div class={clsx(styles.text, styles.MobTextFirstSmall)}>
                      <p>
                        В котором можно жить даже на крайнем севере на
                        монолитном фундаменте за 60 дней.
                      </p>
                    </div>
                  </div>
                  <div class={clsx(styles.box, styles.MobileSecond)}>
                    <div class={styles.videoButton}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        viewBox="0 0 56 56"
                        fill="none"
                      >
                        <path
                          d="M28.25 55.5C43.2998 55.5 55.5 43.2998 55.5 28.25C55.5 13.2002 43.2998 1 28.25 1C13.2002 1 1 13.2002 1 28.25C1 43.2998 13.2002 55.5 28.25 55.5Z"
                          stroke="#1D1D1B"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M20.3926 28.6651V19.0557L28.718 23.857L37.0435 28.6651L28.718 33.4731L20.3926 38.2744V28.6651Z"
                          fill="#D9D9D9"
                          stroke="#1D1D1B"
                          stroke-miterlimit="10"
                        />
                      </svg>
                    </div>
                    <div class={styles.videoButtonSm}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="87"
                        height="87"
                        viewBox="0 0 87 87"
                        fill="none"
                      >
                        <path
                          d="M43.5 86C66.9721 86 86 66.9721 86 43.5C86 20.0279 66.9721 1 43.5 1C20.0279 1 1 20.0279 1 43.5C1 66.9721 20.0279 86 43.5 86Z"
                          stroke="#1D1D1B"
                          stroke-width="1.55963"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M31.2451 44.1473V29.1602L44.2298 36.6485L57.2144 44.1473L44.2298 51.646L31.2451 59.1344V44.1473Z"
                          fill="#D9D9D9"
                          stroke="#1D1D1B"
                          stroke-width="1.55963"
                          stroke-miterlimit="10"
                        />
                      </svg>
                    </div>
                    <div class={styles.videoButtonMd}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="96"
                        height="96"
                        viewBox="0 0 96 96"
                        fill="none"
                      >
                        <path
                          d="M48 95C73.9574 95 95 73.9574 95 48C95 22.0426 73.9574 1 48 1C22.0426 1 1 22.0426 1 48C1 73.9574 22.0426 95 48 95Z"
                          stroke="#1D1D1B"
                          stroke-width="1.71967"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M34 48.5V32L48.5 40.2443L63 48.5L48.5 56.7557L34 65V48.5Z"
                          fill="#D9D9D9"
                          stroke="#1D1D1B"
                          stroke-width="1.71967"
                          stroke-miterlimit="10"
                        />
                      </svg>
                    </div>
                    <div class={clsx(styles.text, styles.MobTextSecond)}>
                      <p>Посмотрите видео о строительстве вашего дома</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </IntersectionObserverComponent>
    </>
  )
}
