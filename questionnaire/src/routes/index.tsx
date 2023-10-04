import { Title } from "solid-start"
import Navbar from "~/components/navbar"
import "~/routes/index.css"

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
  return(
    <>
    </>
  )
}

function Section3() {
  return(
    <>
    </>
  )
}

function Section4() {
  return(
    <>
    </>
  )
}

function Section5() {
  return(
    <>
    </>
  )
}

function Section6() {
  return(
    <>
    </>
  )
}

function Section7() {
  return(
    <>
    </>
  )
}

