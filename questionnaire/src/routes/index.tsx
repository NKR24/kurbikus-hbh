import { Title } from "solid-start"
import Navbar from "~/components/navbar"
import "~/routes/index.css"
import home1 from "../assets/img/home1.jpg"
import home2 from "../assets/img/home2.jpg"
import home3 from "../assets/img/home3.jpg"
import home4 from "../assets/img/home4.jpg"

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
  return(
    <>
    <div class="first-section">
      <div class="onepiece">
        <div class="barnhouse">
          <h1>барнхаус</h1>
          <div class="barndescripton">
            <h2>В котором можно жить даже на крайнем севере</h2>
          </div>
        </div>
      </div>
      <div class="twopiece">
        <div class="descriptiontwo">
          <h3>на монолитном фундаменте за 60 дней</h3>
        </div>
      </div>
      <div class="threepiece">
        <div class="descriptionthree">
          <h4>гарантия 50 лет.</h4>
        </div>
      </div>
      <div class="fourpiece">
        <div class="descriptionfour">
          <h4>Ипотека без первоначального взноса</h4>
        </div>
      </div>
    </div>
    </>
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
