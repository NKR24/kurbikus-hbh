import { createMediaQuery } from "@solid-primitives/media"
import hbhLogo from "../../assets/img/hbh-logo.svg"
import Menu from "../menu"
import { createMemo } from "solid-js"

export default function Navbar() {
  const state = createNavbarState()

  return (
    <div class="container">
      <nav
        class="
          flex 

          max-w-[1635px]
  
          h-[73px] md:h-[105px]
  
          px-[22px] md:px-[104px]
        "
      >
        <Logo />
        <div class="flex w-full justify-between leading-[1.3]">
          <span
            class="
              text-[8px] md:text-[12px] lg:text-[15px]
  
              w-[150px] md:w-[250px] lg:w-[370px]
  
              pt-[19px] md:pt-[52px]
              pl-[17px]
            "
          >
            {state.label()}
          </span>
          <div class="pt-[14px] md:pt-[23px]">
            <Menu size={state.menuButtonSize()} />
          </div>
        </div>
      </nav>
    </div>
  )
}

function createNavbarState() {
  const md = createMediaQuery("(min-width: 768px)")
  const menuButtonSize = createMemo(() => (md() ? "normal" : "small"))
  const label = createMemo(() =>
    md()
      ? "Производим каркасные дома по финской технологии с 2010 года. Московская область."
      : "каркасные домапо финской технологии с 2010 года. Московская область."
  )

  return {
    menuButtonSize,
    label,
  }
}

function Logo() {
  return (
    <div
      class="
        border-r-[1px]
        border-black

        min-w-[84px]
        md:min-w-[219px]
      "
    >
      <img
        src={hbhLogo}
        alt="HBH Logo"
        class="
          min-h-[29px]
          h-[29px]
          md:h-[58px]

          mt-[21px]
          md:mt-[33px]
        "
      />
    </div>
  )
}
