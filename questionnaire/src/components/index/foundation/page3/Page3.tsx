import styles from "./styles.module.scss"
import stylesF from "~/components/index/foundation/styles.module.scss"
import pic from "~/assets/img/foundation/frame.png"
import clsx from "clsx"
export default function Page3() {

  return (
    <>
      <div class={styles.top}>
        <h1 class={clsx(stylesF.head, styles.head)}>каркас/утеплитель</h1>
        <img class={styles.pic} src={pic} alt={"frame"} />
      </div>
        <div class={styles.text}>
          <p class={stylesF.numberedList}>
            Домокомплект - выдерживает сильные морозы. Поставляется с завода
            не утепленным. Ширина 4-5 метров.Каркас состоит из древесных
            плит хвойных пород (ОСП Kalevala) камерной сушки. Особенность
            такого типа каркасов отсутствие формальдегидных примесей,
            поскольку при прессовании плоской древесной стружки сосны на
            высоких температурах выделяется природный компонент смола,
            которая выполняет роль естественной клеевой основы и
            обеспечивает прочную, экологичную сцепку древесины.
          </p>
        </div>
    </>
  )

}