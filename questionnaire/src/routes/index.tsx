import { Title } from "solid-start"
import Navbar from "~/components/navbar"

import home1 from "../assets/img/home1.jpg"
import home2 from "../assets/img/home2.jpg"
import home3 from "../assets/img/home3.jpg"
import home4 from "../assets/img/home4.jpg"
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
    </div>
  )
}

function Section2() {
  return (
    <>
      <div class="section fonts">
        <div class="first-text">каталоги домов с ценами</div>
        <div class="blocks">
          <div class="block1">
            <img src={home1} alt="" />
            <h1 class="text">
              Площадь: от 90 м² <br />
              3 спальни, 1 санузел От <br />4 300 000 руб.
            </h1>
          </div>
          <div class="block1">
            <img src={home2} alt="" />
            <h1 class="text">
              Площадь: от 90 м² 3 спальни, <br />
              1 санузел От <br />4 600 000 руб.
            </h1>
          </div>
          <div class="block1">
            <img src={home3} alt="" />
            <h1 class="text">
              Площадь: от 110 м² 3 спальни, <br />1 санузел От <br /> 4 000 000
              руб.
            </h1>
          </div>
          <div class="block1">
            <img src={home4} alt="" />
            <h1 class="text">
              Площадь: от 110 м² 3 спальни, <br /> 1 санузел От <br /> 3 900 000
              руб.
            </h1>
          </div>
        </div>
      </div>
    </>
  )
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
