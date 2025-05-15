import * as React from "react";

function WristWatchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor" clipPath="url(#clip0_3401_25450)">
        <path d="M12.5 18.72c-3.58 0-6.5-2.91-6.5-6.5s2.91-6.49 6.5-6.49a6.5 6.5 0 110 13v-.01zm0-11.79a5.31 5.31 0 00-5.3 5.3c0 2.92 2.38 5.3 5.3 5.3s5.3-2.38 5.3-5.3-2.38-5.3-5.3-5.3z"></path>
        <path d="M15.87 7.68c-.33 0-.6-.27-.6-.6V3.2H9.72v3.88c0 .33-.27.6-.6.6-.33 0-.6-.27-.6-.6V2.6c0-.33.27-.6.6-.6h6.76c.33 0 .6.27.6.6v4.48c0 .33-.27.6-.6.6h-.01zM15.87 22.39H9.12c-.33 0-.6-.27-.6-.6v-4.48c0-.33.27-.6.6-.6.33 0 .6.27.6.6v3.88h5.56v-3.88c0-.33.27-.6.6-.6.33 0 .6.27.6.6v4.48c0 .33-.27.6-.6.6h-.01zM11.05 13.83c-.22 0-.43-.12-.53-.33a.6.6 0 01.26-.81l1.19-.61V9.65c0-.33.27-.6.6-.6.33 0 .6.27.6.6v2.8c0 .23-.13.43-.33.53l-1.52.78c-.09.04-.18.07-.27.07z"></path>
      </g>
      <defs>
        <clipPath id="clip0_3401_25450">
          <path
            fill="currentColor"
            d="M0 0H12.99V20.39H0z"
            transform="translate(6 2)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export { WristWatchIcon };
