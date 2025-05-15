import { JSX } from "react";
import { IconProps } from "../type/IconProps";

const CardsTransactionsIcon = (props: IconProps): JSX.Element => {
  return (
    <svg
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g fill="currentColor" clipPath="url(#clip0_3401_25477)">
        <path
          fillRule="evenodd"
          d="M10.11 7.36a.2.2 0 00-.2.2v3.15c0 1.53.97 2.52 2.5 2.52h1.29a.2.2 0 00.2-.2v-1.55a.2.2 0 00-.2-.2h-.83c-.11 0-.61-.01-.61-.61V7.55a.2.2 0 00-.2-.2H10.1l.01.01z"
          clipRule="evenodd"
        ></path>
        <path
          fillRule="evenodd"
          d="M12.75 8.23c-.11 0-.18.08-.18.18v1.78c0 .11.09.2.2.2h.95c.11 0 .47.01.47.61v2.05c0 .11.09.2.2.2h1.99a.2.2 0 00.2-.2v-2.3c0-1.53-.97-2.52-2.5-2.52h-1.33z"
          clipRule="evenodd"
        ></path>
        <path d="M16.6 22.41H8.79C6.15 22.41 4 20.26 4 17.62V5.83c0-.33.27-.6.6-.6.33 0 .6.27.6.6v11.79c0 1.98 1.61 3.59 3.59 3.59h7.81c.33 0 .6.27.6.6 0 .33-.27.6-.6.6z"></path>
        <path d="M17.25 19.79H9.2c-1.41 0-2.56-1.15-2.56-2.56V4.56C6.64 3.15 7.79 2 9.2 2h8.05c1.41 0 2.56 1.15 2.56 2.56v8.01c0 .33-.27.6-.6.6-.33 0-.6-.27-.6-.6V4.56c0-.75-.61-1.36-1.36-1.36H9.2c-.75 0-1.36.61-1.36 1.36v12.66c0 .75.61 1.36 1.36 1.36h8.05c.75 0 1.36-.61 1.36-1.36v-.98c0-.33.27-.6.6-.6.33 0 .6.27.6.6v.98c0 1.41-1.15 2.56-2.56 2.56v.01z"></path>
      </g>
      <defs>
        <clipPath id="clip0_3401_25477">
          <path
            fill="#fff"
            d="M0 0H15.82V20.41H0z"
            transform="translate(4 2)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export { CardsTransactionsIcon };
