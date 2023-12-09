import styles from "./styles.module.scss"
import { createSignal, Show } from "solid-js"
import clsx from "clsx"
import cubism from "../../assets/img/houseParameters/styles/one.png"
import classic from "../../assets/img/houseParameters/styles/three.png"
import hightech from "../../assets/img/houseParameters/styles/four.png"
import storey from "../../assets/img/houseParameters/storeys/font.png"
import garage from "../../assets/img/houseParameters/garage/font.png"
import wood from "../../assets/img/houseParameters/material/one.png"
import glue from "../../assets/img/houseParameters/material/two.png"
import frame from "../../assets/img/houseParameters/material/three.png"
import ceramic from "../../assets/img/houseParameters/material/four.png"
import brick from "../../assets/img/houseParameters/material/five.png"
import { A } from "solid-start"

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
    const [sliderValue, setSliderValue] = createSignal(45)

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
          />
        </div>
      </>
    )
  }

  return (
    <>
      <div class={styles.buttonClose}>
        <A href="../index.tsx">
          <button class={styles.closeButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
            >
              <line
                x1="18.9976"
                x2="18.9976"
                y2="37.4943"
                stroke="black"
                stroke-width="2"
              />
              <line
                y1="18.4971"
                x2="37.4943"
                y2="18.4971"
                stroke="black"
                stroke-width="2"
              />
            </svg>
          </button>
        </A>
      </div>
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
                  <div class={clsx(styles.item)}>
                    <img src={cubism} alt="home" />
                    <button class={styles.choiceTab}>
                      <span>кубизм</span>
                    </button>
                  </div>
                  <div class={styles.item}>
                    <div class={styles.chaletItem} />
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
                <div class={styles.partTwo}>
                  <button class={styles.buttonSelectAll}>
                    <span>выбрать все</span>
                  </button>
                </div>
              </div>
            </div>
          </Show>
          <Show when={tab() === HouseParametersTab.Square}>
            <div class={styles.container}>
              <h1 class={styles.textMain}>площадь?</h1>
              <div class={styles.boxSquare}>
                <Slider />
                <button class={styles.buttonSelectAll}>
                  <span>выбрать все</span>
                </button>
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
              <div class={styles.boxMaterials}>
                <div class={styles.material}>
                  <img src={wood} alt="material" />
                  <button class={styles.woodButton}>
                    <span>деревянный каркас</span>
                  </button>
                </div>
                <div class={styles.material}>
                  <img src={glue} alt="material" />
                  <button class={styles.glueButton}>
                    <span>клееный брус</span>
                  </button>
                </div>
                <div class={styles.material}>
                  <img src={frame} alt="material" />
                  <button class={styles.frameButton}>
                    <span>каркас</span>
                  </button>
                </div>
                <div class={styles.material}>
                  <img src={ceramic} alt="material" />
                  <button class={styles.ceramicButton}>
                    <span>керамоблок</span>
                  </button>
                </div>
                <div class={styles.material}>
                  <img src={brick} alt="material" />
                  <button class={styles.brickButton}>
                    <span>кирпич</span>
                  </button>
                </div>
                <button class={styles.buttonSelectAll}>
                  <span>выбрать все</span>
                </button>
              </div>
            </div>
          </Show>
        </div>
      </div>
    </>
  )
}
