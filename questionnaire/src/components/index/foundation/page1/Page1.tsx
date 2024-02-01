import styles from "./styles.module.scss"
import stylesF from "~/components/index/foundation/styles.module.scss"
import pic1 from "~/assets/img/foundation/Section5image.jpg"
import clsx from "clsx"
export default function Page1() {

  return (
    <>
      <div class={styles.top}>
        <h1 class={clsx(stylesF.head, styles.head)}>фундамент</h1>
        <img class={styles.pic} src={pic1} alt={"foundation"} />
      </div>
      <div class={styles.text}>
        <ol class={stylesF.numberedList}>
          <li>
            Бетонные плиты (собственного производства) устанавливаются на
            длинные ригели из гидротехнического бетона со спец
            армированием.
          </li>
          <li>
            Конструкцию держат монолитные бетонные сваи на титановых
            крепежах. Данный сплав используется для строения космических
            аппаратов.
          </li>
          <li>
            На бетонной плите, внутри деревянной обвязки шириной 150 мм, 2
            слоя теплоизоляционного материала (экструдированный
            пенополистерол).
          </li>
          <li>
            Затем производится полусухая стяжка на немецком оборудовании.
            В результате создаётся идеально ровное предфинальное покрытие
            пола. На него кладётся финальное половое покрытие.
          </li>
          <li>
            Конструкция обладает высокой несущей способностью, большой
            площадью опоры, что делает невозможным опрокидывание и провалы
            грунта.
          </li>
        </ol>
      </div>
    </>
  )

}