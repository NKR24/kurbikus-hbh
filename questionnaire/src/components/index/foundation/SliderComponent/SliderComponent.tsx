import { createSlider } from "solid-slider";

import styles from './styles.module.scss';
import Page3 from "~/components/index/foundation/page3"
import Page2 from "~/components/index/foundation/page2"
import Page1 from "~/components/index/foundation/page1"

import slide1 from "~/assets/img/foundation/mobile/1.png"
import slide2 from "~/assets/img/foundation/mobile/2.png"
import slide3 from "~/assets/img/foundation/mobile/3.png"
import clsx from "clsx"

export default function SliderComponent() {
  const [slider, { current, next, prev, moveTo }] = createSlider();
  return (<>
    <div class={styles.container} id="stages">
      <div class={styles.houses}>
        <img class={clsx(styles.slide1, current() == 0 ? styles.animation : styles.animationOff)} src={slide1} alt={"slide 1"} />
        <img class={clsx(styles.slide2, current() == 1 ? styles.animation : styles.animationOff)} src={slide2} alt={"slide 2"} />
        <img class={clsx(styles.slide3, current() == 2 ? styles.animation : styles.animationOff)} src={slide3} alt={"slide 3"} />
      </div>
      <div class={styles.lines}>
        <button class={current() == 0 ? styles.activeLine : styles.line} onClick={() => moveTo(0)}/>
        <button class={current() == 1 ? styles.activeLine : styles.line} onClick={() => moveTo(1)}/>
        <button class={current() == 2 ? styles.activeLine : styles.line} onClick={() => moveTo(2)}/>
      </div>
      <div class={styles.slider}>
        <div /*class={styles.slider}*/ ref={slider}>
          <div><Page1 /></div>
          <div><Page2 /></div>
          <div><Page3 /></div>
        </div>
      </div>
      <div class={current() != 2 ? styles.next : styles.disable} onClick={next}>
        <svg class={styles.arrow} width="70" height="135" viewBox="0 0 70 135" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M68 68L0.799988 1L1.50604 0.29184L68.7057 67.2914L68.7071 67.29L69.4142 67.9971L68.7071 68.7042L68.0014 67.9986L68 68ZM68 68L68.7027 68.7115L1.7027 134.887L1 134.175L68 68Z"
                fill="white" />
        </svg>
      </div>
      <div class={current() != 0 ? styles.prev : styles.disable} onClick={prev}>
          <svg class={styles.arrow} width="70" height="135" viewBox="0 0 70 135" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M2.21417 67.1785L69.4142 134.178L68.7081 134.887L1.50851 67.887L1.50708 67.8885L0.799988 67.1814L1.50708 66.4743L2.21274 67.1799L2.21417 67.1785ZM2.21417 67.1785L1.51144 66.467L68.5115 0.291847L69.2142 1.00332L2.21417 67.1785Z"
                fill="white" />
        </svg>
      </div>
    </div>
  </>);
}
