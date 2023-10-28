import { createSignal, Show } from "solid-js"
import Video from "./video.mp4"

export default function PopupVideo() {
  const [isVideoOpen, setIsVideoOpen] = createSignal(false)
  const openVideo = () => setIsVideoOpen(true)
  const closeVideo = () => setIsVideoOpen(false)


  return (
    <>
      <button onClick={openVideo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="99" height="99" viewBox="0 0 99 99" fill="none">
          <path d="M49.4061 97.8121C76.14 97.8121 97.8121 76.14 97.8121 49.4061C97.8121 22.6721 76.14 1 49.4061 1C22.6721 1 1 22.6721 1 49.4061C1 76.14 22.6721 97.8121 49.4061 97.8121Z" stroke="#DEDEDE" stroke-width="2" stroke-miterlimit="10"/>
          <path d="M35 49.0698V32L49.7891 40.529L64.5782 49.0698L49.7891 57.6107L35 66.1396V49.0698Z" fill="black" fill-opacity="0.05" stroke="#DEDEDE" stroke-width="2" stroke-miterlimit="10"/>
        </svg>
      </button>
      <Show when={isVideoOpen()}>
        <div class="overlay" id="videoPopup">
          <div class="popupContainer">
            <button onClick={closeVideo} class="closeButton">&#10006;</button>
            <video id="videoPlayer" width="1080" height="720">
              <source src={Video}/>
            </video>
          </div>
        </div>
      </Show>
    </>
  )
}
