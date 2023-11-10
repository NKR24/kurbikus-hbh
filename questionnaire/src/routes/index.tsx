import { Title } from "solid-start"
import Navbar from "~/components/navbar"
import Accordion from "~/components/accordion"
import home1 from "../assets/img/home1.jpg"
import home3 from "../assets/img/home2.jpg"
import home2 from "../assets/img/home3.jpg"
import home4 from "../assets/img/home4.jpg"
import clsx from "clsx"
import section1Styles from "./index/section1.module.scss"
import section2Styles from "./index/section2.module.scss"
import section3Styles from "./index/section3.module.scss"
import section4Styles from "./index/section4.module.scss"
import section5Styles from "./index/section5.module.scss"
import section6Styles from "./index/section6.module.scss"
import section7Styles from "./index/section7.module.scss"
import section8Styles from "./index/section8.module.scss"
import section9Styles from "./index/section9.module.scss"
import section10Styles from "./index/section10.module.scss"
import section11Styles from "./index/section11.module.scss"
import sectionMapStyles from "./index/sectionMap.module.scss"
import PDF from "../assets/img/PDF.png"
import s5image from "../assets/img/Section5image.jpg"
import s5imageForMobile from "..//assets/img/Section5imageForMobile.jpg"
import s7image from "../assets/img/Section7image.jpg"
import s7imageForMobile from "..//assets/img/Section7imageForMobile.jpg"

export default function Home() {
  return (
    <>
      <Title>Опросник</Title>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Accordion />
      <Section10 />
      <Section11 />
      <SectionMap />
    </>
  )
}

function Section1() {
  return (
    <div class={section1Styles.containerMain}>
      <div class={section1Styles.containerSection}>
        <div class={section1Styles.containerDesktop}>
          <div class={section1Styles.containerFirst}>
            <div class={clsx(section1Styles.box, section1Styles.box1)}>
              <div class={clsx(section1Styles.text, section1Styles.text1large)}>
                <p>БарнХаус</p>
              </div>
              <div class={clsx(section1Styles.text, section1Styles.text1small)}>
                <p>В котором можно жить даже на крайнем севере</p>
              </div>
            </div>
            <div class={clsx(section1Styles.box, section1Styles.box2)}>
              <div class={clsx(section1Styles.text, section1Styles.text2)}>
                <p>НА МОНОЛИТНОМ ФУНДАМЕНТЕ ЗА 60 ДНЕЙ </p>
              </div>
            </div>
            <div class={clsx(section1Styles.box, section1Styles.box3)}>
              <div class={clsx(section1Styles.text, section1Styles.text3)}>
                <p>ГАРАНТИЯ 50 лет.</p>
              </div>
            </div>
            <div class={clsx(section1Styles.box, section1Styles.box4)}>
              <div class={clsx(section1Styles.text, section1Styles.text4)}>
                <p>Ипотека без первоначального взноса</p>
              </div>
            </div>
          </div>
          <div class={section1Styles.containerSecond}>
            <div class={section1Styles.mainHomeImage} />
          </div>
        </div>
        <div class={section1Styles.containerMobile}>
          <div class={clsx(section1Styles.box, section1Styles.MobileImage)}>
            <div class={section1Styles.homeButton}>
              <div class={section1Styles.homeButtonText}>
                <p>Консультация</p>
              </div>
            </div>
          </div>
          <div class={clsx(section1Styles.box, section1Styles.MobileFisrt)}>
            <div
              class={clsx(
                section1Styles.text,
                section1Styles.MobTextFirstLarge
              )}
            >
              <p>барнхаус</p>
            </div>
            <div
              class={clsx(
                section1Styles.text,
                section1Styles.MobTextFirstSmall
              )}
            >
              <p>
                В котором можно жить даже на крайнем севере на монолитном
                фундаменте за 60 дней.
              </p>
            </div>
          </div>
          <div class={clsx(section1Styles.box, section1Styles.MobileSecond)}>
            <div class={section1Styles.videoButton}>
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
            <div
              class={clsx(section1Styles.text, section1Styles.MobTextSecond)}
            >
              <p>Посмотрите видео о строительстве вашего дома</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Section2() {
  return (
    <>
      <div class={clsx(section2Styles.section, section2Styles.fonts)}>
        <div class={section2Styles.firstText}>каталоги домов с ценами</div>
        <div class={section2Styles.blocks}>
          <div class={clsx(section2Styles.block1, section2Styles.relative)}>
            <img src={home1} alt="home1" class={section2Styles.imageHome} />
            <img src={PDF} alt="PDF" class={section2Styles.overlayImage} />
            <div class={section2Styles.textOverlay}>h1</div>
            <h1 class={section2Styles.text}>
              Площадь: от 90 м² <br />
              3 спальни, 1 санузел От <br />4 300 000 руб.
            </h1>
          </div>
          <div class={clsx(section2Styles.block1, section2Styles.thirdBlock)}>
            <img src={home3} alt="home3" class={section2Styles.imageHome} />
            <img src={PDF} alt="PDF" class={section2Styles.overlayImage} />
            <div class={section2Styles.textOverlay}>h3</div>
            <h1 class={section2Styles.text}>
              Площадь: от 110 м² <br />3 спальни, 1 санузел От <br />4 000 000
              руб.
            </h1>
          </div>
          <div class={clsx(section2Styles.block1, section2Styles.thirdBlock1)}>
            <img src={home2} alt="home2" class={section2Styles.imageHome} />
            <img src={PDF} alt="PDF" class={section2Styles.overlayImage} />
            <div class={section2Styles.textOverlay}>h2</div>
            <div class={section2Styles.blackRectangle}>
              <div class={section2Styles.textShale}>шале</div>
            </div>
            <h1 class={section2Styles.text}>
              Площадь: от 90 м²
              <br /> 3 спальни, 1 санузел От <br /> 4 600 000 руб.
            </h1>
          </div>
          <div class={clsx(section2Styles.block1, section2Styles.fourthBlock)}>
            <img src={home4} alt="home4" class={section2Styles.imageHome} />
            <img src={PDF} alt="PDF" class={section2Styles.overlayImage} />
            <div class={section2Styles.textOverlay}>h4</div>
            <h1 class={section2Styles.text}>
              Площадь: от 110 м² <br />3 спальни, 1 санузел От <br />3 900 000
              руб.
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

function Section3() {
  return (
    <>
      <div class={section3Styles.containerMain}>
        <div class={section3Styles.containerSection}>
          <div class={section3Styles.containerDesktop}>
            <div class={clsx(section3Styles.box, section3Styles.boxFirst)}>
              <div class={clsx(section3Styles.text, section3Styles.textMain)}>
                <p>5 вопросов о вашем доме</p>
              </div>
              <button class={section3Styles.buttonStart}>
                <span class={section3Styles.textButton}>начать</span>
              </button>
              <div class={section3Styles.table}>
                <p class={section3Styles.tableTextMain}>Вы получите:</p>
                <ol class={section3Styles.tableText}>
                  <li>Подходящие проекты с ценой в PDF</li>
                  <li>Изменение комплектации и цены</li>
                  <li>Выбор цветов и покрытий</li>
                  <li>Подбор материалов кровли и окон</li>
                </ol>
              </div>
            </div>
          </div>
          <div class={section3Styles.containerMobile}>
            <div
              class={clsx(section3Styles.box, section3Styles.boxMobileFirst)}
            >
              <div
                class={clsx(section3Styles.text, section3Styles.textMainMob)}
              >
                <p>5 вопросов о вашем доме</p>
              </div>
              <div class={section3Styles.buttonStartMob}>
                <div class={section3Styles.textButtonMob}>
                  <p>начать</p>
                </div>
              </div>
            </div>
            <div
              class={clsx(section3Styles.box, section3Styles.boxMobileSecond)}
            >
              <div class={section3Styles.tableMob}>
                <p class={section3Styles.tableTextMainMob}>Вы получите:</p>
                <ol class={section3Styles.tableTextMob}>
                  <li>Подходящие проекты с ценой в PDF</li>
                  <li>Изменение комплектации и цены</li>
                  <li>Выбор цветов и покрытий</li>
                  <li>Подбор материалов кровли и окон</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Section4() {
  return (
    <>
      <div class={section4Styles.containerMain}>
        <div class={section4Styles.containerDesktop}>
          <div class={section4Styles.containerSection}>
            <div class={section4Styles.boxOne}>
              <h1 class={section4Styles.mainText}>ПОЧЕМУ МЫ?</h1>
            </div>
          </div>
          <div class={section4Styles.boxSecond}>
            <div class={section4Styles.partOne}>
              <p class={clsx(section4Styles.itemMain, section4Styles.One)}>01</p>
              <p class={clsx(section4Styles.itemMain, section4Styles.Two)}>02</p>
            </div>
            <div class={section4Styles.partTwo}>
              <div class={section4Styles.tableOne}>
                <p class={clsx(section4Styles.itemDescription, section4Styles.OneD)}>СТРОИМ/МОНТАЖ КРУГЛЫЙ ГОД</p>
                <p class={clsx(section4Styles.itemDescription, section4Styles.TwoD)}>ЛУЧШИЕ ИННОВАЦИОННЫЕ ТЕХНОЛОГИИ И
                  ГАРАНТИЯ КАЧЕСТВА</p>
                <div class={section4Styles.content}>
                  <p class={clsx(section4Styles.itemMain, section4Styles.Three)}>03</p>
                  <p class={clsx(section4Styles.itemDescription, section4Styles.ThreeD)}>ГИБКАЯ СИСТЕМА ОПЛАТЫ</p>
                </div>
              </div>
              <div class={section4Styles.tableTwo}>
                <p class={clsx(section4Styles.itemMain, section4Styles.Five)}>05</p>
                <p class={clsx(section4Styles.itemMain, section4Styles.Four)}>04</p>
              </div>
            </div>
            <div class={section4Styles.partThree}>
              <p class={clsx(section4Styles.itemDescription, section4Styles.FiveD)}>БЕСПЛАТНЫЙ ПОДБОР УЧАСТКА И РАСЧЁТ ФУНДАМЕНТА</p>
              <p class={clsx(section4Styles.itemDescription, section4Styles.FourD)}>ДОСТУПНАЯ СТОИМОСТЬ ЗА СЧЕТ СОБСТВЕННОГО ПРОИЗВОДСТВА</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Section5() {
  return (
    <>
      <div class={section5Styles.Section5}>
        <img
          src={s5image}
          alt="foundation"
          class={section5Styles.foundationImage}
        />
        <img
          src={s5imageForMobile}
          alt="foundation"
          class={section5Styles.foundationImage2}
        />
        <div class={section5Styles.sevenLines}>
          <div class={section5Styles.line} />
          <div class={section5Styles.line} />
          <div class={section5Styles.line} />
          <div class={section5Styles.line} />
          <div class={section5Styles.line} />
          <div class={section5Styles.line} />
          <div class={section5Styles.line} />
        </div>
        <p class={section5Styles.foundationText}>фундамент</p>
        <ol class={section5Styles.numberedList}>
          <li>
            Бетонные плиты (собственного производства) устанавливаются на
            длинные ригели из гидротехнического бетона со спец армированием.
          </li>
          <li>
            Конструкцию держат монолитные бетонные сваи на титановых крепежах.
            Данный сплав используется для строения космических аппаратов.
          </li>
          <li>
            На бетонной плите, внутри деревянной обвязки шириной 150 мм, 2 слоя
            теплоизоляционного материала (экструдированный пенополистерол).
          </li>
          <li>
            {" "}
            Затем производится полусухая стяжка на немецком оборудовании. В
            результате создаётся идеально ровное предфинальное покрытие пола. На
            него кладётся финальное половое покрытие.
          </li>
          <li>
            Конструкция обладает высокой несущей способностью, большой площадью
            опоры, что делает невозможным опрокидывание и провалы грунта.
          </li>
        </ol>
      </div>
    </>
  )
}

function Section6() {
  return (
    <>
      <div class={section6Styles.containerMain}>
        <div class={section6Styles.containerSection}>
          <div class={section6Styles.containerDesktop}>
            <div class={section6Styles.partFirst}>
              <div class={clsx(section6Styles.box, section6Styles.boxFirst)}>
                <p class={clsx(section6Styles.text, section6Styles.textFirst)}>
                  наши дома
                </p>
              </div>
              <div class={clsx(section6Styles.box, section6Styles.boxSecond)}>
                <p class={clsx(section6Styles.text, section6Styles.textSecond)}>
                  интерьер
                </p>
              </div>
              <div class={clsx(section6Styles.box, section6Styles.boxThird)}>
                <p class={clsx(section6Styles.text, section6Styles.textThird)}>
                  стройка
                </p>
              </div>
            </div>
            <div class={section6Styles.partSecond}>
              <div
                class={clsx(section6Styles.child, section6Styles.OneThreeFive)}
              >
                <p class={section6Styles.textLow}>наши дома</p>
                <p class={section6Styles.textLarge}>дом по проекту h1</p>
              </div>
              <div class={clsx(section6Styles.child, section6Styles.Second)}>
                <p class={section6Styles.textLow}>наши дома</p>
                <p class={section6Styles.textLarge}>дом по проекту h1</p>
              </div>
              <div
                class={clsx(section6Styles.child, section6Styles.OneThreeFive)}
              >
                <p class={section6Styles.textLow}>наши дома</p>
                <p class={section6Styles.textLarge}>дом по проекту h1</p>
              </div>
              <div
                class={clsx(section6Styles.child, section6Styles.FourSixEight)}
              >
                <p class={section6Styles.textLow}>наши дома</p>
                <p class={section6Styles.textLarge}>дом по проекту h1</p>
              </div>
              <div
                class={clsx(section6Styles.child, section6Styles.OneThreeFive)}
              >
                <p class={section6Styles.textLow}>наши дома</p>
                <p class={section6Styles.textLarge}>дом по проекту h1</p>
              </div>
              <div
                class={clsx(section6Styles.child, section6Styles.FourSixEight)}
              >
                <p class={section6Styles.textLow}>наши дома</p>
                <p class={section6Styles.textLarge}>дом по проекту h1</p>
              </div>
              <div class={clsx(section6Styles.target, section6Styles.Seven)}>
                <p class={section6Styles.textLow}>наши дома</p>
                <p class={section6Styles.textLarge}>дом по проекту h1</p>
              </div>
              <div
                class={clsx(section6Styles.child, section6Styles.FourSixEight)}
              >
                <p class={section6Styles.textLow}>наши дома</p>
                <p class={section6Styles.textLarge}>дом по проекту h1</p>
              </div>
            </div>
          </div>
          <div class={section6Styles.containerMobile}>
            <div class={section6Styles.mobileOne}>
              <div
                class={clsx(section6Styles.boxMobile, section6Styles.mobFirst)}
              >
                <p
                  class={clsx(
                    section6Styles.textMobile,
                    section6Styles.textMobFirst
                  )}
                >
                  наши дома
                </p>
              </div>
              <div
                class={clsx(section6Styles.boxMobile, section6Styles.mobSecond)}
              >
                <p
                  class={clsx(
                    section6Styles.textMobile,
                    section6Styles.textMobSecond
                  )}
                >
                  интерьер
                </p>
              </div>
              <div
                class={clsx(section6Styles.boxMobile, section6Styles.mobThird)}
              >
                <p
                  class={clsx(
                    section6Styles.textMobile,
                    section6Styles.textMobThird
                  )}
                >
                  стройка
                </p>
              </div>
            </div>
            <div class={section6Styles.mobileTwo}>
              <div
                class={clsx(section6Styles.childMobile, section6Styles.mobOne)}
              >
                <p class={section6Styles.textLowMobile}>наши дома</p>
              </div>
              <div
                class={clsx(section6Styles.childMobile, section6Styles.mobTwo)}
              >
                <p class={section6Styles.textLowMobile}>наши дома</p>
              </div>
              <div
                class={clsx(
                  section6Styles.childMobile,
                  section6Styles.mobThree
                )}
              >
                <p class={section6Styles.textLowMobile}>наши дома</p>
              </div>
              <div
                class={clsx(section6Styles.childMobile, section6Styles.mobFour)}
              >
                <p class={section6Styles.textLowMobile}>наши дома</p>
              </div>
              <div
                class={clsx(section6Styles.childMobile, section6Styles.mobFive)}
              >
                <p class={section6Styles.textLowMobile}>наши дома</p>
              </div>
              <div
                class={clsx(section6Styles.childMobile, section6Styles.mobSix)}
              >
                <p class={section6Styles.textLowMobile}>наши дома</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Section7() {
  return (
    <>
      <div class={section7Styles.Section7}>
        <div class={section7Styles.rectangle}>
          <img
            src={s7image}
            alt="preview"
            class={section7Styles.previewImage}
          />
          <svg
            class={section7Styles.playButton}
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
          <div class={section7Styles.rectangle2}>
            <img
              src={s7imageForMobile}
              alt="preview"
              class={section7Styles.previewImage2}
            />
            <svg
              class={section7Styles.playButton2}
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
        <p class={section7Styles.interviewText}>
          ИНТЕРВЬЮ С СОЗДАТЕЛЕМ КОМПАНИИ
        </p>
        <p class={section7Styles.textReviews}>отзывы:</p>
        <svg
          class={section7Styles.arrow}
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
        <svg
          class={section7Styles.arrow2}
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
        >
          <path d="M1 18L18 1M18 1H1M18 1V18" stroke="#DEDEDE" />
        </svg>
        <div class={section7Styles.lines} />
        <div class={section7Styles.reviews}>
          <p class={section7Styles.recallTime}>Март 2023</p>
          <br />
          <p class={section7Styles.review}>Мария Ш</p>
          <br />
          <p class={section7Styles.review2}>
            Нам срочно нужно было съехать со съемной квартиры, искали и нашли.
            Спасибо Дом за домом! все сделали быстро и качественно. Нам срочно
            нужно было съехать со съемной квартиры, искали и нашли. Спасибо Дом
            за домом! все сделали быстро и качественно. Нам срочно нужно было
            съехать со съемной квартиры, искали и нашли. Спасибо Дом за домом!
            все сделали быстро и качественно.
          </p>
          <p class={section7Styles.reviewMobile}>
            Нам срочно нужно было съехать со съемной квартиры, искали и нашли.
            Спасибо Дом за домом! все сделали быстро и качественно.
          </p>
          <br />
          <p class={section7Styles.buttonExpand}>Раскрыть...</p>
        </div>
        <div class={section7Styles.lines} />
        <div class={section7Styles.reviews}>
          <p class={section7Styles.recallTime}>Февраль 2023</p>
          <br />
          <p class={section7Styles.review}>Игорь Д</p>
          <br />
          <p class={section7Styles.review}>
            Нам срочно нужно было съехать со съемной квартиры, искали и нашли.
            Спасибо Дом за домом! все сделали быстро и качественно.
          </p>
          <br />
          <p class={section7Styles.buttonExpand}>Раскрыть...</p>
        </div>
        <div class={section7Styles.lines} />
        <div class={section7Styles.reviews}>
          <p class={section7Styles.recallTime}>Февраль 2023</p>
          <br />
          <p class={section7Styles.review}>Игорь Д</p>
          <br />
          <p class={section7Styles.review}>
            Нам срочно нужно было съехать со съемной квартиры, искали и нашли.
            Спасибо Дом за домом! все сделали быстро и качественно. Спасибо Дом
            за домом! все сделали быстро и качественно.
          </p>
          <br />
          <p class={section7Styles.buttonExpand}>Раскрыть...</p>
        </div>
        <div class={section7Styles.lines} />
        <div class={section7Styles.downloadButton}>
          <p class={section7Styles.textDownload}>загрузить ещё</p>
        </div>
      </div>
    </>
  )
}

function Section8() {
  return (
    <>
      <div class={section8Styles.containerMain}>
        <div class={section8Styles.containerSection}>
          <p class={section8Styles.textMain}>ЭКСКУРСИЯ ПО НАШИМ ОБЪЕКТАМ</p>
          <div class={section8Styles.videoBox}>
            <div class={section8Styles.videoButton} />
          </div>
          <p class={clsx(section8Styles.text, section8Styles.textOne)}>
            Демонстрируем построенный вариант дома, однако может отвезти на
            недостроенный объект, чтобы вы могли проверить и убедиться своими
            глазами. Экскурсию проводит наш проектный менеджер, поэтому вы
            получите ответы на
          </p>
          <p class={clsx(section8Styles.text, section8Styles.textTwo)}>
            все интересующие вас вопросы.
          </p>
          <p class={clsx(section8Styles.text, section8Styles.textThree)}>
            Также поможем подобрать вам участок, если вы в растерянности от
            большого количества предложений и не знаете, что лучше.
          </p>
          <button class={section8Styles.button}>
            <span class={section8Styles.textButton}>записаться</span>
          </button>
        </div>
      </div>
    </>
  )
}

function Section9() {
  return (
    <>
      <div class={section9Styles.containerMain}>
        <div class={section9Styles.containerSection}>
          <div class={section9Styles.boxFirst}>
            <h1 class={section9Styles.textMain}>Консультация</h1>
            <p class={section9Styles.textNoMain}>
              Оставьте свои контактные данные и мы обязательно с вами свяжемся
            </p>
            <div class={section9Styles.forminputmaterial}>
              <input
                type={"text"}
                name={"username"}
                id={"username"}
                placeholder={"имя*"}
                autocomplete={"on"}
                class={section9Styles.formcontrolmaterial}
                required
              />
            </div>
            <div class={section9Styles.forminputmaterial}>
              <input
                type={"text"}
                name={"mail"}
                id={"mail"}
                placeholder={"почта или номер телефона*"}
                autocomplete={"on"}
                class={section9Styles.formcontrolmaterial}
                required
              />
            </div>
            <div class={section9Styles.forminputmaterial}>
              <input
                type={"text"}
                name={"message"}
                id={"message"}
                placeholder={"Текст сообщения"}
                autocomplete={"off"}
                class={section9Styles.formcontrolmaterial}
                required
              />
            </div>
          </div>
          <div class={section9Styles.boxSecond}>
            <p class={section9Styles.textLow}>
              нажимая на кнопку «Отправить» вы даете согласие на обработку
              персональных данных
            </p>
            <button class={section9Styles.button}>
              <span class={section9Styles.fontButton}>отправить</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

function Section10() {
  return (
    <>
      <div class={section10Styles.containerMain}>
        <div class={section10Styles.containerSection}>
          <h1 class={section10Styles.textMain}>ПЛЮСЫ</h1>
          <p class={clsx(section10Styles.itemMain, section10Styles.OneHalf)}>мобильные</p>
          <div class={section10Styles.part}>
            <div class={section10Styles.tableOne}>
              <p class={clsx(section10Styles.itemMain, section10Styles.OneHalfTwo)}>бригады</p>
              <p class={clsx(section10Styles.itemMain, section10Styles.OneHalfThree)}>по всей россии</p>
              <p class={clsx(section10Styles.itemMain, section10Styles.Two)}>Используем европейские материалы</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Section11() {
  return (
    <>
      <div class={section11Styles.containerMain}>
        <div class={section11Styles.containerSection}>
          <p class={section11Styles.textMain}>О НАС</p>
          <div class={section11Styles.table}>
            <div class={clsx(section11Styles.box, section11Styles.One)}>
              <div
                class={clsx(section11Styles.photo, section11Styles.photoOne)}
              />
              <h1 class={section11Styles.main}>Александр</h1>
              <p class={section11Styles.text}>Технический директор</p>
            </div>
            <div class={clsx(section11Styles.box, section11Styles.Two)}>
              <div
                class={clsx(section11Styles.photo, section11Styles.photoTwo)}
              />
              <h1 class={section11Styles.main}>Андрей Аркадьевич</h1>
              <p class={section11Styles.text}>Технический надзор</p>
            </div>
            <div class={clsx(section11Styles.box, section11Styles.Three)}>
              <div
                class={clsx(
                  section11Styles.photo,
                  section11Styles.photoThree
                )}
              />
              <h1 class={section11Styles.main}>Александр</h1>
              <p class={section11Styles.text}>Бригадир монтажников</p>
            </div>
            <div class={clsx(section11Styles.box, section11Styles.Four)}>
              <div
                class={clsx(section11Styles.photo, section11Styles.photoFour)}
              />
              <h1 class={section11Styles.main}>Александр</h1>
              <p class={section11Styles.text}>Бригадир кровельщиков</p>
            </div>
            <div class={clsx(section11Styles.box, section11Styles.Five)}>
              <div
                class={clsx(section11Styles.photo, section11Styles.photoFive)}
              />
              <h1 class={section11Styles.main}>Федор</h1>
              <p class={section11Styles.text}>Бетонных дел мастер</p>
            </div>
            <div class={clsx(section11Styles.box, section11Styles.Six)}>
              <div
                class={clsx(section11Styles.photo, section11Styles.photoSix)}
              />
              <h1 class={section11Styles.main}>Максим</h1>
              <p class={section11Styles.text}>Руководитель производства</p>
            </div>
          </div>
          <div class={section11Styles.logo} />
          <div class={section11Styles.boxInfo}>
            <p class={section11Styles.link}>
              HBH.ru©2022
            </p>
            <p class={section11Styles.M}>
              M
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

function SectionMap() {
  return (
    <>
      <div class={sectionMapStyles.containerMain}>
        <div class={sectionMapStyles.containerSection}>
          <div class={sectionMapStyles.Map} />
          <div class={sectionMapStyles.Box}>
            <div class={sectionMapStyles.One}>
              <div class={sectionMapStyles.image} />
            </div>
            <div class={sectionMapStyles.Two}>
              <div class={sectionMapStyles.logos}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="78"
                  height="18"
                  viewBox="0 0 78 18"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_732)">
                    <path
                      d="M6.1616 0.237305C7.91793 0.237305 9.67993 0.237305 11.4363 0.237305C11.5386 0.248601 11.6409 0.254249 11.7432 0.265544C12.4082 0.327672 13.0789 0.327672 13.7269 0.457575C15.4434 0.802099 16.637 1.79049 17.2395 3.44534C17.5294 4.24735 17.5976 5.08324 17.6033 5.92479C17.609 7.93545 17.6203 9.94612 17.5976 11.9511C17.5919 12.5894 17.5464 13.2332 17.4214 13.8545C17.0917 15.5319 16.1255 16.7237 14.5056 17.3506C13.7212 17.6556 12.9027 17.7346 12.0728 17.7403C10.2142 17.7572 8.3499 17.7742 6.49127 17.7685C5.57616 17.7629 4.65537 17.7572 3.75164 17.5426C2.29088 17.1924 1.20525 16.3678 0.562975 15.0067C0.165102 14.1708 0.0457407 13.2728 0.0343729 12.3578C0.0116374 10.4544 -0.0110982 8.56238 0.00595348 6.66467C0.0116374 5.86831 0.0627924 5.0663 0.17647 4.27559C0.358355 3.04998 0.955163 2.03335 1.96689 1.28217C2.83085 0.638309 3.83689 0.378503 4.8941 0.30508C5.3147 0.27684 5.741 0.259896 6.1616 0.237305ZM8.80461 16.221C8.80461 16.2097 8.80461 16.204 8.80461 16.1927C9.27069 16.1927 9.73677 16.204 10.2028 16.1927C11.2089 16.1589 12.2149 16.1702 13.2096 16.0459C14.5681 15.8765 15.4832 15.1027 15.8185 13.7585C15.9493 13.2276 16.0004 12.6628 16.0061 12.1149C16.0345 10.3358 16.0459 8.55108 16.0345 6.77198C16.0288 6.06598 15.9947 5.35434 15.9038 4.654C15.7219 3.24766 14.8352 2.29316 13.4427 2.01641C12.8402 1.8978 12.2149 1.85826 11.5954 1.85262C10.0494 1.82438 8.50337 1.83003 6.95735 1.83567C6.08203 1.84132 5.20103 1.82438 4.33139 1.97687C2.97863 2.21409 2.06352 3.04998 1.78501 4.3829C1.66565 4.95334 1.62586 5.54637 1.61449 6.13376C1.58607 7.5401 1.57471 8.94079 1.58607 10.3471C1.59744 11.3412 1.62586 12.3352 1.7168 13.3179C1.80775 14.2837 2.26814 15.0745 3.12072 15.5997C3.6948 15.9555 4.34276 16.0967 5.00778 16.1193C6.28097 16.1702 7.54279 16.1927 8.80461 16.221Z"
                      fill="black"
                    />
                    <path
                      d="M4.28029 9.00852C4.2746 6.52908 6.31512 4.50146 8.81603 4.50146C11.3169 4.50146 13.329 6.50084 13.3461 8.99158C13.3575 11.471 11.3283 13.5043 8.82171 13.5099C6.3208 13.5156 4.28597 11.4936 4.28029 9.00852ZM5.87746 8.99158C5.87177 10.6069 7.17338 11.9172 8.79898 11.9229C10.4246 11.9285 11.7432 10.6408 11.7546 9.02547C11.766 7.39886 10.4587 6.08854 8.8274 6.08289C7.19612 6.08289 5.88883 7.37627 5.87746 8.99158Z"
                      fill="black"
                    />
                    <path
                      d="M14.5851 4.31518C14.5908 4.89692 14.1247 5.3657 13.545 5.37135C12.9538 5.377 12.4764 4.90822 12.4707 4.32648C12.4707 3.74474 12.9311 3.28161 13.5109 3.27031C14.1077 3.26467 14.5794 3.7278 14.5851 4.31518Z"
                      fill="black"
                    />
                    <path
                      d="M26.2821 7.04871C26.4355 6.43873 26.8675 6.15069 27.4472 5.95866C33.4324 4.01012 39.4118 2.04463 45.397 0.0847965C46.2439 -0.191953 47.0169 0.214699 47.1533 1.028C47.1874 1.22003 47.159 1.43466 47.1135 1.62669C45.9142 6.72113 44.7035 11.8212 43.4985 16.9157C43.2485 17.9662 42.2083 18.3277 41.3614 17.6443C40.1223 16.6446 38.8889 15.6392 37.6555 14.6283C37.5418 14.5379 37.4736 14.5209 37.3486 14.617C36.2686 15.4303 35.1887 16.2323 34.0974 17.0343C33.9667 17.1303 33.8075 17.2207 33.6484 17.2545C33.3358 17.3223 33.0686 17.1303 32.9777 16.7745C32.8413 16.2323 32.7276 15.6844 32.6082 15.1366C32.2786 13.606 31.9432 12.0754 31.6192 10.5448C31.5908 10.4092 31.5226 10.3415 31.3976 10.2906C30.0277 9.6976 28.6636 9.09327 27.2881 8.51718C26.7766 8.30256 26.4071 7.99757 26.2764 7.44972C26.2821 7.31981 26.2821 7.18426 26.2821 7.04871ZM27.4643 7.24639C27.5893 7.30852 27.6519 7.33676 27.7201 7.37065C29.0899 7.96368 30.4597 8.55671 31.8238 9.16104C32.0114 9.24576 32.1478 9.24012 32.3297 9.13845C35.3592 7.45536 38.3944 5.78357 41.4296 4.11178C41.5206 4.06095 41.6115 4.01577 41.7081 3.98188C41.9582 3.89716 42.2254 3.98753 42.3788 4.19085C42.5266 4.38853 42.538 4.65963 42.3959 4.87425C42.3334 4.97027 42.2538 5.05499 42.1742 5.13971C40.1394 7.25204 38.1045 9.37002 36.0697 11.4823C36.0186 11.5332 35.9731 11.5897 35.9162 11.6461C38.0307 13.3688 40.1337 15.0744 42.2651 16.8084C43.4985 11.5897 44.7263 6.41049 45.9654 1.18615C39.7813 3.20811 33.6541 5.21878 27.4643 7.24639ZM33.6427 14.0748C33.6541 14.0748 33.6711 14.0691 33.6825 14.0691C33.6938 14.0352 33.7109 13.9957 33.7223 13.9618C33.9382 13.2106 34.1486 12.4538 34.3816 11.7083C34.4441 11.5106 34.5578 11.3073 34.6999 11.1604C35.9219 9.87269 37.1553 8.59625 38.3887 7.31981C38.4399 7.26898 38.491 7.2125 38.5365 7.15602C38.5251 7.14473 38.5138 7.13343 38.5081 7.12778C36.6154 8.17265 34.7169 9.21752 32.8242 10.2624C33.0913 11.5445 33.3642 12.8096 33.6427 14.0748ZM36.5244 13.7189C36.1265 13.397 35.7457 13.0864 35.3422 12.7588C35.1205 13.5382 34.8988 14.295 34.6658 15.1027C35.3081 14.6226 35.9049 14.1764 36.5244 13.7189Z"
                      fill="black"
                    />
                    <path
                      d="M54.7078 6.92445C54.7363 6.44437 54.7704 5.9643 54.7988 5.48422C54.8442 4.68221 54.9181 3.8802 55.1625 3.10644C55.6684 1.52501 56.7654 0.666524 58.408 0.514029C59.4652 0.418014 60.5224 0.378478 61.5853 0.338943C65.0752 0.203392 68.5708 0.220336 72.0607 0.378478C72.9474 0.418014 73.8341 0.446254 74.7094 0.576156C76.2213 0.802074 77.2672 1.85824 77.6253 3.36059C77.8867 4.46194 77.9095 5.58024 77.9492 6.70418C78.0288 9.02548 78.0345 11.3411 77.8015 13.6511C77.7105 14.5379 77.4832 15.402 76.9205 16.1306C76.335 16.8931 75.5506 17.3506 74.5958 17.4353C73.2885 17.5482 71.9812 17.6104 70.6739 17.6612C67.3943 17.7967 64.1147 17.7403 60.8351 17.6104C59.8404 17.5708 58.8343 17.5087 57.851 17.3449C56.3221 17.0907 55.4411 16.1024 55.0659 14.6339C54.8158 13.6568 54.8158 12.6515 54.7476 11.6518C54.7363 11.471 54.7192 11.296 54.7021 11.1152C54.7078 9.72583 54.7078 8.32514 54.7078 6.92445ZM66.86 1.57019C64.7172 1.62103 63.0802 1.64927 61.4489 1.70575C60.4656 1.73963 59.4823 1.79046 58.499 1.87518C57.5384 1.9599 56.845 2.42303 56.5153 3.37189C56.2823 4.04399 56.2084 4.73304 56.1686 5.43339C56.0322 7.81682 56.0208 10.2059 56.1743 12.5893C56.2141 13.2106 56.3164 13.8262 56.4414 14.4362C56.521 14.8259 56.6858 15.193 56.9871 15.4811C57.3963 15.8764 57.9022 16.0402 58.4421 16.0911C59.2436 16.1701 60.0393 16.2323 60.8407 16.2661C64.5069 16.413 68.173 16.4469 71.8391 16.2718C72.7144 16.2323 73.5954 16.1927 74.465 16.0911C75.2551 15.995 75.8235 15.5602 76.119 14.7977C76.4089 14.0634 76.4771 13.2953 76.5226 12.5216C76.642 10.4601 76.6533 8.39856 76.5624 6.33706C76.5226 5.41644 76.5112 4.48453 76.2611 3.58086C76.0565 2.85228 75.6643 2.29313 74.9311 2.04462C74.5844 1.92602 74.2092 1.85824 73.8455 1.8413C71.3503 1.72834 68.855 1.64362 66.86 1.57019Z"
                      fill="black"
                    />
                    <path
                      d="M63.3875 8.73167C63.3875 7.85624 63.3875 6.98645 63.3875 6.11102C63.3875 5.23559 64.1094 4.8007 64.8824 5.21865C66.5307 6.11102 68.1734 7.00904 69.8217 7.90142C70.1855 8.0991 70.4128 8.37585 70.4128 8.79379C70.4071 9.21174 70.1684 9.48284 69.8046 9.67487C68.162 10.5447 66.525 11.4257 64.8824 12.3012C64.1037 12.7135 63.3875 12.2899 63.3818 11.4201C63.3875 10.5221 63.3875 9.62969 63.3875 8.73167ZM64.763 10.8327C66.0476 10.1493 67.3037 9.4772 68.594 8.78815C67.298 8.08215 66.0419 7.39875 64.763 6.70405C64.763 8.0878 64.763 9.43766 64.763 10.8327Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_732">
                      <rect width="78" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div class={sectionMapStyles.Three}>
              <h1 class={sectionMapStyles.number}>8 985 472 35 09</h1>
              <h2 class={sectionMapStyles.address}>
                МКАД, 69-й километр, внешняя сторона, к19
              </h2>
            </div>
          </div>
          <div class={sectionMapStyles.BoxTwo}>
            <p class={sectionMapStyles.website}>HBH.ru©2022</p>
            <p class={sectionMapStyles.M}>M</p>
          </div>
        </div>
      </div>
    </>
  )
}
