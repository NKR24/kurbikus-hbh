import { createSignal } from "solid-js"
import { Collapse } from "solid-collapse"
import styles from "./accordionStyles.module.scss"
/*import accordionStyles from "./accordionStyles.module.scss"

export default function Accordion() {
  const [isPageSectionOne, setIsSectionOneOpen] = createSignal(false)
  const [isPageSectionTwo, setIsSectionTwoOpen] = createSignal(false)
  const [isPageSectionThree, setIsSectionThreeOpen] = createSignal(false)
  const [isPageSectionFour, setIsSectionFourOpen] = createSignal(false)
  const [isPageSectionFive, setIsSectionFiveOpen] = createSignal(false)
  const [isPageSectionSix, setIsSectionSixOpen] = createSignal(false)
  const togglePageOne = () => setIsSectionOneOpen(!isPageSectionOne())
  const togglePageTwo = () => setIsSectionTwoOpen(!isPageSectionTwo())
  const togglePageThree = () => setIsSectionThreeOpen(!isPageSectionThree())
  const togglePageFour = () => setIsSectionFourOpen(!isPageSectionFour())
  const togglePageFive = () => setIsSectionFiveOpen(!isPageSectionFive())
  const togglePageSix = () => setIsSectionSixOpen(!isPageSectionSix())

  return (
    <>
      <div class={accordionStyles.containerMain}>
        <div class={accordionStyles.conrainerSection}>
          <div class={accordionStyles.boxOne}>
            <h1 class={accordionStyles.main}>Из чего состоит наш фундамент</h1>
            <button class={accordionStyles.plus} onClick={togglePageOne}>
              {isPageSectionOne() ? (
                <div/>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <line x1="18.9976" x2="18.9976" y2="37.4943" stroke="black" stroke-width="2" />
                  <line y1="18.4967" x2="37.4943" y2="18.4967" stroke="black" stroke-width="2" />
                </svg>
              )}
            </button>
            <Show when={isPageSectionOne()}>
              <button class={accordionStyles.minus} onClick={togglePageOne} />
              <p class={accordionStyles.description}>Бетонные плиты (собственного производства) устанавливаются на длинные ригели из гидротехнического
                бетона со спец армированием. Конструкцию держат монолитные бетонные сваи на титановых крепежах (Данный
                сплав используется для строения космических аппаратов)На бетонной плите, внутри деревянной обвязки
                шириной 150 мм, 2 слоя теплоизоляционного материала (экструдированный пенополистерол).Затем производится
                полусухая стяжка на немецком оборудовании. Конструкция обладает высокой несущей способностью, большой
                площадью опоры, что делает невозможным опрокидывание и провалы грунта.</p>
            </Show>
          </div>
          <div class={accordionStyles.boxTwo}>
            <h2 class={accordionStyles.main}>Подбираем ли мы участок</h2>
            <button class={accordionStyles.plus} onClick={togglePageTwo}>
              {isPageSectionTwo() ? (
                <div/>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <line x1="18.9976" x2="18.9976" y2="37.4943" stroke="black" stroke-width="2" />
                  <line y1="18.4967" x2="37.4943" y2="18.4967" stroke="black" stroke-width="2" />
                </svg>
              )}
            </button>
            <Show when={isPageSectionTwo()}>
              <button class={accordionStyles.minus} onClick={togglePageTwo} />
              <p class={accordionStyles.description}>Бетонные плиты (собственного производства) устанавливаются на длинные ригели из гидротехнического
                бетона со спец армированием. Конструкцию держат монолитные бетонные сваи на титановых крепежах (Данный
                сплав используется для строения космических аппаратов)На бетонной плите, внутри деревянной обвязки
                шириной 150 мм, 2 слоя теплоизоляционного материала (экструдированный пенополистерол).Затем производится
                полусухая стяжка на немецком оборудовании. Конструкция обладает высокой несущей способностью, большой
                площадью опоры, что делает невозможным опрокидывание и провалы грунта.</p>
            </Show>
          </div>
          <div class={accordionStyles.boxThree}>
            <h3 class={accordionStyles.main}>Какие материалы используем</h3>
            <button class={accordionStyles.plus} onClick={togglePageThree}>
              {isPageSectionThree() ? (
                <div/>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <line x1="18.9976" x2="18.9976" y2="37.4943" stroke="black" stroke-width="2" />
                  <line y1="18.4967" x2="37.4943" y2="18.4967" stroke="black" stroke-width="2" />
                </svg>
              )}
            </button>
            <Show when={isPageSectionThree()}>
              <button class={accordionStyles.minus} onClick={togglePageThree} />
              <p class={accordionStyles.description}>Бетонные плиты (собственного производства) устанавливаются на длинные ригели из гидротехнического
                бетона со спец армированием. Конструкцию держат монолитные бетонные сваи на титановых крепежах (Данный
                сплав используется для строения космических аппаратов)На бетонной плите, внутри деревянной обвязки
                шириной 150 мм, 2 слоя теплоизоляционного материала (экструдированный пенополистерол).Затем производится
                полусухая стяжка на немецком оборудовании. Конструкция обладает высокой несущей способностью, большой
                площадью опоры, что делает невозможным опрокидывание и провалы грунта.</p>
            </Show>
          </div>
          <div class={accordionStyles.boxFour}>
            <h4 class={accordionStyles.main}>Можем ли мы помочь с ипотекой</h4>
            <button class={accordionStyles.plus} onClick={togglePageFour}>
              {isPageSectionFour() ? (
                <div/>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <line x1="18.9976" x2="18.9976" y2="37.4943" stroke="black" stroke-width="2" />
                  <line y1="18.4967" x2="37.4943" y2="18.4967" stroke="black" stroke-width="2" />
                </svg>
              )}
            </button>
            <Show when={isPageSectionFour()}>
              <button class={accordionStyles.minus} onClick={togglePageFour} />
              <p class={accordionStyles.description}>Бетонные плиты (собственного производства) устанавливаются на длинные ригели из гидротехнического
                бетона со спец армированием. Конструкцию держат монолитные бетонные сваи на титановых крепежах (Данный
                сплав используется для строения космических аппаратов)На бетонной плите, внутри деревянной обвязки
                шириной 150 мм, 2 слоя теплоизоляционного материала (экструдированный пенополистерол).Затем производится
                полусухая стяжка на немецком оборудовании. Конструкция обладает высокой несущей способностью, большой
                площадью опоры, что делает невозможным опрокидывание и провалы грунта.</p>
            </Show>
          </div>
          <div class={accordionStyles.boxFive}>
            <h5 class={accordionStyles.main}>Технологии строительства</h5>
            <button class={accordionStyles.plus} onClick={togglePageFive}>
              {isPageSectionFive() ? (
                <div/>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <line x1="18.9976" x2="18.9976" y2="37.4943" stroke="black" stroke-width="2" />
                  <line y1="18.4967" x2="37.4943" y2="18.4967" stroke="black" stroke-width="2" />
                </svg>
              )}
            </button>
            <Show when={isPageSectionFive()}>
              <button class={accordionStyles.minus} onClick={togglePageFive} />
              <p class={accordionStyles.description}>Бетонные плиты (собственного производства) устанавливаются на длинные ригели из гидротехнического
                бетона со спец армированием. Конструкцию держат монолитные бетонные сваи на титановых крепежах (Данный
                сплав используется для строения космических аппаратов)На бетонной плите, внутри деревянной обвязки
                шириной 150 мм, 2 слоя теплоизоляционного материала (экструдированный пенополистерол).Затем производится
                полусухая стяжка на немецком оборудовании. Конструкция обладает высокой несущей способностью, большой
                площадью опоры, что делает невозможным опрокидывание и провалы грунта.</p>
            </Show>
          </div>
          <div class={accordionStyles.boxSix}>
            <h6 class={accordionStyles.main}>Чем каркасные дома лучше остальных</h6>
            <button class={accordionStyles.plus} onClick={togglePageSix}>
              {isPageSectionSix() ? (
                <div/>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <line x1="18.9976" x2="18.9976" y2="37.4943" stroke="black" stroke-width="2" />
                  <line y1="18.4967" x2="37.4943" y2="18.4967" stroke="black" stroke-width="2" />
                </svg>
              )}
            </button>
            <Show when={isPageSectionSix()}>
              <button class={accordionStyles.minus} onClick={togglePageSix} />
              <p class={accordionStyles.description}>Бетонные плиты (собственного производства) устанавливаются на длинные ригели из гидротехнического
                бетона со спец армированием. Конструкцию держат монолитные бетонные сваи на титановых крепежах (Данный
                сплав используется для строения космических аппаратов)На бетонной плите, внутри деревянной обвязки
                шириной 150 мм, 2 слоя теплоизоляционного материала (экструдированный пенополистерол).Затем производится
                полусухая стяжка на немецком оборудовании. Конструкция обладает высокой несущей способностью, большой
                площадью опоры, что делает невозможным опрокидывание и провалы грунта.</p>
            </Show>
          </div>
        </div>
      </div>
    </>
  )
}*/

export default function Accordion() {
  const [isExpandedOne, setIsExpandedOne] = createSignal(false)
  const [isExpandedTwo, setIsExpandedTwo] = createSignal(false)
  const [isExpandedThree, setIsExpandedThree] = createSignal(false)
  const [isExpandedFour, setIsExpandedFour] = createSignal(false)
  const [isExpandedFive, setIsExpandedFive] = createSignal(false)
  const [isExpandedSix, setIsExpandedSix] = createSignal(false)
  return (
    <div class={styles.containerMain}>
      <div class={styles.containerSection}>
        <div class={styles.boxOne}>
          <div class={styles.first}>
            <h1 class={styles.mainText}>Из чего состоит наш фундамент</h1>
            <button class={styles.button} onClick={() => setIsExpandedOne(!isExpandedOne())}>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                <line x1="18.9976" x2="18.9976" y2="37.4943" stroke="black" stroke-width="2" />
                <line y1="18.4967" x2="37.4943" y2="18.4967" stroke="black" stroke-width="2" />
              </svg>
            </button>
          </div>
          <div class={styles.second}>
            <Collapse value={isExpandedOne()} class={styles.myTransition}>
              <p class={styles.description}>
                Бетонные плиты (собственного производства) устанавливаются на длинные ригели
                из гидротехнического бетона со спец армированием. Конструкцию держат монолитные бетонные сваи на титановых
                крепежах (Данный сплав используется для строения космических аппаратов)На бетонной плите, внутри
                деревянной обвязки шириной 150 мм, 2 слоя теплоизоляционного материала (экструдированный
                пенополистерол).Затем производится полусухая стяжка на немецком оборудовании. Конструкция обладает высокой
                несущей способностью, большой площадью опоры, что делает невозможным опрокидывание и провалы грунта.
              </p>
            </Collapse>
          </div>
        </div>
        <div class={styles.boxTwo}>
          <div class={styles.first}>
            <h1 class={styles.mainText}>Подбираем ли мы участок</h1>
            <button class={styles.button} onClick={() => setIsExpandedTwo(!isExpandedTwo())}>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                <line x1="18.9976" x2="18.9976" y2="37.4943" stroke="black" stroke-width="2" />
                <line y1="18.4967" x2="37.4943" y2="18.4967" stroke="black" stroke-width="2" />
              </svg>
            </button>
          </div>
          <div class={styles.second}>
            <Collapse value={isExpandedTwo()} class={styles.myTransition}>
              <p class={styles.description}>
                Да, предложим Вам свои варианты или варианты партнеров, а также подберем индивидуальные варианты, если ни
                один из наших не подойдет
              </p>
            </Collapse>
          </div>
        </div>
        <div class={styles.boxThree}>
          <div class={styles.first}>
            <h1 class={styles.mainText}>Какие материалы используем</h1>
            <button class={styles.button} onClick={() => setIsExpandedThree(!isExpandedThree())}>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                <line x1="18.9976" x2="18.9976" y2="37.4943" stroke="black" stroke-width="2" />
                <line y1="18.4967" x2="37.4943" y2="18.4967" stroke="black" stroke-width="2" />
              </svg>
            </button>
          </div>
          <div class={styles.second}>
            <Collapse value={isExpandedThree()} class={styles.myTransition}>
              <p class={styles.description}>
                Для домокомплекта из древесных плит хвойных пород (ОСП Kalevala), армирующий скотч DELTA MULTI BAND,
                чешская пароизоляционная мембрана JUTAFOL, профилированный лист для фасадной отделки фирмы Viking, планкин
                из сосны с двухэтапным покрытием Tikkurila, энергоэффективные стеклопакеты (3 стекла, 2 камеры) KBE Expert
                с ламинированным профилем 70 мм. и немецкая фурнитура фирмы ROTO, саморезы для скрытого монтажа фирма
                SPAX, провода внутри дома медные, негорючие маркировка NG и LS.
              </p>
            </Collapse>
          </div>
        </div>
        <div class={styles.boxFour}>
          <div class={styles.first}>
            <h1 class={styles.mainText}>Можем ли мы помочь с ипотекой</h1>
            <button class={styles.button} onClick={() => setIsExpandedFour(!isExpandedFour())}>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                <line x1="18.9976" x2="18.9976" y2="37.4943" stroke="black" stroke-width="2" />
                <line y1="18.4967" x2="37.4943" y2="18.4967" stroke="black" stroke-width="2" />
              </svg>
            </button>
          </div>
          <div class={styles.second}>
            <Collapse value={isExpandedFour()} class={styles.myTransition}>
              <p class={styles.description}>
                Да, наш специалист проведет вас от подготовки документов до сделки по самым подходящим для Вас условиям
              </p>
            </Collapse>
          </div>
        </div>
        <div class={styles.boxFive}>
          <div class={styles.first}>
            <h1 class={styles.mainText}>Технологии строительства</h1>
            <button class={styles.button} onClick={() => setIsExpandedFive(!isExpandedFive())}>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                <line x1="18.9976" x2="18.9976" y2="37.4943" stroke="black" stroke-width="2" />
                <line y1="18.4967" x2="37.4943" y2="18.4967" stroke="black" stroke-width="2" />
              </svg>
            </button>
          </div>
          <div class={styles.second}>
            <Collapse value={isExpandedFive()} class={styles.myTransition}>
              <p class={styles.description}>
                Мы строим каркасные дома, используя собственное производство домокомплектов и фундаментов
              </p>
            </Collapse>
          </div>
        </div>
        <div class={styles.boxSix}>
          <div class={styles.first}>
            <h1 class={styles.mainText}>Чем каркасные дома лучше остальных</h1>
            <button class={styles.button} onClick={() => setIsExpandedSix(!isExpandedSix())}>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                <line x1="18.9976" x2="18.9976" y2="37.4943" stroke="black" stroke-width="2" />
                <line y1="18.4967" x2="37.4943" y2="18.4967" stroke="black" stroke-width="2" />
              </svg>
            </button>
          </div>
          <div class={styles.second}>
            <Collapse value={isExpandedSix()} class={styles.myTransition}>
              <p class={styles.description}>
                Используются быстровозводимые и и легкие конструкции,которые прекрасно удерживают тепло, также для
                строительства каркасных домов нет никаких ограничений по температуре.
              </p>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  )
}