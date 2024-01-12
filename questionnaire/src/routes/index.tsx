import { Title } from "solid-start"
import Navbar from "~/components/index/navbar"
import Barnhouse from "~/components/index/barnhouse"
import Catalog from "~/components/index/catalog"
import Questions from "~/components/index/questions"
import Whyus from "~/components/index/whyus/Whyus"
import Foundation from "~/components/index/foundation"
import Demonstration from "~/components/index/demonstration"
import Interview from "~/components/index/interview"
import Excursion from "~/components/index/excursion"
import Consultation from "~/components/index/consultation"
import Accordion from "~/components/index/accordion"
import Pros from "~/components/index/pros"
import Aboutus from "~/components/index/Aboutus"
import Contacts from "~/components/index/contacts"

export default function Home() {
  return (
    <>
      <Title>Опросник</Title>
      <Navbar />
      <Barnhouse />
      <Catalog />
      <Questions />
      {/*<Whyus />*/}
      <Foundation />
      <Demonstration />
      <Interview />
      <Excursion />
      {/*<Consultation />*/}
      <Accordion />
      {/*<Pros />*/}
      <Aboutus />
      <Contacts />
    </>
  )
}
