import { JSX } from "react";
import { IconProps } from "../type/IconProps";

const MenuIcon = (props: IconProps): JSX.Element => {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_111_3280)">
        <path
          d="M20.4287 19H3.5713C3.25826 19 3 18.6593 3 18.2463C3 17.8334 3.25826 17.4926 3.5713 17.4926H20.4365C20.7496 17.4926 21.0078 17.8334 21.0078 18.2463C21.0078 18.6593 20.7496 19 20.4365 19H20.4287Z"
          fill="currentColor"
        />
        <path
          d="M20.4287 12.7537H3.5713C3.25826 12.7537 3 12.413 3 12C3 11.587 3.25826 11.2463 3.5713 11.2463H20.4365C20.7496 11.2463 21.0078 11.587 21.0078 12C21.0078 12.413 20.7496 12.7537 20.4365 12.7537H20.4287Z"
          fill="currentColor"
        />
        <path
          d="M20.4287 6.49706H3.5713C3.25826 6.49706 3 6.15635 3 5.74337C3 5.33039 3.25826 4.98969 3.5713 4.98969H20.4365C20.7496 4.98969 21.0078 5.33039 21.0078 5.74337C21.0078 6.15635 20.7496 6.49706 20.4365 6.49706H20.4287Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_111_3280">
          <rect
            width="18"
            height="14"
            fill="white"
            transform="translate(3 5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export { MenuIcon };
