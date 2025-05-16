import * as React from "react";

function MoreHorizontalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="m18 8 4 4-4 4M2 12h20M6 8l-4 4 4 4"></path>
    </svg>
  );
}

export { MoreHorizontalIcon };
