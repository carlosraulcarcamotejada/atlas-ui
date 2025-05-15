import * as React from "react";

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor" clipPath="url(#clip0_3401_25386)">
        <path d="M11.85 21.7c-2.71 0-5.33-1.13-7.19-3.11a.601.601 0 11.88-.82 8.562 8.562 0 006.31 2.73c4.77 0 8.65-3.88 8.65-8.65 0-4.77-3.88-8.65-8.65-8.65-4.77 0-8.65 3.88-8.65 8.65 0 .62.07 1.24.2 1.84.07.32-.14.64-.46.71a.602.602 0 01-.71-.46 9.76 9.76 0 01-.22-2.09C2 6.42 6.42 2 11.85 2s9.85 4.42 9.85 9.85-4.42 9.85-9.85 9.85z"></path>
        <path d="M15.82 13.15h-4.43c-.33 0-.6-.27-.6-.6V6.06c0-.33.27-.6.6-.6.33 0 .6.27.6.6v5.89h3.83c.33 0 .6.27.6.6 0 .33-.27.6-.6.6z"></path>
      </g>
      <defs>
        <clipPath id="clip0_3401_25386">
          <path
            fill="currentColor"
            d="M0 0H19.7V19.7H0z"
            transform="translate(2 2)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export { ClockIcon };
