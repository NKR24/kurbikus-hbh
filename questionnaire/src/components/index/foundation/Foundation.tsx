import styles from "./styles.module.scss"
import foundation from "~/assets/img/Section5image.jpg"
import frame from "~/components/index/foundation/frame.png"
import window from "~/components/index/foundation/window.png"
import { createSlider } from "solid-slider"

export default function Foundation() {
  const [slider] = createSlider()

  return (
    <>
      <div class={styles.containerMain}>
        <div class={styles.Section5}>
          <div ref={slider} class={styles.slider}>
            <div class={styles.firstSlide} style={{ width: "100%" }}>
              <p class={styles.foundationText}>фундамент</p>
              <img src={foundation} alt="frame" />
              <div class={styles.sevenLines}>
                <div class={styles.line} />
                <div class={styles.line} />
                <div class={styles.line} />
                <div class={styles.line} />
                <div class={styles.line} />
                <div class={styles.line} />
                <div class={styles.line} />
              </div>
              <ol class={styles.numberedList}>
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
                  {" "}
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
            <div class={styles.secondSlide}>
              <p class={styles.foundationText}>
                окна/ <br />
                стеклопакеты
              </p>
              <img src={window} alt="frame" />
              <ol class={styles.numberedList}>
                <li>
                  Качественные энергоэффективные стеклопакеты (3 стекла, 2
                  камеры) KBE Expert с ламинированным профилем 70 мм.
                </li>
                <li>
                  Профиль позволяют удерживать тепло в холодный период, а в
                  жаркий день не нагревается, создаётся комфортная температура.
                </li>
                <li>
                  Самый толстый стеклопакет из стандартных вариантов - 42 мм.
                </li>
                <li>
                  Немецкая фурнитура фирмы ROTO. Работает чётко, тактильно
                  приятна рукам.
                </li>
              </ol>
            </div>
            <div class={styles.thirdSlide}>
              <p class={styles.foundationText}>
                каркас/ <br />
                утеплитель
              </p>
              <img src={frame} alt="window" />
              <text class={styles.frameText}>
                Домокомплект - выдерживает сильные морозы. Поставляется с завода
                не утепленным. Ширина 4-5 метров.Каркас состоит из древесных
                плит хвойных пород (ОСП Kalevala) камерной сушки. Особенность
                такого типа каркасов отсутствие формальдегидных примесей,
                поскольку при прессовании плоской древесной стружки сосны на
                высоких температурах выделяется природный компонент смола,
                которая выполняет роль естественной клеевой основы и
                обеспечивает прочную, экологичную сцепку древесины.
              </text>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
