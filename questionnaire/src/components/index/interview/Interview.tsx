import styles from "./styles.module.scss"
import s7image from "../../../assets/img/Section7image.jpg"
import s7imageForMobile from "../../../assets/img/Section7imageForMobile.jpg"

export default function Interview() {
  return (
    <>
      <div class={styles.Section7}>
        <div class={styles.rectangle}>
          <img src={s7image} alt="preview" class={styles.previewImage} />
          <svg
            class={styles.playButton}
            xmlns="http://www.w3.org/2000/svg"
            width="99"
            height="99"
            viewBox="0 0 99 99"
            fill="none"
          >
            <path
              d="M49.4061 97.8121C76.14 97.8121 97.8121 76.14 97.8121 49.4061C97.8121 22.6721 76.14 1 49.4061 1C22.6721 1 1 22.6721 1 49.4061C1 76.14 22.6721 97.8121 49.4061 97.8121Z"
              stroke="#DEDEDE"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M35 49.0698V32L49.7891 40.529L64.5782 49.0698L49.7891 57.6107L35 66.1396V49.0698Z"
              fill="black"
              fill-opacity="0.05"
              stroke="#DEDEDE"
              stroke-width="2"
              stroke-miterlimit="10"
            />
          </svg>
          <div class={styles.rectangle2}>
            <img
              src={s7imageForMobile}
              alt="preview"
              class={styles.previewImage2}
            />
            <svg
              class={styles.playButton2}
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
            >
              <g clip-path="url(#clip0_1_631)">
                <path
                  d="M22.2273 44.4545C34.5031 44.4545 44.4545 34.5031 44.4545 22.2273C44.4545 9.95149 34.5031 0 22.2273 0C9.95149 0 0 9.95149 0 22.2273C0 34.5031 9.95149 44.4545 22.2273 44.4545Z"
                  stroke="#DEDEDE"
                  stroke-miterlimit="10"
                />
                <path
                  d="M15.8184 22.5657V14.7275L22.6093 18.6439L29.4002 22.5657L22.6093 26.4875L15.8184 30.4039V22.5657Z"
                  fill="black"
                  fill-opacity="0.05"
                  stroke="#DEDEDE"
                  stroke-miterlimit="10"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_631">
                  <rect width="45" height="45" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <p class={styles.interviewText}>ИНТЕРВЬЮ С СОЗДАТЕЛЕМ КОМПАНИИ</p>
        <div class={styles.block}>
          <p class={styles.textReviews}>отзывы:</p>
          <svg
            class={styles.arrow}
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path
              d="M2 43L43 2M43 2H2M43 2V43"
              stroke="#DEDEDE"
              stroke-width="3"
            />
          </svg>
        </div>
        <svg
          class={styles.arrow2}
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
        >
          <path d="M1 18L18 1M18 1H1M18 1V18" stroke="#DEDEDE" />
        </svg>
        <div class={styles.lines} />
        <div class={styles.reviews}>
          <p class={styles.recallTime}>Март 2023</p>
          <br />
          <p class={styles.review}>Мария Ш</p>
          <br />
          <p class={styles.review2}>
            Нам срочно нужно было съехать со съемной квартиры, искали и нашли.
            Спасибо Дом за домом! все сделали быстро и качественно. Нам срочно
            нужно было съехать со съемной квартиры, искали и нашли. Спасибо Дом
            за домом! все сделали быстро и качественно. Нам срочно нужно было
            съехать со съемной квартиры, искали и нашли. Спасибо Дом за домом!
            все сделали быстро и качественно.
          </p>
          <p class={styles.reviewMobile}>
            Нам срочно нужно было съехать со съемной квартиры, искали и нашли.
            Спасибо Дом за домом! все сделали быстро и качественно.
          </p>
          <br />
          <p class={styles.buttonExpand}>Раскрыть...</p>
        </div>
        <div class={styles.lines} />
        <div class={styles.reviews}>
          <p class={styles.recallTime}>Февраль 2023</p>
          <br />
          <p class={styles.review}>Игорь Д</p>
          <br />
          <p class={styles.review}>
            Нам срочно нужно было съехать со съемной квартиры, искали и нашли.
            Спасибо Дом за домом! все сделали быстро и качественно.
          </p>
          <br />
          <p class={styles.buttonExpand}>Раскрыть...</p>
        </div>
        <div class={styles.lines} />
        <div class={styles.reviews}>
          <p class={styles.recallTime}>Февраль 2023</p>
          <br />
          <p class={styles.review}>Игорь Д</p>
          <br />
          <p class={styles.review}>
            Нам срочно нужно было съехать со съемной квартиры, искали и нашли.
            Спасибо Дом за домом! все сделали быстро и качественно. Спасибо Дом
            за домом! все сделали быстро и качественно.
          </p>
          <br />
          <p class={styles.buttonExpand}>Раскрыть...</p>
        </div>
        <div class={styles.lines} />
        <div class={styles.downloadButton}>
          <p class={styles.textDownload}>загрузить ещё</p>
        </div>
      </div>
    </>
  )
}
