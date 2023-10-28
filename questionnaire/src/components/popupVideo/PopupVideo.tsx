import {createSignal} from "solid-js";
import styles from "./styles.module.scss"

export default function PopupVideo() {
    const [isVideoOpen, setIsVideoOpen] = createSignal(false)
    const openVideo = () => setIsVideoOpen(true)
    const closeVideo = () => setIsVideoOpen(false)


    return (
        <div class={styles.overlay} id="videoPopup">
            <div class="popup-container">
                <button onClick={closeVideo} class="close-button">&#10006;</button>
                <video id="videoPlayer" width="1080" height="720">
                </video>
            </div>
        </div>
    )
}
