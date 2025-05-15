import * as React from "react";

function CornerChevronTopLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_409_17100)">
        <path
          d="M6.75709 18.01C7.17649 18.01 7.51419 17.6715 7.51419 17.2512V7.51763H17.1385C17.5579 7.51763 17.8956 7.17916 17.8956 6.75881C17.8956 6.33846 17.5579 6 17.144 6H6.75709C6.3377 6 6 6.33846 6 6.75881V17.2512C6 17.6715 6.3377 18.01 6.75709 18.01Z"
          fill="currentColor"
        />
        <path
          d="M17.2529 18.01C17.449 18.01 17.6396 17.9336 17.7867 17.7862C18.0808 17.4914 18.0808 17.011 17.7867 16.7107L7.36168 6.26203C7.06756 5.96724 6.58825 5.96724 6.28868 6.26203C5.98911 6.55682 5.99456 7.03722 6.28868 7.33747L16.7137 17.7862C16.8607 17.9336 17.0568 18.01 17.2475 18.01H17.2529Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_409_17100">
          <rect
            width="12.01"
            height="12.01"
            fill="white"
            transform="translate(6 6)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export { CornerChevronTopLeftIcon };
