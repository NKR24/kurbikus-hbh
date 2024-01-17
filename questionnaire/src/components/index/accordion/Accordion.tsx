import { createSignal } from "solid-js"
import { Collapse } from "solid-collapse"
import styles from "./accordionStyles.module.scss"
import "../../observer/IntersectionObserverComponent.module.scss"
import IntersectionObserverComponent from "~/components/observer"

export default function Accordion() {
  const [isExpandedOne, setIsExpandedOne] = createSignal(false)
  const [isExpandedTwo, setIsExpandedTwo] = createSignal(false)
  const [isExpandedThree, setIsExpandedThree] = createSignal(false)
  const [isExpandedFour, setIsExpandedFour] = createSignal(false)
  const [isExpandedFive, setIsExpandedFive] = createSignal(false)
  const [isExpandedSix, setIsExpandedSix] = createSignal(false)

  return (
    <div class={styles.containerMain}>
      <IntersectionObserverComponent>
        {(isAnimated) => (
          <div class={isAnimated ? "animated" : ""}>
            <div class={styles.containerSection}>
              <div class={styles.boxOne}>
                <div class={styles.first}>
                  <h1 class={styles.mainText}>Из чего состоит наш фундамент</h1>
                  <button
                    classList={{
                      [styles.button]: true,
                      [styles.buttonActive]: isExpandedOne(),
                    }}
                    onClick={() => setIsExpandedOne(!isExpandedOne())}
                  >
                    <div class={styles.plus} />
                  </button>
                </div>
                <div class={styles.second}>
                  <Collapse value={isExpandedOne()} class={styles.myTransition}>
                    <p class={styles.description}>
                      Бетонные плиты (собственного производства) устанавливаются
                      на длинные ригели из гидротехнического бетона со спец
                      армированием. Конструкцию держат монолитные бетонные сваи
                      на титановых крепежах (Данный сплав используется для
                      строения космических аппаратов)На бетонной плите, внутри
                      деревянной обвязки шириной 150 мм, 2 слоя
                      теплоизоляционного материала (экструдированный
                      пенополистерол).Затем производится полусухая стяжка на
                      немецком оборудовании. Конструкция обладает высокой
                      несущей способностью, большой площадью опоры, что делает
                      невозможным опрокидывание и провалы грунта.
                    </p>
                  </Collapse>
                </div>
              </div>
              <div class={styles.boxTwo}>
                <div class={styles.first}>
                  <h1 class={styles.mainText}>Подбираем ли мы участок</h1>
                  <button
                    classList={{
                      [styles.button]: true,
                      [styles.buttonActive]: isExpandedTwo(),
                    }}
                    onClick={() => setIsExpandedTwo(!isExpandedTwo())}
                  >
                    <div class={styles.plus} />
                  </button>
                </div>
                <div class={styles.second}>
                  <Collapse value={isExpandedTwo()} class={styles.myTransition}>
                    <p class={styles.description}>
                      Да, предложим Вам свои варианты или варианты партнеров, а
                      также подберем индивидуальные варианты, если ни один из
                      наших не подойдет
                    </p>
                  </Collapse>
                </div>
              </div>
              <div class={styles.boxThree}>
                <div class={styles.first}>
                  <h1 class={styles.mainText}>Какие материалы используем</h1>
                  <button
                    classList={{
                      [styles.button]: true,
                      [styles.buttonActive]: isExpandedThree(),
                    }}
                    onClick={() => setIsExpandedThree(!isExpandedThree())}
                  >
                    <div class={styles.plus} />
                  </button>
                </div>
                <div class={styles.second}>
                  <Collapse
                    value={isExpandedThree()}
                    class={styles.myTransition}
                  >
                    <p class={styles.description}>
                      Для домокомплекта из древесных плит хвойных пород (ОСП
                      Kalevala), армирующий скотч DELTA MULTI BAND, чешская
                      пароизоляционная мембрана JUTAFOL, профилированный лист
                      для фасадной отделки фирмы Viking, планкин из сосны с
                      двухэтапным покрытием Tikkurila, энергоэффективные
                      стеклопакеты (3 стекла, 2 камеры) KBE Expert с
                      ламинированным профилем 70 мм. и немецкая фурнитура фирмы
                      ROTO, саморезы для скрытого монтажа фирма SPAX, провода
                      внутри дома медные, негорючие маркировка NG и LS.
                    </p>
                  </Collapse>
                </div>
              </div>
              <div class={styles.boxFour}>
                <div class={styles.first}>
                  <h1 class={styles.mainText}>Можем ли мы помочь с ипотекой</h1>
                  <button
                    classList={{
                      [styles.button]: true,
                      [styles.buttonActive]: isExpandedFour(),
                    }}
                    onClick={() => setIsExpandedFour(!isExpandedFour())}
                  >
                    <div class={styles.plus} />
                  </button>
                </div>
                <div class={styles.second}>
                  <Collapse
                    value={isExpandedFour()}
                    class={styles.myTransition}
                  >
                    <p class={styles.description}>
                      Да, наш специалист проведет вас от подготовки документов
                      до сделки по самым подходящим для Вас условиям
                    </p>
                  </Collapse>
                </div>
              </div>
              <div class={styles.boxFive}>
                <div class={styles.first}>
                  <h1 class={styles.mainText}>Технологии строительства</h1>
                  <button
                    classList={{
                      [styles.button]: true,
                      [styles.buttonActive]: isExpandedFive(),
                    }}
                    onClick={() => setIsExpandedFive(!isExpandedFive())}
                  >
                    <div class={styles.plus} />
                  </button>
                </div>
                <div class={styles.second}>
                  <Collapse
                    value={isExpandedFive()}
                    class={styles.myTransition}
                  >
                    <p class={styles.description}>
                      Мы строим каркасные дома, используя собственное
                      производство домокомплектов и фундаментов
                    </p>
                  </Collapse>
                </div>
              </div>
              <div class={styles.boxSix}>
                <div class={styles.first}>
                  <h1 class={styles.mainText}>
                    Чем каркасные дома лучше остальных
                  </h1>
                  <button
                    classList={{
                      [styles.button]: true,
                      [styles.buttonActive]: isExpandedSix(),
                    }}
                    onClick={() => setIsExpandedSix(!isExpandedSix())}
                  >
                    <div class={styles.plus} />
                  </button>
                </div>
                <div class={styles.second}>
                  <Collapse value={isExpandedSix()} class={styles.myTransition}>
                    <p class={styles.description}>
                      Используются быстровозводимые и и легкие
                      конструкции,которые прекрасно удерживают тепло, также для
                      строительства каркасных домов нет никаких ограничений по
                      температуре.
                    </p>
                  </Collapse>
                </div>
              </div>
            </div>
          </div>
        )}
      </IntersectionObserverComponent>
    </div>
  )
}
