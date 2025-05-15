import { JSX } from "react";
import { IconProps } from "../type/IconProps";

const SlashIcon = (props: IconProps): JSX.Element => {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_320_16473)">
        <path
          d="M7.99747 20.3227C7.74463 20.3958 7.47003 20.3963 7.20779 20.2999C6.69173 20.0994 6.47726 19.5864 6.72814 19.1585L15.81 3.37455C16.0605 2.93928 16.6701 2.75023 17.1861 2.95079C17.7022 3.15134 17.9167 3.66431 17.6658 4.09221L8.58395 19.8762C8.46293 20.0899 8.24148 20.25 7.99747 20.3227Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_16473">
          <rect
            width="12.0027"
            height="16.9767"
            fill="white"
            transform="translate(5.73462 3.4823) rotate(-3.17388)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export { SlashIcon };
