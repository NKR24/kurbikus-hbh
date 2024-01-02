import styles from "./styles.module.scss"
import { createSignal, Show } from "solid-js"
import clsx from "clsx"

enum HouseDemonstrationTab {
  Houses,
  Interior,
  Construction,
}

const [tab, setTab] = createSignal(HouseDemonstrationTab.Houses)

function handleHousesClick() {
  setTab(HouseDemonstrationTab.Houses)
}

function handleInteriorClick() {
  setTab(HouseDemonstrationTab.Interior)
}

function handleConstructionClick() {
  setTab(HouseDemonstrationTab.Construction)
}

export default function Demonstration() {
  return (
    <>
      <div class={styles.containerMain}>
        <div class={styles.containerSection}>
          <div class={styles.containerDesktop}>
            <div class={styles.partFirst}>
              <button
                onClick={handleHousesClick}
                class={clsx(styles.houseTab, {
                  [styles.houseTabSelected]:
                    tab() === HouseDemonstrationTab.Houses,
                })}
              >
                <span class={clsx(styles.text)}>наши дома</span>
              </button>
              <button
                onClick={handleInteriorClick}
                class={clsx(styles.houseTab, {
                  [styles.houseTabSelected]:
                    tab() === HouseDemonstrationTab.Interior,
                })}
              >
                <span class={clsx(styles.text)}>интерьер</span>
              </button>
              <button
                onClick={handleConstructionClick}
                class={clsx(styles.houseTab, {
                  [styles.houseTabSelected]:
                    tab() === HouseDemonstrationTab.Construction,
                })}
              >
                <span class={clsx(styles.text)}>стройка</span>
              </button>
            </div>
            <Show when={tab() === HouseDemonstrationTab.Houses}>
              <div class={styles.partSecond}>
                <div class={clsx(styles.child, styles.OneThreeFive)}>
                  <p class={styles.textLow}>наши дома</p>
                  <p class={styles.textLarge}>дом по проекту h1</p>
                </div>
                <div class={clsx(styles.child, styles.Second)}>
                  <p class={styles.textLow}>наши дома</p>
                  <p class={styles.textLarge}>дом по проекту h1</p>
                </div>
                <div class={clsx(styles.child, styles.OneThreeFive)}>
                  <p class={styles.textLow}>наши дома</p>
                  <p class={styles.textLarge}>дом по проекту h1</p>
                </div>
                <div class={clsx(styles.child, styles.FourSixEight)}>
                  <p class={styles.textLow}>наши дома</p>
                  <p class={styles.textLarge}>дом по проекту h1</p>
                </div>
                <div class={clsx(styles.child, styles.OneThreeFive)}>
                  <p class={styles.textLow}>наши дома</p>
                  <p class={styles.textLarge}>дом по проекту h1</p>
                </div>
                <div class={clsx(styles.child, styles.FourSixEight)}>
                  <p class={styles.textLow}>наши дома</p>
                  <p class={styles.textLarge}>дом по проекту h1</p>
                </div>
                <div class={clsx(styles.target, styles.Seven)}>
                  <p class={styles.textLow}>наши дома</p>
                  <p class={styles.textLarge}>дом по проекту h1</p>
                </div>
                <div class={clsx(styles.child, styles.FourSixEight)}>
                  <p class={styles.textLow}>наши дома</p>
                  <p class={styles.textLarge}>дом по проекту h1</p>
                </div>
              </div>
            </Show>
            <Show when={tab() === HouseDemonstrationTab.Interior}>
              <div class={styles.table}>
                <div class={clsx(styles.tableItem, styles.interiorFirst)}>
                  <p class={styles.textTable}>наши дома</p>
                </div>
                <div class={clsx(styles.tableItem, styles.interiorSecond)}>
                  <p class={styles.textTable}>наши дома</p>
                </div>
                <div class={clsx(styles.tableItem, styles.interiorThird)}>
                  <p class={styles.textTable}>наши дома</p>
                </div>
                <div class={clsx(styles.tableItem, styles.interiorFourth)}>
                  <p class={styles.textTable}>наши дома</p>
                </div>
                <div class={clsx(styles.tableItem, styles.interiorFifth)}>
                  <p class={styles.textTable}>наши дома</p>
                </div>
                <div class={clsx(styles.tableItem, styles.interiorSixth)}>
                  <p class={styles.textTable}>наши дома</p>
                </div>
                <div class={clsx(styles.tableItem, styles.interiorSeventh)}>
                  <p class={styles.textTable}>наши дома</p>
                </div>
                <div class={clsx(styles.tableItem, styles.interiorEighth)}>
                  <p class={styles.textTable}>наши дома</p>
                </div>
                <div class={clsx(styles.tableItem, styles.interiorNinth)}>
                  <p class={styles.textTable}>наши дома</p>
                </div>
              </div>
            </Show>
            <Show when={tab() === HouseDemonstrationTab.Construction}>
              <div class={styles.table}>
                <div class={clsx(styles.tableItem, styles.constructionFirst)}>
                  <p class={styles.textTable}>Наши дома</p>
                </div>
                <div class={clsx(styles.tableItem, styles.constructionSecond)}>
                  <p class={styles.textTable}>Наши дома</p>
                </div>
                <div class={clsx(styles.tableItem, styles.constructionThird)}>
                  <p class={styles.textTable}>Наши дома</p>
                </div>
                <div class={clsx(styles.tableItem, styles.constructionFourth)}>
                  <p class={styles.textTable}>Наши дома</p>
                </div>
                <div class={clsx(styles.tableItem, styles.constructionFifth)}>
                  <p class={styles.textTable}>Наши дома</p>
                </div>
                <div class={clsx(styles.tableItem, styles.constructionSixth)}>
                  <p class={styles.textTable}>Наши дома</p>
                </div>
                <div class={clsx(styles.tableItem, styles.constructionSeventh)}>
                  <p class={styles.textTable}>Наши дома</p>
                </div>
                <div class={clsx(styles.tableItem, styles.constructionEighth)}>
                  <p class={styles.textTable}>Наши дома</p>
                </div>
                <div class={clsx(styles.tableItem, styles.constructionNinth)}>
                  <p class={styles.textTable}>Наши дома</p>
                </div>
              </div>
            </Show>
          </div>
          <div class={styles.containerMobile}>
            <div class={styles.mobileOne}>
              <button
                class={clsx(styles.houseTabMobile, {
                  [styles.houseTabMobileSelected]:
                    tab() === HouseDemonstrationTab.Houses,
                })}
                onClick={handleHousesClick}
              >
                <span class={clsx(styles.textMobile)}>наши дома</span>
              </button>
              <button
                class={clsx(styles.houseTabMobile, {
                  [styles.houseTabMobileSelected]:
                    tab() === HouseDemonstrationTab.Interior,
                })}
                onClick={handleInteriorClick}
              >
                <span class={clsx(styles.textMobile)}>интерьер</span>
              </button>
              <button
                class={clsx(styles.houseTabMobile, {
                  [styles.houseTabMobileSelected]:
                    tab() === HouseDemonstrationTab.Construction,
                })}
                onClick={handleConstructionClick}
              >
                <span class={clsx(styles.textMobile)}>стройка</span>
              </button>
            </div>
            <Show when={tab() === HouseDemonstrationTab.Houses}>
              <div class={styles.tableMobile}>
                <div class={clsx(styles.itemMobile, styles.houseMobOne)}>
                  <p class={styles.textLowMobile}>наши дома</p>
                  <p class={styles.textHomeLow}>дом по проекту h1</p>
                </div>
                <div class={clsx(styles.itemMobile, styles.houseMobTwo)}>
                  <p class={styles.textLowMobile}>наши дома</p>
                  <p class={styles.textHomeLow}>дом по проекту h1</p>
                </div>
                <div class={clsx(styles.itemMobile, styles.houseMobThree)}>
                  <p class={styles.textLowMobile}>наши дома</p>
                  <p class={styles.textHomeLow}>дом по проекту h1</p>
                </div>
                <div class={clsx(styles.itemMobile, styles.houseMobFour)}>
                  <p class={styles.textLowMobile}>наши дома</p>
                  <p class={styles.textHomeLow}>дом по проекту h1</p>
                </div>
                <div class={clsx(styles.itemMobileLarge, styles.houseMobFive)}>
                  <p class={styles.textLowMobile}>наши дома</p>
                </div>
              </div>
            </Show>
            <Show when={tab() === HouseDemonstrationTab.Interior}>
              <div class={styles.tableInteriorMobile}>
                <div class={clsx(styles.itemMobile, styles.interiorMobOne)}>
                  <p class={styles.textLowMobile}>наши дома</p>
                </div>
                <div class={clsx(styles.itemMobile, styles.interiorMobTwo)}>
                  <p class={styles.textLowMobile}>наши дома</p>
                </div>
                <div class={clsx(styles.itemMobile, styles.interiorMobThree)}>
                  <p class={styles.textLowMobile}>наши дома</p>
                </div>
                <div class={clsx(styles.itemMobile, styles.interiorMobFour)}>
                  <p class={styles.textLowMobile}>наши дома</p>
                </div>
                <div class={clsx(styles.itemMobile, styles.interiorMobFive)}>
                  <p class={styles.textLowMobile}>наши дома</p>
                </div>
                <div class={clsx(styles.itemMobile, styles.interiorMobSix)}>
                  <p class={styles.textLowMobile}>наши дома</p>
                </div>
              </div>
            </Show>
            <Show when={tab() === HouseDemonstrationTab.Construction}>
              <div class={styles.tableMobile}>
                <div class={clsx(styles.itemMobile, styles.constructionMobOne)}>
                  <p class={styles.textLowMobile}>наши дома</p>
                </div>
                <div class={clsx(styles.itemMobile, styles.constructionMobTwo)}>
                  <p class={styles.textLowMobile}>наши дома</p>
                </div>
                <div
                  class={clsx(styles.itemMobile, styles.constructionMobThree)}
                >
                  <p class={styles.textLowMobile}>наши дома</p>
                </div>
                <div
                  class={clsx(styles.itemMobile, styles.constructionMobFour)}
                >
                  <p class={styles.textLowMobile}>наши дома</p>
                </div>
                <div
                  class={clsx(
                    styles.itemMobileLarge,
                    styles.constructionMobFive,
                  )}
                />
              </div>
            </Show>
          </div>
        </div>
      </div>
    </>
  )
}
