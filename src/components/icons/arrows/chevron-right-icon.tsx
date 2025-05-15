import * as React from "react";

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_123_3748)">
        <path
          d="M9.69725 18C9.51749 18 9.33772 17.9322 9.20153 17.8017C8.92916 17.5409 8.92916 17.113 9.20153 16.8522L14.3058 11.9948L9.27235 7.14261C8.99998 6.88174 8.99998 6.45391 9.2778 6.19304C9.55017 5.93217 9.99686 5.93217 10.2692 6.19304L15.7984 11.5252C16.0708 11.7861 16.0708 12.2139 15.7984 12.4748L10.193 17.807C10.0568 17.9374 9.87702 18 9.69725 18Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_123_3748">
          <rect width="7" height="12" fill="white" transform="translate(9 6)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export { ChevronRightIcon };
