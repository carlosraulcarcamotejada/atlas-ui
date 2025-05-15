import * as React from "react";

function PencilIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor" clipPath="url(#clip0_3401_25317)">
        <path d="M20.47 21.1H2.6c-.33 0-.6-.27-.6-.6 0-.33.27-.6.6-.6h17.88c.33 0 .6.27.6.6 0 .33-.27.6-.6.6h-.01zM8.8 17.1H4.54a.613.613 0 01-.59-.62l.04-4.22c0-.16.06-.31.18-.42l9.65-9.66a.61.61 0 01.85 0l4.23 4.23c.11.11.18.27.18.42 0 .15-.06.31-.18.42l-5.97 5.97a.61.61 0 01-.85 0 .6.6 0 010-.85l5.54-5.54-3.38-3.38-9.07 9.07-.03 3.37h3.41l1.69-1.68a.61.61 0 01.85 0 .6.6 0 010 .85l-1.86 1.86c-.11.11-.26.18-.42.18H8.8z"></path>
        <path d="M15.6 10.08c-.15 0-.31-.06-.42-.18l-3.97-3.97a.61.61 0 010-.85.6.6 0 01.85 0l3.97 3.97c.23.23.23.61 0 .85-.12.12-.27.18-.42.18h-.01z"></path>
      </g>
      <defs>
        <clipPath id="clip0_3401_25317">
          <path
            fill="currentColor"
            d="M0 0H19.07V19.1H0z"
            transform="translate(2 2)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export { PencilIcon };
