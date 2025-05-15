import * as React from "react";

function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor" clipPath="url(#clip0_3401_25313)">
        <path d="M18.53 21.94H4.69C3.21 21.94 2 20.73 2 19.25v-6.08c0-.33.27-.6.6-.6.33 0 .6.27.6.6v6.08c0 .82.67 1.49 1.49 1.49h13.84c.82 0 1.49-.67 1.49-1.49v-6.08c0-.33.27-.6.6-.6.33 0 .6.27.6.6v6.08c0 1.48-1.21 2.69-2.69 2.69z"></path>
        <path d="M11.67 15.32c-.33 0-.6-.27-.6-.6V3.6c0-.33.27-.6.6-.6.33 0 .6.27.6.6v11.12c0 .33-.27.6-.6.6z"></path>
        <path d="M11.67 15.97c-.32 0-.62-.13-.85-.35l-4.01-4.05a.61.61 0 010-.85.61.61 0 01.85 0l4.01 4.05 3.95-3.99a.6.6 0 01.85 0c.24.23.24.61 0 .85l-3.95 3.99c-.23.23-.53.35-.85.35z"></path>
      </g>
      <defs>
        <clipPath id="clip0_3401_25313">
          <path
            fill="currentColor"
            d="M0 0H19.22V18.94H0z"
            transform="translate(2 3)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export { DownloadIcon };
