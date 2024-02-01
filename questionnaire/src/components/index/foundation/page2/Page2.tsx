import styles from "./styles.module.scss"
import stylesF from "~/components/index/foundation/styles.module.scss"
import pic from "~/assets/img/foundation/window.png"
import clsx from "clsx"
export default function Page2() {

  return (
    <>
      <div class={styles.top}>
        <h1 class={clsx(stylesF.head, styles.head)}>окна/стеклопакеты</h1>
        <img class={styles.pic} src={pic} alt={"windows"} />
      </div>
      <div class={styles.text}>
          <ol class={stylesF.numberedList}>
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
    </>
  )

}