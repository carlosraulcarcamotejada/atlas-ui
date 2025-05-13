import { IconSVGProps } from "@/interfaces/components/icon/icon-svg-props";

const MinusIcon = (props: IconSVGProps) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0_94_4025)">
        <path
          fill="currentColor"
          d="M18.556 14H5.444C5.201 14 5 13.545 5 12.993s.2-1.007.444-1.007h13.118c.243 0 .444.455.444 1.007S18.806 14 18.562 14z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_94_4025">
          <path fill="currentColor" d="M5 12h14v2H5z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export { MinusIcon };
