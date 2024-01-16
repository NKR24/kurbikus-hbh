//import { createVisibilityObserver } from "@solid-primitives/intersection-observer";
import styles from "./styles.module.scss"
import {createSignal, onCleanup, onMount} from 'solid-js';
import clsx from "clsx";

export default function Observe() {
    const [isAnimated, setIsAnimated] = createSignal(false);
    let ref: HTMLDivElement | undefined;

    onMount(() => {
        const onIntersect: IntersectionObserverCallback = ([entry], observer) => {
            if (entry.isIntersecting) {
                setIsAnimated(true); // Trigger the animation
                observer.unobserve(entry.target); // Stop observing after the first trigger
            }
        };

        // Create and register the intersection observer
        const observer = new IntersectionObserver(onIntersect, { threshold: 0.1 });
        if (ref) {
            observer.observe(ref);
        }

        // Cleanup the observer on component disposal
        onCleanup(() => observer.disconnect());
    });

    return (
        <>
            <div  ref={ref} class={styles.container}>
            {/*<svg width="235" height="1" viewBox="0 0 235 1" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class={isAnimated() ? styles.animate : styles.nonDisplayLine}>
                <line x1="2.18557e-08" y1="0.75" x2="235" y2="0.750021" stroke="black" stroke-width="0.5"/>
            </svg>*/}
            <div class={isAnimated() ? styles.line1 : styles.nonDisplayLine}></div>
            <div class={isAnimated() ? styles.line2 : styles.nonDisplayLine}></div>
            <div class={isAnimated() ? styles.line3 : styles.nonDisplayLine}></div>
            <div class={isAnimated() ? styles.line4 : styles.nonDisplayLine}></div>
            <div class={isAnimated() ? styles.line5 : styles.nonDisplayLine}></div>
            <div class={isAnimated() ? styles.line6 : styles.nonDisplayLine}></div>
            <div class={isAnimated() ? styles.line7 : styles.nonDisplayLine}></div>
            <div class={isAnimated() ? styles.line8 : styles.nonDisplayLine}></div>
            <div class={isAnimated() ? styles.line9 : styles.nonDisplayLine}></div>
            <div class={isAnimated() ? styles.line10 : styles.nonDisplayLine}></div>
            <div class={isAnimated() ? styles.line11 : styles.nonDisplayLine}></div>
            <div class={isAnimated() ? styles.line12 : styles.nonDisplayLine}></div>
            <div class={isAnimated() ? styles.OneMob : styles.nonDisplayLine}>
                <div class={styles.hide}>
                <h1 class={styles.main}>01</h1>
                <p class={styles.des}>
                    СТРОИМ/МОНТАЖ КРУГЛЫЙ ГОД
                </p>
                </div>
            </div>
            <div class={isAnimated() ? styles.TwoMob : styles.nonDisplayLine}>
                <h1 class={styles.main}>02</h1>
                <p class={clsx(styles.des, styles.two)}>
                    ЛУЧШИЕ ИННОВАЦИОННЫЕ ТЕХНОЛОГИИ И ГАРАНТИЯ КАЧЕСТВА
                </p>
            </div>
            <div class={isAnimated() ? styles.ThreeMob : styles.nonDisplayLine}>
                <h1 class={styles.main}>03</h1>
                <p class={clsx(styles.des, styles.three)}>
                    ДОСТУПНАЯ СТОИМОСТЬ ЗА СЧЕТ СОБСТВЕННОГО ПРОИЗВОДСТВА
                </p>
            </div>
            <div class={isAnimated() ? styles.FourMob : styles.nonDisplayLine}>
                <h1 class={styles.main}>04</h1>
                <p class={clsx(styles.des, styles.four)}>
                    ГИБКАЯ СИСТЕМА ОПЛАТЫ
                </p>
            </div>
            <div class={isAnimated() ? styles.FiveMob : styles.nonDisplayLine}>
                <h1 class={styles.main}>05</h1>
                <p class={clsx(styles.des, styles.five)}>
                    БЕСПЛАТНЫЙ ПОДБОР УЧАСТКА И РАСЧЁТ ФУНДАМЕНТА
                </p>
            </div>
            </div>
        </>
    );
};