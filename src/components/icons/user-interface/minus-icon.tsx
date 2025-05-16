import * as React from "react";

function MinusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_94_4025)">
        <path
          d="M18.5557 14H5.44435C5.20087 14 5 13.5448 5 12.9931C5 12.4414 5.20087 11.9862 5.44435 11.9862H18.5617C18.8052 11.9862 19.0061 12.4414 19.0061 12.9931C19.0061 13.5448 18.8052 14 18.5617 14H18.5557Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_94_4025">
          <rect
            width="14"
            height="2"
            fill="currentColor"
            transform="translate(5 12)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export { MinusIcon };
