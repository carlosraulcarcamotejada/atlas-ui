import * as React from "react";

function PadlockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor" clipPath="url(#clip0_3401_25334)">
        <path d="M16.64 21.16H6.52C5.13 21.16 4 20.03 4 18.64v-7.13c0-1.39 1.13-2.52 2.52-2.52h10.11c1.39 0 2.52 1.13 2.52 2.52v2.28c0 .33-.27.6-.6.6-.33 0-.6-.27-.6-.6v-2.28c0-.73-.59-1.32-1.32-1.32H6.52c-.73 0-1.32.59-1.32 1.32v7.13c0 .73.59 1.32 1.32 1.32h10.11c.73 0 1.32-.59 1.32-1.32v-1.05c0-.33.27-.6.6-.6.33 0 .6.27.6.6v1.05c0 1.39-1.13 2.52-2.52 2.52h.01z"></path>
        <path d="M15.56 9.95c-.33 0-.6-.27-.6-.6V6.58c0-1.86-1.52-3.38-3.38-3.38-1.86 0-3.38 1.52-3.38 3.38v2.77c0 .33-.27.6-.6.6-.33 0-.6-.27-.6-.6V6.58a4.58 4.58 0 119.16 0v2.77c0 .33-.27.6-.6.6zM11.58 15.29a1.23 1.23 0 110-2.46 1.23 1.23 0 110 2.46zm0-1.27s-.03.01-.03.03l.03-.03z"></path>
        <path d="M11.58 17.3c-.33 0-.6-.27-.6-.6V14c0-.33.27-.6.6-.6.33 0 .6.27.6.6v2.7c0 .33-.27.6-.6.6z"></path>
      </g>
      <defs>
        <clipPath id="clip0_3401_25334">
          <path
            fill="currentColor"
            d="M0 0H15.16V19.16H0z"
            transform="translate(4 2)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export { PadlockIcon };
