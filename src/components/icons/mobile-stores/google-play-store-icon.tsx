import * as React from "react";

function GooglePlayStoreIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 26"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M.656.966a2.415 2.415 0 00-.183.977v22.116c0 .382.065.71.184.977L12.69 13.001.655.966zm.696 24.79c.446.19 1.028.13 1.662-.23l14.157-8.045-3.773-3.773L1.352 25.756zm16.721-8.787l4.442-2.523c1.397-.795 1.397-2.094 0-2.888l-4.444-2.525-3.966 3.968 3.968 3.969zm-.903-8.448L3.014.477c-.635-.36-1.216-.42-1.663-.23l12.047 12.046 3.772-3.772z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export { GooglePlayStoreIcon };
