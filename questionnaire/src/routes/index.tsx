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
