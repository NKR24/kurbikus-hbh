import { Title } from "solid-start"
import Navbar from "~/components/navbar"
import styles from "./index.module.scss"
import clsx from "clsx"
import mainHome from "../assets/img/home-main.jpg"

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
    </>
  )
}

function Section1() {
  return (
    <div class={styles.containerMain}>
      <div class={styles.containerSection}>
        <div class={styles.containerDesktop}>
          <div class={styles.containerFirst}>
            <div class={clsx(styles.box, styles.box1)}>
              <div class={clsx(styles.text, styles.text1large)}>
                <p>БарнХаус</p>
              </div>
              <div class={clsx(styles.text, styles.text1small)}>
                <p>В котором можно жить даже на крайнем севере</p>
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
            <img src={mainHome} class={styles.mainHomeImage} />
          </div>
        </div>
        <div class={styles.containerMobile}>
          <div class={clsx(styles.box, styles.MobileImage)}>
            <p class={styles.textMobileHome}>h1</p>
            {/* <img src={mainHome} class={styles.homeMobile} /> */}
          </div>
          <div class={clsx(styles.box, styles.MobileFisrt)}>
            <div class={clsx(styles.text, styles.MobTextFirstLarge)}>
              <p>ДВУХЭТАЖНЫЙ ДОМЗА 3,9 МЛН.</p>
            </div>
            <div class={clsx(styles.text, styles.MobTextFirstSmall)}>
              <p>Из ПРЕМИУМ материалов, за 2 месяца на вашем участке</p>
            </div>
          </div>
          <div class={clsx(styles.box, styles.MobileSecond)}>
            <div class={clsx(styles.text, styles.MobTextSecond)}>
              <svg
                class={styles.MobileButton}
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
              <p>смотри видео и приезжай на экскурсию</p>
            </div>
          </div>
          <div class={clsx(styles.box, styles.MobileThird)}>
            <div class={clsx(styles.text, styles.MobTextThird)}>
              <p>СОБСТВЕННОЕ ПРОИЗВОДСТВО В ПОДМОСКОВЬЕ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Section2() {
  return <></>
}

function Section3() {
  return <></>
}

function Section4() {
  return <></>
}

function Section5() {
  return <></>
}

function Section6() {
  return <></>
}

function Section7() {
  return <></>
}
