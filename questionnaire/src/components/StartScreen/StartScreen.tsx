import styles from "./styles.module.scss"
import hbhLogo from "./logo.svg"
import name from "./name.svg"
import { createSignal, JSX, onMount } from "solid-js"

type Props = {
  LowerSection: ((nextComponentVisible: boolean) => JSX.Element) | JSX.Element
  LowerClass: string
}

export default function StartScreen(props: Props) {
  const [isVisible, setIsVisible] = createSignal(true)
  const [nextComponentVisible, setNextComponentVisible] = createSignal(false)

  onMount(() => {
    setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => {
        setNextComponentVisible(true)
      }, 0)
    }, 6500)
  })

  return (
    <>
      {isVisible() && (
        <div class={styles.fadeOut}>
          <div class={styles.ContainerMain}>
            <div class={styles.Section}>
              <div class={styles.first}>
                <img src={hbhLogo} alt="logo" />
              </div>
              <div class={styles.second}>
                <svg
                  width="129"
                  height="58"
                  viewBox="0 0 129 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_86)">
                    <path
                      class={styles.letter1}
                      d="M9.36218 54.0496V44.9814H5.76134H5.04117H1.44034V54.0496H0V58H1.89044V55.8452H5.04117H5.76134H8.91207V58H10.8025V54.0496H9.36218ZM7.47174 54.0496H5.76134H5.13119H3.51082V46.7771H5.13119H5.85136H7.47174V54.0496Z"
                      fill="black"
                    />
                    <path
                      class={styles.letter2}
                      d="M11.7031 52.6129V48.3033C12.3333 46.3281 14.4938 44.8018 17.1044 44.8018C19.715 44.8018 21.8755 46.3281 22.5056 48.3033V52.6129C21.8755 54.5881 19.715 56.1145 17.1044 56.1145C14.4938 56.0247 12.4233 54.5881 11.7031 52.6129ZM20.6152 52.0742V48.842C20.2551 47.585 18.8148 46.5974 17.1044 46.5974C15.394 46.5974 13.9536 47.6748 13.5936 48.842V52.0742C13.9536 53.3312 15.394 54.3188 17.1044 54.3188C18.8148 54.3188 20.3451 53.2414 20.6152 52.0742Z"
                      fill="black"
                    />
                    <path
                      class={styles.letter3}
                      d="M36.4583 44.9814V55.7554H34.5679V47.226L31.0571 54.0496H29.7067L26.2859 47.226V55.7554H24.3955V44.9814H27.0061L30.3369 51.6254L33.6677 44.9814H36.4583Z"
                      fill="black"
                    />
                    <path
                      class={styles.letter4}
                      d="M49.7819 51.9844V53.8698C49.3318 55.037 47.7114 56.1144 45.731 56.1144C43.6605 56.1144 42.0401 55.1268 41.5 53.6005L43.2104 52.7924C43.6605 53.8698 44.6507 54.4085 45.731 54.4085C46.8112 54.4085 47.6214 53.9596 47.8915 53.2413V52.2537C47.6214 51.6252 46.8112 51.0865 45.731 51.0865H44.6507V49.3806H45.731C46.7212 49.3806 47.4414 48.9317 47.7114 48.3032V47.4952C47.4414 46.8667 46.6312 46.4178 45.731 46.4178C44.6507 46.4178 43.7505 46.9565 43.3004 47.9441L41.59 47.1361C42.2202 45.6995 43.6605 44.7119 45.731 44.7119C47.6214 44.7119 49.1518 45.6995 49.6019 46.8667V48.6624C49.4218 49.2011 48.8817 49.8296 48.1616 50.1887C48.9717 50.7274 49.5119 51.2661 49.7819 51.9844Z"
                      fill="black"
                    />
                    <path
                      class={styles.letter5}
                      d="M61.2146 55.3963V55.7554H59.3242L58.424 53.4211H53.2028L52.3025 55.7554H50.4121V55.3963L54.5531 44.9814H57.0737L61.2146 55.3963ZM57.7038 51.7152L55.8134 46.7771L53.9229 51.7152H57.7038Z"
                      fill="black"
                    />
                    <path
                      class={styles.letter6}
                      d="M75.0772 54.0496V44.9814H71.4764H70.7562H67.1554V54.0496H65.625V58H67.5154V55.8452H70.6662H71.3863H74.5371V58H76.4275V54.0496H75.0772ZM73.1868 54.0496H71.5664H70.8462H69.2258V46.7771H70.8462H71.5664H73.1868V54.0496Z"
                      fill="black"
                    />
                    <path
                      class={styles.letter7}
                      d="M77.418 52.6129V48.3033C78.0481 46.3281 80.2086 44.8018 82.8192 44.8018C85.4298 44.8018 87.5903 46.3281 88.2205 48.3033V52.6129C87.5903 54.5881 85.4298 56.1145 82.8192 56.1145C80.2086 56.0247 78.0481 54.5881 77.418 52.6129ZM86.33 52.0742V48.842C85.97 47.585 84.5296 46.5974 82.8192 46.5974C81.1088 46.5974 79.6685 47.6748 79.3084 48.842V52.0742C79.6685 53.3312 81.1088 54.3188 82.8192 54.3188C84.5296 54.3188 85.97 53.2414 86.33 52.0742Z"
                      fill="black"
                    />
                    <path
                      class={styles.letter8}
                      d="M102.174 44.9814V55.7554H100.284V47.226L96.7729 54.0496H95.4226L92.0018 47.226V55.7554H90.1113V44.9814H92.7219L96.0527 51.6254L99.3835 44.9814H102.174Z"
                      fill="black"
                    />
                    <path
                      class={styles.letter9}
                      d="M104.154 52.6129V48.3033C104.784 46.3281 106.945 44.8018 109.556 44.8018C112.166 44.8018 114.327 46.3281 114.957 48.3033V52.6129C114.327 54.5881 112.166 56.1145 109.556 56.1145C106.945 56.0247 104.784 54.5881 104.154 52.6129ZM113.066 52.0742V48.842C112.706 47.585 111.266 46.5974 109.556 46.5974C107.845 46.5974 106.405 47.6748 106.045 48.842V52.0742C106.405 53.3312 107.845 54.3188 109.556 54.3188C111.266 54.3188 112.706 53.2414 113.066 52.0742Z"
                      fill="black"
                    />
                    <path
                      class={styles.letter10}
                      d="M128.91 44.9814V55.7554H127.02V47.226L123.509 54.0496H122.158L118.738 47.226V55.7554H116.847V44.9814H119.458L122.789 51.6254L126.119 44.9814H128.91Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_86">
                      <rect width="129" height="58" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
      {nextComponentVisible() && (
        <div class={props.LowerClass}>
          {typeof props.LowerSection === "function"
            ? props.LowerSection(nextComponentVisible())
            : props.LowerSection}
        </div>
      )}
    </>
  )
}
