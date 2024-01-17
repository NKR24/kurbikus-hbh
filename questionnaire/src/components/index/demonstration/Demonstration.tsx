import { createSignal, Show } from "solid-js"
import clsx from "clsx"
import styles from "./styles.module.scss"

enum HouseDemonstration {
  Houses,
  Interior,
  Construction,
}

export default function Demonstration() {
  const [tab, setTab] = createSignal(HouseDemonstration.Houses)

  function handleClickHouses() {
    setTab(HouseDemonstration.Houses)
  }

  function handleClickInterior() {
    setTab(HouseDemonstration.Interior)
  }

  function handleClickConstruction() {
    setTab(HouseDemonstration.Construction)
  }

  return (
    <>
      <main class={styles.main}>
        <div class={styles.section}>
          <section class={styles.first}>
            <button
              onClick={handleClickHouses}
              class={clsx(styles.tab, {
                [styles.tabSelected]: tab() === HouseDemonstration.Houses,
              })}
            >
              наши дома
            </button>
            <button
              onClick={handleClickInterior}
              class={clsx(styles.tab, {
                [styles.tabSelected]: tab() === HouseDemonstration.Interior,
              })}
            >
              интерьер
            </button>
            <button
              onClick={handleClickConstruction}
              class={clsx(styles.tab, {
                [styles.tabSelected]: tab() === HouseDemonstration.Construction,
              })}
            >
              стройка
            </button>
          </section>
          <section>
            <Show when={tab() === HouseDemonstration.Houses}>
              <figure class={styles.table}>
                <div class={clsx(styles.child, styles.housesOne)}>
                  <text class={styles.text}>наши дома</text>
                  <h2 class={styles.bald}>дом по проекту h1</h2>
                </div>
                <div class={clsx(styles.child, styles.housesTwo)}>
                  <text class={styles.text}>наши дома</text>
                  <h2 class={styles.bald}>дом по проекту h1</h2>
                </div>
                <div class={clsx(styles.child, styles.housesThree)}>
                  <text class={styles.text}>наши дома</text>
                  <h2 class={styles.bald}>дом по проекту h1</h2>
                </div>
                <div class={clsx(styles.child, styles.housesFour)}>
                  <text class={styles.text}>наши дома</text>
                  <h2 class={styles.bald}>дом по проекту h1</h2>
                </div>
                <div class={clsx(styles.child, styles.housesFive)}>
                  <text class={styles.text}>наши дома</text>
                  <h2 class={styles.bald}>дом по проекту h1</h2>
                </div>
                <div class={clsx(styles.child, styles.housesSix)}>
                  <text class={styles.text}>наши дома</text>
                  <h2 class={styles.bald}>дом по проекту h1</h2>
                </div>
                <div class={styles.target}>
                  <text class={styles.text}>наши дома</text>
                  <h2 class={styles.bald}>дом по проекту h3</h2>
                </div>
                <div class={clsx(styles.child, styles.housesEight)}>
                  <text class={styles.text}>наши дома</text>
                  <h2 class={styles.bald}>дом по проекту h1</h2>
                </div>
              </figure>
            </Show>
            <Show when={tab() === HouseDemonstration.Interior}>
              <figure class={styles.table}>
                <div class={clsx(styles.child, styles.One)}>
                  <text class={styles.text}>наши дома</text>
                </div>
                <div class={clsx(styles.child, styles.Two)}>
                  <text class={styles.text}>наши дома</text>
                </div>
                <div class={clsx(styles.child, styles.Three)}>
                  <text class={styles.text}>наши дома</text>
                </div>
                <div class={clsx(styles.child, styles.Four)}>
                  <text class={styles.text}>наши дома</text>
                </div>
                <div class={clsx(styles.child, styles.Five)}>
                  <text class={styles.text}>наши дома</text>
                </div>
                <div class={clsx(styles.child, styles.Six)}>
                  <text class={styles.text}>наши дома</text>
                </div>
                <div class={clsx(styles.child, styles.Seven)}>
                  <text class={styles.text}>наши дома</text>
                </div>
                <div class={clsx(styles.child, styles.Eight)}>
                  <text class={styles.text}>наши дома</text>
                </div>
                <div class={clsx(styles.child, styles.Nine)}>
                  <text class={styles.text}>наши дома</text>
                </div>
              </figure>
            </Show>
            <Show when={tab() === HouseDemonstration.Construction}>
              <figure class={styles.table}>
                <div class={clsx(styles.child, styles.First)}>
                  <text class={styles.text}>наши дома</text>
                </div>
                <div class={clsx(styles.child, styles.Second)}>
                  <text class={styles.text}>наши дома</text>
                </div>
                <div class={clsx(styles.child, styles.Third)}>
                  <text class={styles.text}>наши дома</text>
                </div>
                <div class={clsx(styles.child, styles.Fourth)}>
                  <text class={styles.text}>наши дома</text>
                </div>
                <div class={clsx(styles.child, styles.Fifth)}>
                  <text class={styles.text}>наши дома</text>
                </div>
                <div class={clsx(styles.child, styles.Sixth)}>
                  <text class={styles.text}>наши дома</text>
                </div>
                <div class={clsx(styles.child, styles.Seventh)}>
                  <text class={styles.text}>наши дома</text>
                </div>
                <div class={clsx(styles.child, styles.Eights)}>
                  <text class={styles.text}>наши дома</text>
                </div>
                <div class={clsx(styles.child, styles.Ninth)}>
                  <text class={styles.text}>наши дома</text>
                </div>
              </figure>
            </Show>
          </section>
        </div>
      </main>
    </>
  )
}
