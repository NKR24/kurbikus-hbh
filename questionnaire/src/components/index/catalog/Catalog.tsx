import clsx from "clsx"
import styles from "./styles.module.scss"
import home1 from "../../../assets/img/home1.jpg"
import home2 from "../../../assets/img/home2.jpg"
import home3 from "../../../assets/img/home3.jpg"
import home4 from "../../../assets/img/home4.jpg"
import PDF from "../../../assets/img/PDF.png"
import "../../observer/IntersectionObserverComponent.module.scss"
import IntersectionObserverComponent from "~/components/observer"

export default function Catalog() {
  return (
    <>
      <div class={styles.containerMain}>
        <IntersectionObserverComponent>
          {(isAnimated) => (
            <div class={isAnimated ? "animated" : ""}>
              <div class={clsx(styles.section, styles.fonts)}>
                <div class={styles.firstText}>каталоги домов с ценами</div>
                <div class={styles.blocks}>
                  <div class={clsx(styles.block1, styles.relative)}>
                    <img src={home1} alt="home1" class={styles.imageHome} />
                    <img src={PDF} alt="PDF" class={styles.overlayImage} />
                    <div class={styles.textOverlay}>h1</div>
                    <h1 class={styles.text}>
                      Площадь: от 90 м² <br />
                      3 спальни, 1 санузел От <br />4 300 000 руб.
                    </h1>
                  </div>
                  <div class={clsx(styles.block1, styles.thirdBlock)}>
                    <img src={home2} alt="home3" class={styles.imageHome} />
                    <img src={PDF} alt="PDF" class={styles.overlayImage} />
                    <div class={styles.textOverlay}>h3</div>
                    <h1 class={styles.text}>
                      Площадь: от 110 м² <br />3 спальни, 1 санузел От <br />4
                      000 000 руб.
                    </h1>
                  </div>
                  <div class={clsx(styles.block1, styles.thirdBlock1)}>
                    <img src={home3} alt="home2" class={styles.imageHome} />
                    <img src={PDF} alt="PDF" class={styles.overlayImage} />
                    <div class={styles.textOverlay}>h2</div>
                    {/*<div class={styles.blackRectangle}>
                <div class={styles.textShale}>шале</div>
              </div>*/}
                    <h1 class={styles.text}>
                      Площадь: от 90 м²
                      <br /> 3 спальни, 1 санузел От <br /> 4 600 000 руб.
                    </h1>
                  </div>
                  <div class={clsx(styles.block1, styles.fourthBlock)}>
                    <img src={home4} alt="home4" class={styles.imageHome} />
                    <img src={PDF} alt="PDF" class={styles.overlayImage} />
                    <div class={styles.textOverlay}>h4</div>
                    <h1 class={styles.text}>
                      Площадь: от 110 м² <br />3 спальни, 1 санузел От <br />3
                      900 000 руб.
                    </h1>
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
