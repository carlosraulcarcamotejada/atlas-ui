import { JSX } from "react";
import { IconProps } from "../type/IconProps";

const XIcon = (props: IconProps): JSX.Element => {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_127_5522)">
        <path
          d="M17.4199 18.01C17.2685 18.01 17.1171 17.9526 17.0022 17.8377L6.17232 7.01302C5.94256 6.77804 5.94256 6.40207 6.17232 6.17232C6.4073 5.94256 6.77804 5.94256 7.01302 6.17232L17.8377 16.997C18.0674 17.2267 18.0674 17.6027 17.8377 17.8325C17.7228 17.9473 17.5714 18.0048 17.4199 18.0048V18.01Z"
          fill="currentColor"
        />
        <path
          d="M6.59006 18.01C6.43863 18.01 6.2872 17.9526 6.17232 17.8377C5.94256 17.6079 5.94256 17.232 6.17232 17.0022L16.997 6.17232C17.2267 5.94256 17.6027 5.94256 17.8325 6.17232C18.0622 6.40207 18.0622 6.77804 17.8325 7.0078L7.01302 17.8377C6.89814 17.9526 6.74671 18.01 6.59528 18.01H6.59006Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_127_5522">
          <rect
            width="12.01"
            height="12.01"
            fill="white"
            transform="translate(6 6)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export { XIcon };
