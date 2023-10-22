import { Title } from "solid-start"
import Navbar from "~/components/navbar"

import home1 from "../assets/img/home1.jpg"
import home3 from "../assets/img/home2.jpg"
import home2 from "../assets/img/home3.jpg"
import home4 from "../assets/img/home4.jpg"
import clsx from "clsx"
import mainHome from "../assets/img/home-main.jpg"
import section1Styles from "./index/section1.module.scss"
import section2Styles from "./index/section2.module.scss"
import section3Styles from "./index/section3.module.scss"
import section4Styles from "./index/section4.module.scss"
import section5Styles from "./index/section5.module.scss"
import section6Styles from "./index/section6.module.scss"
import PDF from "../assets/img/PDF.png"
import foundation from "../assets/img/foundation.jpg"

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
      <Section10 />
      <Section11 />
      <Section12 />
      <Section13 />
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
            <img src={mainHome} class={section1Styles.mainHomeImage} alt={""} />
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
              <div class={section3Styles.buttonStart}>
                <div class={section3Styles.textButton}>
                  <p>начать</p>
                </div>
              </div>
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
    <div class={section4Styles.containerMain}>
      <div class={section4Styles.containerSection}>
        <div class={section4Styles.containerDesktop}>
          <div class={clsx(section4Styles.box, section4Styles.boxFirst)}>
            <p class={section4Styles.textMain}>ПОЧЕМУ МЫ?</p>
          </div>
          <div class={clsx(section4Styles.box, section4Styles.boxSecond)}>
            <p>.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Section5() {
  return (
    <>
      <div class={section5Styles.section5}>
        <div class={section5Styles.foundationText}>фундамент</div>
        <img src={foundation} alt="foundation" class={section5Styles.foundationPic} />
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
                <div class={clsx(section6Styles.box,section6Styles.boxFirst)}>
                  <p class={clsx(section6Styles.text, section6Styles.textFirst)}>наши дома</p>
                </div>
                <div class={clsx(section6Styles.box,section6Styles.boxSecond)}>
                  <p class={clsx(section6Styles.text, section6Styles.textSecond)}>интерьер</p>
                </div>
                <div class={clsx(section6Styles.box,section6Styles.boxThird)}>
                  <p class={clsx(section6Styles.text, section6Styles.textThird)}>стройка</p>
                </div>
              </div>
              <div class={section6Styles.partSecond}>
                  <div class={clsx(section6Styles.child, section6Styles.OneThreeFive)}>
                    <p class={section6Styles.textLow}>наши дома</p>
                    <p class={section6Styles.textLarge}>дом по проекту h1</p>
                  </div>
                  <div class={clsx(section6Styles.child, section6Styles.Second)}>
                    <p class={section6Styles.textLow}>наши дома</p>
                    <p class={section6Styles.textLarge}>дом по проекту h1</p>
                  </div>
                  <div class={clsx(section6Styles.child, section6Styles.OneThreeFive)}>
                    <p class={section6Styles.textLow}>наши дома</p>
                    <p class={section6Styles.textLarge}>дом по проекту h1</p>
                  </div>
                  <div class={clsx(section6Styles.child, section6Styles.FourSixEight)}>
                    <p class={section6Styles.textLow}>наши дома</p>
                    <p class={section6Styles.textLarge}>дом по проекту h1</p>
                  </div>
                  <div class={clsx(section6Styles.child, section6Styles.OneThreeFive)}>
                    <p class={section6Styles.textLow}>наши дома</p>
                    <p class={section6Styles.textLarge}>дом по проекту h1</p>
                  </div>
                  <div class={clsx(section6Styles.child, section6Styles.FourSixEight)}>
                    <p class={section6Styles.textLow}>наши дома</p>
                    <p class={section6Styles.textLarge}>дом по проекту h1</p>
                  </div>
                  <div class={clsx(section6Styles.target, section6Styles.Seven)}>
                    <p class={section6Styles.textLow}>наши дома</p>
                    <p class={section6Styles.textLarge}>дом по проекту h1</p>
                  </div>
                  <div class={clsx(section6Styles.child, section6Styles.FourSixEight)}>
                    <p class={section6Styles.textLow}>наши дома</p>
                    <p class={section6Styles.textLarge}>дом по проекту h1</p>
                  </div>
              </div>
            </div>
            <div class={section6Styles.containerMobile}>
              <div class={section6Styles.mobileOne}>
                <div class={clsx(section6Styles.boxMobile,section6Styles.mobFirst)}>
                  <p class={clsx(section6Styles.textMobile, section6Styles.textMobFirst)}>наши дома</p>
                </div>
                <div class={clsx(section6Styles.boxMobile,section6Styles.mobSecond)}>
                  <p class={clsx(section6Styles.textMobile, section6Styles.textMobSecond)}>интерьер</p>
                </div>
                <div class={clsx(section6Styles.boxMobile,section6Styles.mobThird)}>
                  <p class={clsx(section6Styles.textMobile, section6Styles.textMobThird)}>стройка</p>
                </div>
              </div>
              <div class={section6Styles.mobileTwo}>
                <div class={clsx(section6Styles.childMobile, section6Styles.mobOne)}>
                  <p class={section6Styles.textLowMobile}>наши дома</p>
                </div>
                <div class={clsx(section6Styles.childMobile, section6Styles.mobTwo)}>
                  <p class={section6Styles.textLowMobile}>наши дома</p>
                </div>
                <div class={clsx(section6Styles.childMobile, section6Styles.mobThree)}>
                  <p class={section6Styles.textLowMobile}>наши дома</p>
                </div>
                <div class={clsx(section6Styles.childMobile, section6Styles.mobFour)}>
                  <p class={section6Styles.textLowMobile}>наши дома</p>
                </div>
                <div class={clsx(section6Styles.childMobile, section6Styles.mobFive)}>
                  <p class={section6Styles.textLowMobile}>наши дома</p>
                </div>
                <div class={clsx(section6Styles.childMobile, section6Styles.mobSix)}>
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
  return <></>
}

function Section8() {
  return <></>
}

function Section9() {
  return <></>
}

function Section10() {
  return <></>
}

function Section11() {
  return <></>
}

function Section12() {
  return <></>
}

function Section13() {
  return <></>
}


