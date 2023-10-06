import { Title } from "solid-start"
import Navbar from "~/components/navbar"
import "./index.scss"

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
    <>
      <div class="container-main">
        <div class="container-section">
          <div class="box box-1">
            <div class="text text-1large">
              <p>БарнХаус</p>
            </div>
            <div class="text text-1small">
              <p>В котором можно жить даже на крайнем севере</p>
            </div>
          </div>
          <div class="box box-2">
            <div class="text text-2">
              <p>НА МОНОЛИТНОМ ФУНДАМЕНТЕ ЗА 60 ДНЕЙ </p>
            </div>
          </div>
          <div class="box box-3">
            <div class="text text-3">
              <p>ГАРАНТИЯ 50 лет.</p>
            </div>
          </div>
          <div class="box box-4">
            <div class="text text-4">
              <p>Ипотека без первоначального взноса</p>
            </div>
          </div>
        </div>
        <div class="container-image">
          <p>1</p>
        </div>
      </div>
    </>
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
