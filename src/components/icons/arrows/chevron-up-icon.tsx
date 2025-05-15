import * as React from "react";

function ChevronUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 1 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_123_3747)">
        <path
          d="M12.5 8C12.6865 8 12.8731 8.08093 13.0144 8.23658L18.7909 14.6366C19.0735 14.9479 19.0735 15.4584 18.7909 15.7696C18.5083 16.0809 18.0505 16.0809 17.7622 15.7696L12.4944 9.92996L7.23784 15.6887C6.95524 16 6.49741 16 6.20915 15.6887C5.92654 15.3774 5.92654 14.8669 6.20915 14.5556L11.9857 8.23035C12.127 8.07471 12.3135 8 12.5 8Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_123_3747">
          <rect width="13" height="8" fill="white" transform="translate(6 8)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export { ChevronUpIcon };
