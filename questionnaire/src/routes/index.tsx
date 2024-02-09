import { Title } from "solid-start"
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
import Theme from "~/components/index/Theme/Theme"
import Barnhouse from "~/components/index/barnhouse"
import { createSignal, onMount, Show } from "solid-js"

export default function Home() {
  const [isRendered, setIsRendered] = createSignal(false)

  onMount(() => {
    setTimeout(() => {
      setIsRendered(true)
    }, 7500)
  })

  return (
    <>
      <Title>Опросник</Title>
      <Theme />
      <Show when={isRendered()}>
        <Catalog />
        <Whyus />
        <Foundation />
        <Demonstration />
        <Interview />
        <Contacts />
      </Show>
    </>
  )
}
