import styles from "./styles.module.scss"
import s5image from "../../../assets/img/Section5image.jpg"
import s5imageForMobile from "../../../assets/img/Section5imageForMobile.jpg"
import "../../observer/IntersectionObserverComponent.module.scss"
import IntersectionObserverComponent from "~/components/observer"

export default function Foundation() {
  return (
    <>
      <div class={styles.containerMain}>
        <IntersectionObserverComponent>
          {(isAnimated) => (
            <div class={isAnimated ? "animated" : ""}>
              <div class={styles.Section5}>
                <img
                  src={s5image}
                  alt="foundation"
                  class={styles.foundationImage}
                />
                <img
                  src={s5imageForMobile}
                  alt="foundation"
                  class={styles.foundationImage2}
                />
                <div class={styles.sevenLines}>
                  <div class={styles.line} />
                  <div class={styles.line} />
                  <div class={styles.line} />
                  <div class={styles.line} />
                  <div class={styles.line} />
                  <div class={styles.line} />
                  <div class={styles.line} />
                </div>
                <p class={styles.foundationText}>фундамент</p>
                <ol class={styles.numberedList}>
                  <li>
                    Бетонные плиты (собственного производства) устанавливаются
                    на длинные ригели из гидротехнического бетона со спец
                    армированием.
                  </li>
                  <li>
                    Конструкцию держат монолитные бетонные сваи на титановых
                    крепежах. Данный сплав используется для строения космических
                    аппаратов.
                  </li>
                  <li>
                    На бетонной плите, внутри деревянной обвязки шириной 150 мм,
                    2 слоя теплоизоляционного материала (экструдированный
                    пенополистерол).
                  </li>
                  <li>
                    {" "}
                    Затем производится полусухая стяжка на немецком
                    оборудовании. В результате создаётся идеально ровное
                    предфинальное покрытие пола. На него кладётся финальное
                    половое покрытие.
                  </li>
                  <li>
                    Конструкция обладает высокой несущей способностью, большой
                    площадью опоры, что делает невозможным опрокидывание и
                    провалы грунта.
                  </li>
                </ol>
              </div>
            </div>
          )}
        </IntersectionObserverComponent>
      </div>
    </>
  )
}
