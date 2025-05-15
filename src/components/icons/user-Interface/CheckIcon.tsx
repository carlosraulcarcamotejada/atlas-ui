import { JSX } from "react";
import { IconProps } from "../type/IconProps";

export const CheckIcon = (props: IconProps): JSX.Element => {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_94_4024)">
        <path
          d="M9.60953 18C9.31124 18 9.02952 17.8791 8.81409 17.6544L4.33144 12.9719C3.89229 12.514 3.89229 11.7797 4.33144 11.3218C4.77059 10.8639 5.47489 10.8639 5.91404 11.3218L9.61782 15.1836L18.086 6.34558C18.5251 5.8877 19.2294 5.8877 19.6686 6.34558C20.1077 6.80346 20.1077 7.5378 19.6686 7.99569L10.405 17.6544C10.1978 17.8704 9.90782 18 9.60953 18Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_94_4024">
          <rect
            width="16"
            height="12"
            fill="white"
            transform="translate(4 6)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
