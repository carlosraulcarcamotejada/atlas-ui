import * as React from "react";

function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_123_3746)">
        <path
          d="M14.2973 18C14.477 18 14.6568 17.9322 14.793 17.8017C15.0653 17.5409 15.0653 17.113 14.793 16.8522L9.68869 11.9948L14.7276 7.14261C15 6.88174 15 6.45391 14.7276 6.19304C14.4552 5.93217 14.0085 5.93217 13.7362 6.19304L8.20153 11.5252C7.92916 11.7861 7.92916 12.2139 8.20153 12.4748L13.8015 17.807C13.9377 17.9374 14.1175 18 14.2973 18Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_123_3746">
          <rect width="7" height="12" fill="white" transform="translate(8 6)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export { ChevronLeftIcon };
