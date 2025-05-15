import { JSX } from "react";
import { IconProps } from "../type/IconProps";

const PlusIcon = (props: IconProps): JSX.Element => {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_140_6098)">
        <path
          d="M12.32 19.8678C12.2365 19.9513 12.1252 20 12 20C11.7496 20 11.5478 19.7983 11.5478 19.5478V4.45217C11.5478 4.20174 11.7496 4 12 4C12.2504 4 12.4522 4.20174 12.4522 4.45217V19.5478C12.4522 19.673 12.4035 19.7843 12.32 19.8678Z"
          fill="currentColor"
        />
        <path
          d="M19.8678 12.32C19.7843 12.4035 19.673 12.4522 19.5478 12.4522H4.45217C4.20174 12.4522 4 12.2504 4 12C4 11.7496 4.20174 11.5478 4.45217 11.5478H19.5478C19.7983 11.5478 20 11.7496 20 12C20 12.1252 19.9513 12.2365 19.8678 12.32Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_140_6098">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(4 4)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export { PlusIcon };
