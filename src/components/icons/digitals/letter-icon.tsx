import * as React from "react";

function LetterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 20 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16.79 15.29H2.56C1.15 15.29 0 14.14 0 12.73V2.56C0 1.15 1.15 0 2.56 0h14.23c1.41 0 2.56 1.15 2.56 2.56V7.8c0 .33-.27.6-.6.6-.33 0-.6-.27-.6-.6V2.56c0-.75-.61-1.36-1.36-1.36H2.56c-.75 0-1.36.61-1.36 1.36v10.17c0 .75.61 1.36 1.36 1.36h14.23c.75 0 1.36-.61 1.36-1.36V11.3c0-.33.27-.6.6-.6.33 0 .6.27.6.6v1.43c0 1.41-1.15 2.56-2.56 2.56z"
      ></path>
      <path
        fill="currentColor"
        d="M9.67 9.59c-.51 0-1.02-.2-1.42-.59L.66 1.53 1.5.67l7.6 7.47c.32.32.83.32 1.15 0L17.81.71l.84.86-7.56 7.44c-.4.39-.91.59-1.42.59v-.01z"
      ></path>
    </svg>
  );
}

export { LetterIcon };
