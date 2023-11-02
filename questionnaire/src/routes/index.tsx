import {Title} from "solid-start"
import PopupVideo from "~/components/popupVideo"
import Navbar from "~/components/navbar"
import home1 from "../assets/img/home1.jpg"
import home3 from "../assets/img/home2.jpg"
import home2 from "../assets/img/home3.jpg"
import home4 from "../assets/img/home4.jpg"
import clsx from "clsx"
import mainHome from "../assets/img/home-main.jpg"
import section1Styles from "./index/section1.module.scss"
import section2Styles from "./index/section2.module.scss"
import section3Styles from "./index/section3.module.scss"
import section5Styles from "./index/section5.module.scss"
import section6Styles from "./index/section6.module.scss"
import section7Styles from "./index/section7.module.scss"
import section8Styles from "./index/section8.module.scss"
import section9Styles from "./index/section9.module.scss"
import PDF from "../assets/img/PDF.png"
import foundation from "../assets/img/foundation.jpg"
import forMobile from "..//assets/img/forMobile.jpg"

export default function Home() {
    return (
        <>
            <Title>Опросник</Title>
            <Navbar/>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Section7/>
            <Section8/>
            <Section9/>
            <Section10/>
            <Section11/>
            <Section12/>
        </>
    )
}


function Section1() {
    return (
        <div class={section1Styles.containerMain}>
            <div class={section1Styles.containerSection}>
                <div class={section1Styles.containerDesktop}>
                    <div class={section1Styles.containerFirst}>
                        <div class={clsx(section1Styles.box, section1Styles.box1)}>
                            <div class={clsx(section1Styles.text, section1Styles.text1large)}>
                                <p>БарнХаус</p>
                            </div>
                            <div class={clsx(section1Styles.text, section1Styles.text1small)}>
                                <p>В котором можно жить даже на крайнем севере</p>
                            </div>
                        </div>
                        <div class={clsx(section1Styles.box, section1Styles.box2)}>
                            <div class={clsx(section1Styles.text, section1Styles.text2)}>
                                <p>НА МОНОЛИТНОМ ФУНДАМЕНТЕ ЗА 60 ДНЕЙ </p>
                            </div>
                        </div>
                        <div class={clsx(section1Styles.box, section1Styles.box3)}>
                            <div class={clsx(section1Styles.text, section1Styles.text3)}>
                                <p>ГАРАНТИЯ 50 лет.</p>
                            </div>
                        </div>
                        <div class={clsx(section1Styles.box, section1Styles.box4)}>
                            <div class={clsx(section1Styles.text, section1Styles.text4)}>
                                <p>Ипотека без первоначального взноса</p>
                            </div>
                        </div>
                    </div>
                    <div class={section1Styles.containerSecond}>
                        <img src={mainHome} class={section1Styles.mainHomeImage} alt={""}/>
                    </div>
                </div>
                <div class={section1Styles.containerMobile}>
                    <div class={clsx(section1Styles.box, section1Styles.MobileImage)}>
                        <div class={section1Styles.homeButton}>
                            <div class={section1Styles.homeButtonText}>
                                <p>Консультация</p>
                            </div>
                        </div>
                    </div>
                    <div class={clsx(section1Styles.box, section1Styles.MobileFisrt)}>
                        <div
                            class={clsx(
                                section1Styles.text,
                                section1Styles.MobTextFirstLarge
                            )}
                        >
                            <p>барнхаус</p>
                        </div>
                        <div
                            class={clsx(
                                section1Styles.text,
                                section1Styles.MobTextFirstSmall
                            )}
                        >
                            <p>
                                В котором можно жить даже на крайнем севере на монолитном
                                фундаменте за 60 дней.
                            </p>
                        </div>
                    </div>
                    <div class={clsx(section1Styles.box, section1Styles.MobileSecond)}>
                        <div class={section1Styles.videoButton}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="56"
                                height="56"
                                viewBox="0 0 56 56"
                                fill="none"
                            >
                                <path
                                    d="M28.25 55.5C43.2998 55.5 55.5 43.2998 55.5 28.25C55.5 13.2002 43.2998 1 28.25 1C13.2002 1 1 13.2002 1 28.25C1 43.2998 13.2002 55.5 28.25 55.5Z"
                                    stroke="#1D1D1B"
                                    stroke-miterlimit="10"
                                />
                                <path
                                    d="M20.3926 28.6651V19.0557L28.718 23.857L37.0435 28.6651L28.718 33.4731L20.3926 38.2744V28.6651Z"
                                    fill="#D9D9D9"
                                    stroke="#1D1D1B"
                                    stroke-miterlimit="10"
                                />
                            </svg>
                        </div>
                        <div
                            class={clsx(section1Styles.text, section1Styles.MobTextSecond)}
                        >
                            <p>Посмотрите видео о строительстве вашего дома</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Section2() {
    return (
        <>
            <div class={clsx(section2Styles.section, section2Styles.fonts)}>
                <div class={section2Styles.firstText}>каталоги домов с ценами</div>
                <div class={section2Styles.blocks}>
                    <div class={clsx(section2Styles.block1, section2Styles.relative)}>
                        <img src={home1} alt="home1" class={section2Styles.imageHome}/>
                        <img src={PDF} alt="PDF" class={section2Styles.overlayImage}/>
                        <div class={section2Styles.textOverlay}>h1</div>
                        <h1 class={section2Styles.text}>
                            Площадь: от 90 м² <br/>
                            3 спальни, 1 санузел От <br/>4 300 000 руб.
                        </h1>
                    </div>
                    <div class={clsx(section2Styles.block1, section2Styles.thirdBlock)}>
                        <img src={home3} alt="home3" class={section2Styles.imageHome}/>
                        <img src={PDF} alt="PDF" class={section2Styles.overlayImage}/>
                        <div class={section2Styles.textOverlay}>h3</div>
                        <h1 class={section2Styles.text}>
                            Площадь: от 110 м² <br/>3 спальни, 1 санузел От <br/>4 000 000
                            руб.
                        </h1>
                    </div>
                    <div class={clsx(section2Styles.block1, section2Styles.thirdBlock1)}>
                        <img src={home2} alt="home2" class={section2Styles.imageHome}/>
                        <img src={PDF} alt="PDF" class={section2Styles.overlayImage}/>
                        <div class={section2Styles.textOverlay}>h2</div>
                        <div class={section2Styles.blackRectangle}>
                            <div class={section2Styles.textShale}>шале</div>
                        </div>
                        <h1 class={section2Styles.text}>
                            Площадь: от 90 м²
                            <br/> 3 спальни, 1 санузел От <br/> 4 600 000 руб.
                        </h1>
                    </div>
                    <div class={clsx(section2Styles.block1, section2Styles.fourthBlock)}>
                        <img src={home4} alt="home4" class={section2Styles.imageHome}/>
                        <img src={PDF} alt="PDF" class={section2Styles.overlayImage}/>
                        <div class={section2Styles.textOverlay}>h4</div>
                        <h1 class={section2Styles.text}>
                            Площадь: от 110 м² <br/>3 спальни, 1 санузел От <br/>3 900 000
                            руб.
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

function Section3() {
    return (
        <>
            <div class={section3Styles.containerMain}>
                <div class={section3Styles.containerSection}>
                    <div class={section3Styles.containerDesktop}>
                        <div class={clsx(section3Styles.box, section3Styles.boxFirst)}>
                            <div class={clsx(section3Styles.text, section3Styles.textMain)}>
                                <p>5 вопросов о вашем доме</p>
                            </div>
                            <div class={section3Styles.buttonStart}>
                                <div class={section3Styles.textButton}>
                                    <p>начать</p>
                                </div>
                            </div>
                            <div class={section3Styles.table}>
                                <p class={section3Styles.tableTextMain}>Вы получите:</p>
                                <ol class={section3Styles.tableText}>
                                    <li>Подходящие проекты с ценой в PDF</li>
                                    <li>Изменение комплектации и цены</li>
                                    <li>Выбор цветов и покрытий</li>
                                    <li>Подбор материалов кровли и окон</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div class={section3Styles.containerMobile}>
                        <div
                            class={clsx(section3Styles.box, section3Styles.boxMobileFirst)}
                        >
                            <div
                                class={clsx(section3Styles.text, section3Styles.textMainMob)}
                            >
                                <p>5 вопросов о вашем доме</p>
                            </div>
                            <div class={section3Styles.buttonStartMob}>
                                <div class={section3Styles.textButtonMob}>
                                    <p>начать</p>
                                </div>
                            </div>
                        </div>
                        <div
                            class={clsx(section3Styles.box, section3Styles.boxMobileSecond)}
                        >
                            <div class={section3Styles.tableMob}>
                                <p class={section3Styles.tableTextMainMob}>Вы получите:</p>
                                <ol class={section3Styles.tableTextMob}>
                                    <li>Подходящие проекты с ценой в PDF</li>
                                    <li>Изменение комплектации и цены</li>
                                    <li>Выбор цветов и покрытий</li>
                                    <li>Подбор материалов кровли и окон</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Section4() {
    return (
        <></>
    )
}

function Section5() {
    return (
        <>
            <div class={section5Styles.section5}>
                <div class={section5Styles.sectionMain}>
                    <img src={foundation} alt="foundation" class={section5Styles.foundationPic}/>
                    <img src={forMobile} alt="foundation1" class={section5Styles.foundationPicForMobile}/>
                    <div class={section5Styles.sevenLines}>
                        <div class={section5Styles.line}/>
                        <div class={section5Styles.line}/>
                        <div class={section5Styles.line}/>
                        <div class={section5Styles.line}/>
                        <div class={section5Styles.line}/>
                        <div class={section5Styles.line}/>
                        <div class={section5Styles.line}/>
                    </div>
                    <div class={section5Styles.foundationText}>фундамент</div>
                    <ol class={section5Styles.numberedList}>
                        <li>
                            Бетонные плиты (собственного производства) устанавливаются на
                            длинные ригели из гидротехнического бетона со спец армированием.
                        </li>
                        <li>
                            Конструкцию держат монолитные бетонные сваи на титановых крепежах.
                            Данный сплав используется для строения космических аппаратов.
                        </li>
                        <li>


                            На бетонной плите, внутри деревянной обвязки шириной 150 мм, 2 слоя
                            теплоизоляционного материала (экструдированный пенополистерол).
                        </li>
                        <li>
                            Затем производится полусухая стяжка на немецком оборудовании. В
                            результате создаётся идеально ровное предфинальное покрытие пола. На
                            него кладётся финальное половое покрытие.
                        </li>
                        <li>
                            Конструкция обладает высокой несущей способностью, большой площадью
                            опоры, что делает невозможным опрокидывание и провалы грунта.
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )
}

function Section6() {
    return (
        <>
            <div class={section6Styles.containerMain}>
                <div class={section6Styles.containerSection}>
                    <div class={section6Styles.containerDesktop}>
                        <div class={section6Styles.partFirst}>
                            <div class={clsx(section6Styles.box, section6Styles.boxFirst)}>
                                <p class={clsx(section6Styles.text, section6Styles.textFirst)}>наши дома</p>
                            </div>
                            <div class={clsx(section6Styles.box, section6Styles.boxSecond)}>
                                <p class={clsx(section6Styles.text, section6Styles.textSecond)}>интерьер</p>
                            </div>
                            <div class={clsx(section6Styles.box, section6Styles.boxThird)}>
                                <p class={clsx(section6Styles.text, section6Styles.textThird)}>стройка</p>
                            </div>
                        </div>
                        <div class={section6Styles.partSecond}>
                            <div class={clsx(section6Styles.child, section6Styles.OneThreeFive)}>
                                <p class={section6Styles.textLow}>наши дома</p>
                                <p class={section6Styles.textLarge}>дом по проекту h1</p>
                            </div>
                            <div class={clsx(section6Styles.child, section6Styles.Second)}>
                                <p class={section6Styles.textLow}>наши дома</p>
                                <p class={section6Styles.textLarge}>дом по проекту h1</p>
                            </div>
                            <div class={clsx(section6Styles.child, section6Styles.OneThreeFive)}>
                                <p class={section6Styles.textLow}>наши дома</p>
                                <p class={section6Styles.textLarge}>дом по проекту h1</p>
                            </div>
                            <div class={clsx(section6Styles.child, section6Styles.FourSixEight)}>
                                <p class={section6Styles.textLow}>наши дома</p>
                                <p class={section6Styles.textLarge}>дом по проекту h1</p>
                            </div>
                            <div class={clsx(section6Styles.child, section6Styles.OneThreeFive)}>
                                <p class={section6Styles.textLow}>наши дома</p>
                                <p class={section6Styles.textLarge}>дом по проекту h1</p>
                            </div>
                            <div class={clsx(section6Styles.child, section6Styles.FourSixEight)}>
                                <p class={section6Styles.textLow}>наши дома</p>
                                <p class={section6Styles.textLarge}>дом по проекту h1</p>
                            </div>
                            <div class={clsx(section6Styles.target, section6Styles.Seven)}>
                                <p class={section6Styles.textLow}>наши дома</p>
                                <p class={section6Styles.textLarge}>дом по проекту h1</p>
                            </div>
                            <div class={clsx(section6Styles.child, section6Styles.FourSixEight)}>
                                <p class={section6Styles.textLow}>наши дома</p>
                                <p class={section6Styles.textLarge}>дом по проекту h1</p>
                            </div>
                        </div>
                    </div>
                    <div class={section6Styles.containerMobile}>
                        <div class={section6Styles.mobileOne}>
                            <div class={clsx(section6Styles.boxMobile, section6Styles.mobFirst)}>
                                <p class={clsx(section6Styles.textMobile, section6Styles.textMobFirst)}>наши дома</p>
                            </div>
                            <div class={clsx(section6Styles.boxMobile, section6Styles.mobSecond)}>
                                <p class={clsx(section6Styles.textMobile, section6Styles.textMobSecond)}>интерьер</p>
                            </div>
                            <div class={clsx(section6Styles.boxMobile, section6Styles.mobThird)}>
                                <p class={clsx(section6Styles.textMobile, section6Styles.textMobThird)}>стройка</p>
                            </div>
                        </div>
                        <div class={section6Styles.mobileTwo}>
                            <div class={clsx(section6Styles.childMobile, section6Styles.mobOne)}>
                                <p class={section6Styles.textLowMobile}>наши дома</p>
                            </div>
                            <div class={clsx(section6Styles.childMobile, section6Styles.mobTwo)}>
                                <p class={section6Styles.textLowMobile}>наши дома</p>
                            </div>
                            <div class={clsx(section6Styles.childMobile, section6Styles.mobThree)}>
                                <p class={section6Styles.textLowMobile}>наши дома</p>
                            </div>
                            <div class={clsx(section6Styles.childMobile, section6Styles.mobFour)}>
                                <p class={section6Styles.textLowMobile}>наши дома</p>
                            </div>
                            <div class={clsx(section6Styles.childMobile, section6Styles.mobFive)}>
                                <p class={section6Styles.textLowMobile}>наши дома</p>
                            </div>
                            <div class={clsx(section6Styles.childMobile, section6Styles.mobSix)}>
                                <p class={section6Styles.textLowMobile}>наши дома</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Section7() {
    return (
        <>
            <div class={section7Styles.section7}>
                <div class={section7Styles.gridRow}>
                    <div class={section7Styles.videoBox}>
                        <div class={section7Styles.playButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="99" height="99" viewBox="0 0 99 99"
                                 fill="none">
                                <path
                                    d="M49.4061 97.8121C76.14 97.8121 97.8121 76.14 97.8121 49.4061C97.8121 22.6721 76.14 1 49.4061 1C22.6721 1 1 22.6721 1 49.4061C1 76.14 22.6721 97.8121 49.4061 97.8121Z"
                                    stroke="#DEDEDE" stroke-width="2" stroke-miterlimit="10"/>
                                <path
                                    d="M35 49.0698V32L49.7891 40.529L64.5782 49.0698L49.7891 57.6107L35 66.1396V49.0698Z"
                                    fill="black"
                                    fill-opacity="0.05" stroke="#DEDEDE" stroke-width="2" stroke-miterlimit="10"/>
                            </svg>
                        </div>
                    </div>
                    <p class={section7Styles.textInterview}>
                        ИНТЕРВЬЮ С СОЗДАТЕЛЕМ КОМПАНИИ
                    </p>
                    <div class={section7Styles.arrow}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                            <path d="M2 43L43 2M43 2H2M43 2V43" stroke="#DEDEDE" stroke-width="3"/>
                        </svg>
                    </div>
                    <div class={section7Styles.arrow2}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                            <path d="M1 18L18 1M18 1H1M18 1V18" stroke="#DEDEDE" stroke-width="1"/>
                        </svg>
                    </div>
                    <p class={section7Styles.textReviews}>отзывы:</p>
                    <div class={section7Styles.lines}/>
                    <div class={section7Styles.reviews}>
                        <p class={section7Styles.recallTime}>Март 2023</p><br/>
                        <p class={section7Styles.review}>Мария Ш</p><br/>
                        <p class={section7Styles.review}>Нам срочно нужно было съехать со съемной квартиры, искали и
                            нашли. Спасибо
                            Дом за домом! все сделали быстро и качественно. Нам срочно нужно было съехать со съемной
                            квартиры, искали
                            и нашли. Спасибо Дом за домом! все сделали быстро и качественно. Нам срочно нужно было
                            съехать со съемной
                            квартиры, искали и нашли. Спасибо Дом за домом! все сделали быстро и качественно.</p><br/>
                        <p class={section7Styles.buttonExpand}>Раскрыть...</p>
                    </div>
                    <div class={section7Styles.lines}/>
                    <div class={section7Styles.reviews}>
                        <p class={section7Styles.recallTime}>Февраль 2023</p><br/>
                        <p class={section7Styles.review}>Игорь Д</p><br/>
                        <p class={section7Styles.review}>Нам срочно нужно было съехать со съемной квартиры, искали и
                            нашли. Спасибо
                            Дом за домом! все сделали быстро и качественно.</p><br/>
                        <p class={section7Styles.buttonExpand}>Раскрыть...</p>
                    </div>
                    <div class={section7Styles.lines}/>
                    <div class={section7Styles.reviews}>
                        <p class={section7Styles.recallTime}>Февраль 2023</p><br/>
                        <p class={section7Styles.review}>Игорь Д</p><br/>
                        <p class={section7Styles.review}>Нам срочно нужно было съехать со съемной квартиры, искали и
                            нашли. Спасибо
                            Дом за домом! все сделали быстро и качественно. Спасибо Дом за домом! все сделали быстро и
                            качественно.</p><br/>
                        <p class={section7Styles.buttonExpand}>Раскрыть...</p>
                    </div>
                    <div class={section7Styles.lines}/>
                    <div class={section7Styles.downloadButton}>
                        <p class={section7Styles.textDownload}>загрузить ещё test</p>
                    </div>
                </div>
            </div>
        </>
    )
}

function Section8() {
    return (
        <>
            <div class={section8Styles.containerMain}>
                <div class={section8Styles.containerSection}>
                    <p class={section8Styles.textMain}>
                        ЭКСКУРСИЯ ПО НАШИМ ОБЪЕКТАМ
                    </p>
                    <div class={section8Styles.videoBox}>
                        <div class={section8Styles.videoButton}>
                            <PopupVideo/>
                        </div>
                    </div>
                    <p class={clsx(section8Styles.text, section8Styles.textOne)}>
                        Демонстрируем построенный вариант дома, однако может отвезти на недостроенный объект, чтобы вы
                        могли проверить и убедиться своими глазами.
                        Экскурсию проводит наш проектный менеджер, поэтому вы получите ответы на
                    </p>
                    <p class={clsx(section8Styles.text, section8Styles.textTwo)}>
                        все интересующие вас вопросы.
                    </p>
                    <p class={clsx(section8Styles.text, section8Styles.textThree)}>
                        Также поможем подобрать вам участок, если вы в растерянности от большого количества предложений
                        и не знаете, что лучше.
                    </p>
                    <div class={section8Styles.button}>
                        <div class={section8Styles.textButton}>
                            <p class={section8Styles.textFont}>
                                записаться
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Section9() {
    return (
        <>
            <div class={section9Styles.containerMain}>
                <div class={section9Styles.containerSection}>
                    <div class={section9Styles.boxFirst}>
                        <h1 class={section9Styles.textMain}>Консультация</h1>
                        <p class={section9Styles.textNoMain}>Оставьте свои контактные данные и мы обязательно с вами
                            свяжемся</p>
                        <div class={section9Styles.forminputmaterial}>
                            <input type={"text"} name={"username"} id={"username"} placeholder={"имя*"} autocomplete={"on"}
                                   class={section9Styles.formcontrolmaterial} required/>
                        </div>
                        <div class={section9Styles.forminputmaterial}>
                            <input type={"text"} name={"mail"} id={"mail"} placeholder={"почта или номер телефона*"} autocomplete={"on"}
                                   class={section9Styles.formcontrolmaterial} required/>
                        </div>
                        <div class={section9Styles.forminputmaterial}>
                            <input type={"text"} name={"message"} id={"message"} placeholder={"Текст сообщения"} autocomplete={"off"}
                                   class={section9Styles.formcontrolmaterial} required/>
                        </div>
                    </div>
                    <div class={section9Styles.boxSecond}>
                        <p class={section9Styles.textLow}>
                            нажимая на кнопку «Отправить» вы даете согласие на обработку персональных данных
                        </p>
                        <div class={section9Styles.button}>
                            <div class={section9Styles.buttonText}>
                                <p class={section9Styles.fontButton}>
                                    отправить
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Section10() {
    return (
        <></>
    )
}

function Section11() {
    return (
        <></>
    )
}

function Section12() {
    return (
        <></>
    )
}



