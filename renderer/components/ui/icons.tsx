import {
  CalendarIcon as Calendar,
  ExternalLinkIcon as ExternalLink,
  GitHubLogoIcon as Github,
  LinkedInLogoIcon as LinkedIn,
  EnvelopeClosedIcon as Mail,
  MoonIcon as Moon,
  StarIcon as Star,
  SunIcon as Sun,
  PlayIcon as play,
  PauseIcon as Pause,
  TrackNextIcon as Next,
  TrackPreviousIcon as Previous,
  PersonIcon as Person,
  SpeakerLoudIcon as Speaker,
  InfoCircledIcon as Info,
  HeartFilledIcon as Heart,
  Cross1Icon as Close,
  ArrowLeftIcon as LeftArrow,
  ArrowRightIcon as RightArrow
} from "@radix-ui/react-icons";

interface IconProps {
  className?: string;
}

export const Icons = {
  disc: (props: IconProps) => (
    <>
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fill="currentColor"
          d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm39.2 96a39.77 39.77 0 0 0-5.84-14l34.23-34.24a87.54 87.54 0 0 1 20 48.28Zm-15.2 8a24 24 0 1 1-24-24a24 24 0 0 1 24 24Zm-24 88a88 88 0 1 1 56.28-155.6L150 94.64A40 40 0 1 0 167.2 136h48.43A88.11 88.11 0 0 1 128 216Z"
        ></path>
      </svg>
    </>
  ),
  sun: Sun,
  person: Person,
  speaker: Speaker,
  info: Info,
  heart: Heart,
  Close: Close,
  RightArrow: RightArrow,
  LeftArrow: LeftArrow,
  discord: (props: IconProps) => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
      ></path>
    </svg>
  ),
  fork: (props: IconProps) => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M224 64a32 32 0 1 0-40 31v9a16 16 0 0 1-16 16H88a16 16 0 0 1-16-16v-9a32 32 0 1 0-16 0v9a32 32 0 0 0 32 32h32v25a32 32 0 1 0 16 0v-25h32a32 32 0 0 0 32-32v-9a32.06 32.06 0 0 0 24-31ZM48 64a16 16 0 1 1 16 16a16 16 0 0 1-16-16Zm96 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16Zm48-112a16 16 0 1 1 16-16a16 16 0 0 1-16 16Z"
      ></path>
    </svg>
  ),
  external: ExternalLink,
  moon: Moon,
  twitter: (props: IconProps) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fill="currentColor"
          d="M8 2H1l8.26 11.014L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886L8 2Zm9 18L5 4h2l12 16h-2Z"
        ></path>
      </svg>
    );
  },
  email: Mail,
  calcom: Calendar,
  linkedin: LinkedIn,
  logo: (props: IconProps) => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 12a3 3 0 0 1 3-3h10a9 9 0 0 1 4.306 16.904l4.377 8.754a3 3 0 0 1-5.366 2.684L24.146 27H19v9a3 3 0 1 1-6 0V12Zm3-1a1 1 0 0 0-1 1v24a1 1 0 1 0 2 0V26a1 1 0 0 1 1-1h6.764a1 1 0 0 1 .894.553l5.448 10.894a1 1 0 1 0 1.788-.894l-4.834-9.669a1 1 0 0 1 .525-1.377A7.003 7.003 0 0 0 26 11H16Zm1 3a1 1 0 0 1 1-1h8a5 5 0 0 1 0 10h-8a1 1 0 0 1-1-1v-8Zm2 1v6h7a3 3 0 1 0 0-6h-7Z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  github: Github,
  loader: (props: IconProps) => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M3.055 13H5.07a7.002 7.002 0 0 0 13.858 0h2.016a9.001 9.001 0 0 1-17.89 0Zm0-2a9.001 9.001 0 0 1 17.89 0h-2.016A7.002 7.002 0 0 0 5.07 11H3.055Z"
      ></path>
    </svg>
  ),
  close: (props: IconProps) => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"
      ></path>
    </svg>
  ),
  star: Star,
  play: play,
  pause: Pause,
  next: Next,
  previous: Previous,
  send: (props: IconProps) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fill="currentColor"
          d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z"
        ></path>
      </svg>
    );
  },
  google: (props: IconProps) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fill="currentColor"
          d="M3.064 7.51A9.996 9.996 0 0 1 12 2c2.695 0 4.959.991 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123c-.2.6-.314 1.24-.314 1.9c0 .66.114 1.3.314 1.9c.786 2.364 2.99 4.123 5.595 4.123c1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045c0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49Z"
        ></path>
      </svg>
    );
  },
  reload: (props: IconProps) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fill="currentColor"
          d="M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.706 6.706 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95C10.46 2.64 18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0Z"
        ></path>
      </svg>
    );
  },
  anilist: (props: IconProps) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fill="currentColor"
          d="M6.361 2.943L0 21.056h4.942l1.077-3.133H11.4l1.052 3.133H22.9c.71 0 1.1-.392 1.1-1.101V17.53c0-.71-.39-1.101-1.1-1.101h-6.483V4.045c0-.71-.392-1.102-1.101-1.102h-2.422c-.71 0-1.101.392-1.101 1.102v1.064l-.758-2.166zm2.324 5.948l1.688 5.018H7.144z"
        ></path>
      </svg>
    );
  },

  youtube: (props: IconProps) =>{
    return (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1em" height="1em" viewBox="0 0 50 50">
      <path 
      fill="currentColor" 
      d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z">
      </path>
      </svg>
    );
  },
twitch: (props: IconProps) =>{
    return (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1em" height="1em" viewBox="0 0 50 50">
      <path 
      fill="currentColor"
      d="M 5.3125 1 L 2 9.8125 L 2 43 L 13 43 L 13 49 L 20.40625 49 L 26.40625 43 L 35.40625 43 L 48 30.4375 L 48 1 Z M 11 6 L 43 6 L 43 28 L 37 34 L 25 34 L 19 40 L 19 34 L 11 34 Z M 20 13 L 20 27 L 26 27 L 26 13 Z M 30 13 L 30 27 L 36 27 L 36 13 Z">
      </path>
</svg>
    );
  },
  mdl: (props: IconProps) =>{
    return (
<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="2em" height="2em">
  <defs>
    <image  width="369" height="144" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXEAAACQCAMAAADJNqsFAAAAAXNSR0IB2cksfwAAADZQTFRF////////////////////////////////////////////////////////////////////////AToNIAAAABJ0Uk5TAEAgYBAwcND/oLCQ4IBQwPAC7IWZWQAACw9JREFUeJztXemaq7gOZA+EBnLf/2VvIOSExbJUskxguuvHzHe6LalUDd7wkiRHIj00mh2ybxP4w6WR5t9m8MtQ+BQvj+NxHMYqKs2rPC/L4ontr2+1VaA83TnnbRqr6FrcW//vMzypJKm9+FERBaLcxv9UbqOmzjdoNtj+vm27Lu9Ls6auyEbmTXu/jzTv9+qJZbxaEckveF1nmQV9LorOikeaPB9CzXMYyDzEY21Smep4C2X1g3h/GJT99L/iG4ob1OR8jNL5HEoEFWJAOtVlktedkEMMNXCfeIzoitcPgG/ZfLLm/MZQo+5xr2gMNTcMD0mVXuZLQjrmYWooa0IohNoQhITuJPi/P42FRzwrVa8TiqC3xFF6p3fSas1HxzxUj7B6RRIggBsOv+KbfHXMQ/WomZFXsP9jFfeqNGxKhPiyV0SCR4B/GTcFGD2an/W/la48EQQU4Rm+dBrr5W2IBDJbDX6cncUu25PRMfdBSBGuyfvJohO6D+Kmwo5vkmSu3+iY+6BleIR3qbUKNyoexuFoTeJ6l1rrsBv2v57xG8YhniaacVAtazZJ3mJuSixnFct3tALjoFBFCsXXgUaeexg3JYZlf+DdxvcYB1wVOT/Mb16E+5bbazG/uNm/WOm2ruE8wIIDWQ2Q3yq9guKvF3ecDH/9e/8xgPMACw5lhfgt6j7YM8JNizFOllQkD4n9ORRPynDPiAct1pFwDqDcYFY/0CdPPO8QD1okyf+S/kbT4O1jKg65z8MdQ9xUeE2gvOs/DQdQbjirY/1iPhRYx1FxwNS2UsaBwsIv5gPHOoz7u4vQBwAdyWPcgk5ApPOE6PxPYnZUx9xQGum3CdDtNxTfBLnrOKB641nJuivK7A9UvNzE0GaC6q3IKpGseVU4PVTx4b17gGFwCsUFMax84n6EmJZQF+UyArVcQcf8T3EiGsvgHIp3HVOXIxMqXt4h2dJrND8T/asfO74JhXLQeXSg83sEu+Ie3pyVf+FS1g/+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"/>
    </defs>
      <use id="Background" href="#img1" x="17" y="128"/></svg>
    );
  },
  socials: (props: IconProps) =>{
    return (
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1.1em"
        height="1.1em" viewBox="0 0 256.000000 256.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
fill="currentColor" stroke="none">
<path d="M530 2324 c-206 -44 -375 -204 -446 -420 -24 -75 -29 -105 -29 -189
1 -136 31 -223 124 -360 23 -33 41 -65 41 -72 0 -7 -24 -48 -54 -91 -126 -185
-146 -362 -66 -570 76 -197 212 -322 408 -373 72 -19 116 -21 667 -25 325 -3
671 -2 770 3 l179 8 98 170 c54 94 98 173 98 177 0 4 -377 9 -837 10 l-838 3
-41 22 c-83 44 -134 131 -134 228 0 70 22 125 72 181 24 27 58 96 111 228 43
104 77 195 77 202 0 9 -12 14 -32 14 -42 0 -114 33 -152 68 -45 42 -76 118
-76 185 0 135 90 234 232 255 l52 7 98 170 c54 94 98 173 98 178 0 13 -351 6
-420 -9z"/>
<path d="M921 2163 l-101 -178 425 -3 c234 -1 425 -4 425 -7 0 -2 -172 -302
-383 -667 -349 -603 -382 -664 -363 -670 12 -3 336 -6 721 -7 l701 -1 102 179
c56 98 102 180 102 182 0 2 -214 3 -476 1 -263 -2 -481 1 -485 5 -5 5 161 301
367 658 207 358 380 658 385 668 9 16 -25 17 -655 17 l-664 0 -101 -177z"/>
<path d="M823 1458 c-9 -12 -143 -342 -143 -353 0 -3 89 -4 197 -3 l197 3 69
120 c38 66 85 148 104 183 l35 62 -225 0 c-168 0 -227 -3 -234 -12z"/>
</g>
</svg>
    );
  }
};