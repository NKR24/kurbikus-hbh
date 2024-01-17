import styles from "./styles.module.scss"
import "../../observer/IntersectionObserverComponent.module.scss"
import IntersectionObserverComponent from "~/components/observer"

export default function Consultation() {
  return (
    <>
      <div class={styles.containerMain}>
        <IntersectionObserverComponent>
          {(isAnimated) => (
            <div class={isAnimated ? "animated" : ""}>
              <div class={styles.containerSection}>
                <div class={styles.boxFirst}>
                  <h1 class={styles.textMain}>Консультация</h1>
                  <p class={styles.textNoMain}>
                    Оставьте свои контактные данные и мы обязательно с вами
                    свяжемся
                  </p>
                  <div class={styles.forminputmaterial}>
                    <input
                      type={"text"}
                      name={"username"}
                      id={"username"}
                      placeholder={"имя*"}
                      autocomplete={"on"}
                      class={styles.formcontrolmaterial}
                      required
                    />
                  </div>
                  <div class={styles.forminputmaterial}>
                    <input
                      type={"text"}
                      name={"mail"}
                      id={"mail"}
                      placeholder={"почта или номер телефона*"}
                      autocomplete={"on"}
                      class={styles.formcontrolmaterial}
                      required
                    />
                  </div>
                  <div class={styles.forminputmaterial}>
                    <input
                      type={"text"}
                      name={"message"}
                      id={"message"}
                      placeholder={"Текст сообщения"}
                      autocomplete={"on"}
                      class={styles.formcontrolmaterial}
                      required
                    />
                  </div>
                </div>
                <div class={styles.boxSecond}>
                  <p class={styles.textLow}>
                    нажимая на кнопку «Отправить» вы даете согласие на обработку
                    персональных данных
                  </p>
                  <button class={styles.button}>
                    <span class={styles.fontButton}>отправить</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </IntersectionObserverComponent>
      </div>
    </>
  )
}
