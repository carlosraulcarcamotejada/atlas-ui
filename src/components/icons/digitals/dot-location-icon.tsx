import * as React from "react";

function DotLocationIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor" clipPath="url(#clip0_3401_25384)">
        <path d="M11.65 13.16c-1.94 0-3.52-1.58-3.52-3.52s1.58-3.52 3.52-3.52 3.52 1.58 3.52 3.52-1.58 3.52-3.52 3.52zm0-5.83c-1.28 0-2.32 1.04-2.32 2.32 0 1.28 1.04 2.32 2.32 2.32 1.28 0 2.32-1.04 2.32-2.32 0-1.28-1.04-2.32-2.32-2.32z"></path>
        <path d="M11.65 21.25c-.78 0-2.51-2.01-3.46-3.2a.591.591 0 01.09-.84c.26-.21.64-.17.84.09 1.22 1.52 2.15 2.41 2.53 2.69 1.25-.87 6.45-7.07 6.45-10.34 0-3.56-2.89-6.45-6.45-6.45S5.2 6.09 5.2 9.65c0 1.14.64 2.78 1.84 4.72.17.28.09.65-.19.83a.61.61 0 01-.83-.19C4.68 12.84 4 11.03 4 9.65 4 5.43 7.43 2 11.65 2c4.22 0 7.65 3.43 7.65 7.65 0 2.4-2.1 5.62-3.35 7.32-.03.04-3.17 4.29-4.29 4.29l-.01-.01z"></path>
      </g>
      <defs>
        <clipPath id="clip0_3401_25384">
          <path
            fill="currentColor"
            d="M0 0H15.3V19.25H0z"
            transform="translate(4 2)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export { DotLocationIcon };
