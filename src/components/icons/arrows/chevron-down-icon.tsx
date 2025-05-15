import * as React from "react";

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 -2 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_51_1032)">
        <path
          d="M12.0013 15.0027C11.8005 15.0027 11.5997 14.9117 11.4475 14.7366L5.2282 7.53722C4.92393 7.18706 4.92393 6.61279 5.2282 6.26262C5.53248 5.91246 6.0254 5.91246 6.33576 6.26262L12.0013 12.8247L17.6669 6.35367C17.9711 6.0035 18.4701 6.0035 18.7744 6.36067C19.0787 6.71083 19.0787 7.2851 18.7744 7.63527L12.5612 14.7436C12.409 14.9187 12.2082 15.0027 12.0074 15.0027H12.0013Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_51_1032">
          <rect width="12" height="7" fill="white" transform="translate(6 8)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export { ChevronDownIcon };
