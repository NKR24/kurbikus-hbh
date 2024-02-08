import styles from "./styles.module.scss"
import s7image from "../../../assets/img/Section7image.jpg"
import { createEffect, createSignal } from "solid-js"
import { Collapse } from "solid-collapse"
import { createMediaQuery } from "@solid-primitives/media"

export default function Interview() {
  const [isExpanded1, setIsExpanded1] = createSignal(false)
  const [isExpanded2, setIsExpanded2] = createSignal(false)
  const [isExpanded3, setIsExpanded3] = createSignal(false)
  const [isExpanded4, setIsExpanded4] = createSignal(false)
  const [isExpanded5, setIsExpanded5] = createSignal(false)
  const [isExpanded6, setIsExpanded6] = createSignal(false)
  const [isExpanded7, setIsExpanded7] = createSignal(false)

  function reset() {
    setIsExpanded1(false)
    setIsExpanded2(false)
    setIsExpanded3(false)
    setIsExpanded4(false)
    setIsExpanded5(false)
    setIsExpanded6(false)
    setIsExpanded7(false)
  }


  const s = createMediaQuery("(max-width: 430px)") ////доделать
  const  initialTop: number = 139
  const [topValue, setTopValue] = createSignal({
    top: `-${initialTop}vh`,
  })

  createEffect(() => {
    let a = initialTop

    if (isExpanded1())
      a+=3
    if (isExpanded2())
      a+=15
    if (isExpanded3())
      a+=30
    if (isExpanded4())
      a+=63
    if (isExpanded5())
      a+=3
    if (isExpanded6())
      a+=15
    if (isExpanded7())
      a+=35

    setTopValue ({
        top: `-${a}vh`,
      }
    )
  })

  return (
    <>
      <div class={styles.Section7} style={topValue()}>
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
        </div>
        <p class={styles.interviewText}>ИНТЕРВЬЮ С СОЗДАТЕЛЕМ КОМПАНИИ</p>
        <div class={styles.block}>
          <p class={styles.textReviews}>отзывы:</p>
          <button class={styles.arrow} onClick={() => reset()}>
            <svg class={styles.arrow}
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
          </button>
        </div>
        <div class={styles.lines} />
        <div class={styles.reviews}>
          <p class={styles.recallTime}>Март 2023</p>
          <br />
          <p class={styles.review}>Мария Ш</p>
          <br />
          <span class={styles.review}>
            Нам срочно нужно было съехать со съемной квартиры, искали и нашли.
            Спасибо Дом за домом! все сделали быстро и качественно.
          </span>
          <Collapse value={isExpanded1()} class={styles.myTransition}>
            <p class={styles.review}>Нам срочно нужно было съехать со съемной квартиры, искали и нашли. Спасибо Дом
              за домом! все сделали быстро и качественно. Нам срочно нужно было
              съехать со съемной квартиры, искали и нашли.</p>
          </Collapse>
          <br />
          <button class={!isExpanded1() ? styles.buttonExpand : styles.disable}
                  onClick={() => setIsExpanded1(true)}>Раскрыть...
          </button>
        </div>
        <div class={styles.lines} />
        <div class={styles.reviews}>
          <p class={styles.recallTime}>Февраль 2023</p>
          <br />
          <p class={styles.review}>Игорь Д</p>
          <br />
          <span class={styles.review}>
            Нам срочно нужно было съехать со съемной квартиры, искали и нашли.
            Спасибо Дом за домом! все сделали быстро и качественно.
          </span>
          <Collapse value={isExpanded2()} class={styles.myTransition}>
            <p class={styles.review}>Нам срочно нужно было съехать со съемной квартиры, искали и нашли. Спасибо Дом
            за домом! все сделали быстро и качественно. Нам срочно нужно было
            съехать со съемной квартиры, искали и нашли. Спасибо Дом за домом!
            все сделали быстро и качественно. Нам срочно нужно было съехать со съемной квартиры, искали и нашли. Спасибо Дом
            за домом! все сделали быстро и качественно. Нам срочно нужно было
            съехать со съемной квартиры, искали и нашли. Спасибо Дом за домом!
            все сделали быстро и качественно. Нам срочно нужно было съехать со съемной квартиры, искали и нашли. Спасибо Дом
            за домом! все сделали быстро и качественно. Нам срочно нужно было
            съехать со съемной квартиры, искали и нашли. Спасибо Дом за домом!
            все сделали быстро и качественно.</p>
          </Collapse>
          <br />
          <button class={!isExpanded2() ? styles.buttonExpand : styles.disable}
                  onClick={() => setIsExpanded2(true)}>Раскрыть...
          </button>
        </div>
        <div class={styles.lines} />
        <div class={styles.reviews}>
          <p class={styles.recallTime}>Февраль 2023</p>
          <br />
          <p class={styles.review}>Игорь Д</p>
          <br />
          <span class={styles.review}>
            Нам срочно нужно было съехать со съемной квартиры, искали и нашли.
            Спасибо Дом за домом! все сделали быстро и качественно.
          </span>
          <Collapse value={isExpanded3()} class={styles.myTransition}>
            <p class={styles.review}>Нам срочно нужно было съехать со съемной квартиры, искали и нашли. Спасибо Дом
              за домом! все сделали быстро и качественно. Нам срочно нужно было
              съехать со съемной квартиры, искали и нашли. Спасибо Дом за домом!
              все сделали быстро и качественно. Нам срочно нужно было съехать со съемной квартиры, искали и нашли. Спасибо Дом
              за домом! все сделали быстро и качественно. Нам срочно нужно было
              съехать со съемной квартиры, искали и нашли. Спасибо Дом за домом!
              все сделали быстро и качественно. Нам срочно нужно было съехать со съемной квартиры, искали и нашли. Спасибо Дом
              за домом! все сделали быстро и качественно. Нам срочно нужно было
              съехать со съемной квартиры, искали и нашли. Спасибо Дом за домом!
              все сделали быстро и качественно. Нам срочно нужно было съехать со съемной квартиры, искали и нашли. Спасибо Дом
              за домом! все сделали быстро и качественно. Нам срочно нужно было
              съехать со съемной квартиры, искали и нашли. Спасибо Дом за домом!
              все сделали быстро и качественно. Нам срочно нужно было съехать со съемной квартиры, искали и нашли. Спасибо Дом
              за домом! все сделали быстро и качественно. Нам срочно нужно было
              съехать со съемной квартиры, искали и нашли. Спасибо Дом за домом!
              все сделали быстро и качественно. Нам срочно нужно было съехать со съемной квартиры, искали и нашли. Спасибо Дом
              за домом! все сделали быстро и качественно. Нам срочно нужно было
              съехать со съемной квартиры, искали и нашли. Спасибо Дом за домом!
              все сделали быстро и качественно.</p>
          </Collapse>
          <br />
          <button class={!isExpanded3() ? styles.buttonExpand : styles.disable}
                  onClick={() => setIsExpanded3(true)}>Раскрыть...
          </button>
        </div>
        <div class={styles.lines} />
        <Collapse value={isExpanded4()} class={styles.myTransition2}>
          <div class={styles.reviews}>
            <p class={styles.recallTime}>Март 2023</p>
            <br />
            <p class={styles.review}>Мария Ш</p>
            <br />
            <span class={styles.review}>
            Нам срочно нужно было съехать со съемной квартиры, искали и нашли.
            Спасибо Дом за домом! все сделали быстро и качественно.
          </span>
            <Collapse value={isExpanded5()} class={styles.myTransition}>
              <p class={styles.review}>Нам срочно нужно было съехать со съемной квартиры, искали и нашли. Спасибо
                Дом
                за домом! все сделали быстро и качественно. Нам срочно нужно было
                съехать со съемной квартиры, искали и нашли.</p>
            </Collapse>
            <br />
            <button class={!isExpanded5() ? styles.buttonExpand : styles.disable}
                    onClick={() => setIsExpanded5(true)}>Раскрыть...
            </button>
          </div>
          <div class={styles.lines} />
          <div class={styles.reviews}>
            <p class={styles.recallTime}>Февраль 2023</p>
            <br />
            <p class={styles.review}>Игорь Д</p>
            <br />
            <span class={styles.review}>
            Нам срочно нужно было съехать со съемной квартиры, искали и нашли.
            Спасибо Дом за домом! все сделали быстро и качественно.
          </span>
            <Collapse value={isExpanded6()} class={styles.myTransition}>
              <p class={styles.review}>Нам срочно нужно было съехать со съемной квартиры, искали и нашли. Спасибо
                Дом
                за домом! все сделали быстро и качественно. Нам срочно нужно было
                съехать со съемной квартиры, искали и нашли. Спасибо Дом за домом!
                все сделали быстро и качественно. Нам срочно нужно было съехать со съемной квартиры, искали и нашли.
                Спасибо Дом
                за домом! все сделали быстро и качественно. Нам срочно нужно было
                съехать со съемной квартиры, искали и нашли. Спасибо Дом за домом!
                все сделали быстро и качественно. Нам срочно нужно было съехать со съемной квартиры, искали и нашли.
                Спасибо Дом
                за домом! все сделали быстро и качественно. Нам срочно нужно было
                съехать со съемной квартиры, искали и нашли. Спасибо Дом за домом!
                все сделали быстро и качественно.</p>
            </Collapse>
            <br />
            <button class={!isExpanded6() ? styles.buttonExpand : styles.disable}
                    onClick={() => setIsExpanded6(true)}>Раскрыть...
            </button>
          </div>
          <div class={styles.lines} />
          <div class={styles.reviews}>
            <p class={styles.recallTime}>Февраль 2023</p>
            <br />
            <p class={styles.review}>Игорь Д</p>
            <br />
            <span class={styles.review}>
            Нам срочно нужно было съехать со съемной квартиры, искали и нашли.
            Спасибо Дом за домом! все сделали быстро и качественно.
          </span>
            <Collapse value={isExpanded7()} class={styles.myTransition}>
              <p class={styles.review}>Нам срочно нужно было съехать со съемной квартиры, искали и нашли. Спасибо
                Дом
                за домом! все сделали быстро и качественно. Нам срочно нужно было
                съехать со съемной квартиры, искали и нашли. Спасибо Дом за домом!
                все сделали быстро и качественно. Нам срочно нужно было съехать со съемной квартиры, искали и нашли.
                Спасибо Дом
                за домом! все сделали быстро и качественно. Нам срочно нужно было
                съехать со съемной квартиры, искали и нашли. Спасибо Дом за домом!
                все сделали быстро и качественно. Нам срочно нужно было съехать со съемной квартиры, искали и нашли.
                Спасибо Дом
                за домом! все сделали быстро и качественно. Нам срочно нужно было
                съехать со съемной квартиры, искали и нашли. Спасибо Дом за домом!
                все сделали быстро и качественно. Нам срочно нужно было съехать со съемной квартиры, искали и нашли.
                Спасибо Дом
                за домом! все сделали быстро и качественно. Нам срочно нужно было
                съехать со съемной квартиры, искали и нашли. Спасибо Дом за домом!
                все сделали быстро и качественно. Нам срочно нужно было съехать со съемной квартиры, искали и нашли.
                Спасибо Дом
                за домом! все сделали быстро и качественно. Нам срочно нужно было
                съехать со съемной квартиры, искали и нашли. Спасибо Дом за домом!
                все сделали быстро и качественно. Нам срочно нужно было съехать со съемной квартиры, искали и нашли.
                Спасибо Дом
                за домом! все сделали быстро и качественно. Нам срочно нужно было
                съехать со съемной квартиры, искали и нашли. Спасибо Дом за домом!
                все сделали быстро и качественно.</p>
            </Collapse>
            <br />
            <button class={!isExpanded7() ? styles.buttonExpand : styles.disable}
                    onClick={() => setIsExpanded7(true)}>Раскрыть...
            </button>
          </div>
          <div class={styles.lines} />
        </Collapse>
        <div class={!isExpanded4() ? styles.downloadButton : styles.disable}>
          <button class={styles.textDownload} onClick={() => setIsExpanded4(true)}>загрузить ещё</button>
        </div>
      </div>
    </>
  )
}
