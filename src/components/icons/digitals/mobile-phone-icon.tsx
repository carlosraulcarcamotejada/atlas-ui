import * as React from "react";

function MobilePhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor" clipPath="url(#clip0_3401_25388)">
        <path d="M15.6 21.22H8.63C7.18 21.22 6 20.04 6 18.59v-3.41c0-.33.27-.6.6-.6h7.45c.33 0 .6.27.6.6 0 .33-.27.6-.6.6H7.2v2.81c0 .79.64 1.43 1.43 1.43h6.98c.79 0 1.43-.64 1.43-1.43V4.63c0-.79-.64-1.43-1.43-1.43H8.63c-.79 0-1.43.64-1.43 1.43v6.98c0 .33-.27.6-.6.6-.33 0-.6-.27-.6-.6V4.63C6 3.18 7.18 2 8.63 2h6.98c1.45 0 2.63 1.18 2.63 2.63V18.6c0 1.45-1.18 2.63-2.63 2.63l-.01-.01z"></path>
        <path d="M12.11 18.93c-.26 0-.52-.1-.71-.29-.18-.19-.29-.44-.29-.71 0-.27.11-.52.29-.7.28-.28.73-.37 1.09-.22.13.05.24.12.33.22.19.18.29.44.29.7 0 .07 0 .13-.02.2-.01.06-.03.13-.06.19a.7.7 0 01-.09.17c-.03.05-.08.1-.12.15a.986.986 0 01-.71.29z"></path>
      </g>
      <defs>
        <clipPath id="clip0_3401_25388">
          <path
            fill="currentColor"
            d="M0 0H12.23V19.22H0z"
            transform="translate(6 2)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export { MobilePhoneIcon };
