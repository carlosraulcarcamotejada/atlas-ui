import * as React from "react";

function PencilOnPaperIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor" clipPath="url(#clip0_3401_25318)">
        <path d="M18.57 21.27H4.6c-1.43 0-2.6-1.17-2.6-2.6V4.7c0-1.44 1.17-2.6 2.6-2.6h6c.33 0 .6.27.6.6 0 .33-.27.6-.6.6h-6c-.77 0-1.4.63-1.4 1.4v13.97c0 .77.63 1.4 1.4 1.4h13.97c.77 0 1.4-.63 1.4-1.4V12.5c0-.33.27-.6.6-.6.33 0 .6.27.6.6v6.17c0 1.43-1.17 2.6-2.6 2.6z"></path>
        <path d="M10.78 17.46l-4.33-.06c-.33 0-.59-.27-.59-.59l-.06-4.33c0-.16.06-.32.18-.43l9.87-9.87c.11-.11.26-.18.42-.18.16 0 .31.06.42.18l4.38 4.39c.23.23.23.61 0 .85l-6.14 6.14a.61.61 0 01-.85 0 .6.6 0 010-.85L19.79 7l-3.54-3.54L7 12.72l.05 3.49 3.49.05 1.66-1.66a.61.61 0 01.85 0 .6.6 0 010 .85l-1.84 1.84c-.11.11-.26.18-.42.18l-.01-.01z"></path>
        <path d="M17.76 10.09c-.15 0-.31-.06-.42-.18l-3.89-3.89a.61.61 0 010-.85.61.61 0 01.85 0l3.89 3.89c.23.23.23.61 0 .85-.12.12-.27.18-.42.18h-.01z"></path>
      </g>
      <defs>
        <clipPath id="clip0_3401_25318">
          <path
            fill="currentColor"
            d="M0 0H19.25V19.27H0z"
            transform="translate(2 2)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export { PencilOnPaperIcon };
