import styles from "./styles.module.scss"
import { createSignal, Show } from "solid-js"
import clsx from "clsx"
import cubism from "../../assets/img/houseParameters/styles/one.png"
import chalet from "../../assets/img/houseParameters/styles/two.png"
import classic from "../../assets/img/houseParameters/styles/three.png"
import hightech from "../../assets/img/houseParameters/styles/four.png"
import storey from "../../assets/img/houseParameters/storeys/font.png"
import garage from "../../assets/img/houseParameters/garage/font.png"

enum HouseParametersTab {
  Style,
  Square,
  Storeys,
  Garage,
  Material,
}

export default function HouseParameters() {
  const [tab, setTab] = createSignal(HouseParametersTab.Style)

  function handleStyleClick() {
    setTab(HouseParametersTab.Style)
  }

  function handleSquareClick() {
    setTab(HouseParametersTab.Square)
  }

  function handleStoreysClick() {
    setTab(HouseParametersTab.Storeys)
  }

  function handleGarageClick() {
    setTab(HouseParametersTab.Garage)
  }

  function handleMaterialClick() {
    setTab(HouseParametersTab.Material)
  }

  function Slider() {
    const [sliderValue, setSliderValue] = createSignal(0)

    const handleSliderChange = (event: { target: { value: string } }) => {
      setSliderValue(Number(event.target.value))
    }

    return (
      <>
        <div class={styles.containerSlide}>
          <p class={styles.sliderText}>От {sliderValue()} до 250</p>
          <div class={styles.sliderNumbers}>
            <p class={styles.number}>45</p>
            <p class={styles.number}>90</p>
            <p class={styles.number}>135</p>
            <p class={styles.number}>175</p>
            <p class={styles.number}>250</p>
          </div>
          <input
            class={styles.slider}
            type="range"
            min="45"
            max="250"
            value={sliderValue()}
            onInput={handleSliderChange}
            id="myRange"
            style={{
              width: "100%",
              appearance: "none",
              background: `url('data:image/svg+xml;utf8,<svg width="790" height="26" viewBox="0 0 790 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 12.7037H787.63" stroke="black" stroke-width="2"/><line x1="1" y1="4.37115e-08" x2="0.999999" y2="25.4074" stroke="black" stroke-width="2"/><line x1="196.637" y1="4.34294e-08" x2="196.637" y2="25.4074" stroke="black" stroke-width="2"/><line x1="394.815" y1="4.34294e-08" x2="394.815" y2="25.4074" stroke="black" stroke-width="2"/><line x1="590.452" y1="4.34294e-08" x2="590.452" y2="25.4074" stroke="black" stroke-width="2"/><line x1="788.63" y1="4.34294e-08" x2="788.63" y2="25.4074" stroke="black" stroke-width="2"/></svg>') center center no-repeat`,
              "background-size": "cover",
            }}
          />
        </div>
      </>
    )
  }

  return (
    <>
      <div class={styles.containerMain}>
        <div class={styles.containerSection}>
          <div class={styles.buttons}>
            <button
              onClick={handleStyleClick}
              class={clsx(styles.parameterTab, {
                [styles.parameterTabSelected]:
                  tab() === HouseParametersTab.Style,
              })}
            >
              <span class={styles.textButton}>Стиль дома</span>
            </button>
            <button
              onClick={handleSquareClick}
              class={clsx(styles.parameterTab, {
                [styles.parameterTabSelected]:
                  tab() === HouseParametersTab.Square,
              })}
            >
              <span class={styles.textButton}>площадь</span>
            </button>
            <button
              onClick={handleStoreysClick}
              class={clsx(styles.parameterTab, {
                [styles.parameterTabSelected]:
                  tab() === HouseParametersTab.Storeys,
              })}
            >
              <span class={styles.textButton}>Этажность</span>
            </button>
            <button
              onClick={handleGarageClick}
              class={clsx(styles.parameterTab, {
                [styles.parameterTabSelected]:
                  tab() === HouseParametersTab.Garage,
              })}
            >
              <span class={styles.textButton}>гараж</span>
            </button>
            <button
              onClick={handleMaterialClick}
              class={clsx(styles.parameterTab, {
                [styles.parameterTabSelected]:
                  tab() === HouseParametersTab.Material,
              })}
            >
              <span class={styles.textButton}>материал</span>
            </button>
          </div>
          <Show when={tab() === HouseParametersTab.Style}>
            <div class={styles.container}>
              <h1 class={styles.textMain}>стиль дома?</h1>
              <div class={styles.box}>
                <div class={styles.partOne}>
                  <div class={styles.item}>
                    <img src={cubism} alt="home" />
                    <button class={styles.choiceTab}>
                      <span>кубизм</span>
                    </button>
                  </div>
                  <div class={styles.item}>
                    <img src={chalet} alt="home" />
                    <button class={styles.choiceTab}>
                      <span>шале</span>
                    </button>
                  </div>
                  <div class={styles.item}>
                    <img src={classic} alt="home" />
                    <button class={styles.choiceTab}>
                      <span>классика</span>
                    </button>
                  </div>
                  <div class={styles.item}>
                    <img src={hightech} alt="home" />
                    <button class={styles.choiceTab}>
                      <span>хай-тек</span>
                    </button>
                  </div>
                </div>
                <div class={styles.partTwo}></div>
              </div>
            </div>
          </Show>
          <Show when={tab() === HouseParametersTab.Square}>
            <div class={styles.container}>
              <h1 class={styles.textMain}>площадь?</h1>
              <div class={styles.box}>
                <Slider />
              </div>
            </div>
          </Show>
          <Show when={tab() === HouseParametersTab.Storeys}>
            <div class={styles.container}>
              <h1 class={styles.textMain}>этажность?</h1>
              <div class={styles.storeys}>
                <img src={storey} alt="stoyer" />
                <div class={styles.buttonStoreys}>
                  <button class={styles.buttonOne}>
                    <span>1</span>
                  </button>
                  <button class={styles.buttonTwo}>
                    <span>2</span>
                  </button>
                  <button class={styles.buttonSelectAll}>
                    <span>выбрать все</span>
                  </button>
                </div>
              </div>
            </div>
          </Show>
          <Show when={tab() === HouseParametersTab.Garage}>
            <div class={styles.container}>
              <h1 class={styles.textMain}>гараж?</h1>
              <img src={garage} alt="garage" />
              <div class={styles.garage}>
                <button class={styles.withGarage}>
                  <span>с гаражом</span>
                </button>
                <button class={styles.withoutGarage}>
                  <span>без гаража</span>
                </button>
                <button class={styles.buttonSelectAll}>
                  <span>выбрать все</span>
                </button>
              </div>
            </div>
          </Show>
          <Show when={tab() === HouseParametersTab.Material}>
            <div class={styles.container}>
              <h1 class={styles.textMain}>материал?</h1>
            </div>
          </Show>
        </div>
      </div>
    </>
  )
}
