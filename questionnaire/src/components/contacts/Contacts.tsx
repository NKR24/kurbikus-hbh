import { createSignal } from "solid-js"
import styles from "./contacts.module.scss"
import * as https from "https"


export default function Contacts() {

  const [openButton, setOpenButton] = createSignal(false)

  return (
    <>
      <div class={styles.contacts}>
        <div class={styles.containerMain}>
          <div class={styles.boxOne}>
            <div class={styles.logo}>
              <div class={styles.font} />
            </div>
          </div>
          <div class={styles.boxSecond}>
            <div class={styles.First}>
              <a href="https://instagram.com/hbh_barnhouse?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
                <button type={"button"} class={styles.instagram} onClick={openButton}>
                  <div class={styles.fontinsta}/>
                </button>
              </a>
            </div>
            <div class={styles.Second}>
              <a href="https://t.me/home_by_home" target="_blank" rel="noopener noreferrer">
                <button class={styles.telegram} onClick={openButton}>
                  <div class={styles.fontteleg}/>
                </button>
              </a>
            </div>
            <div class={styles.Third}>
              <a href="https://youtube.com/@homebyhome?si=eAfevs0OAnCSepoz" target="_blank" rel="noopener noreferrer">
                <button class={styles.youtube} onClick={openButton}>
                  <div class={styles.fontyoutube}/>
                </button>
              </a>
            </div>
          </div>
          <div class={styles.boxThird}>
            <div class={styles.phone}>
              <a class={styles.number} href="tel:+79854723509">8 985 472 35 09</a>
            </div>
            <p class={styles.address}>МКАД, 69-й километр, внешняя сторона, к19</p>
          </div>
        </div>
        <p class={styles.website}>HBH.ru©2022</p>
      </div>
    </>
  )
}