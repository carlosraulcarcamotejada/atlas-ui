import { IconSVGProps } from "@/interfaces/components/icon/icon-svg-props";

const ChevronDownIcon = (props: IconSVGProps) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0_51_1032)">
        <path
          fill="currentColor"
          d="M12.001 15.003a.74.74 0 0 1-.553-.266l-6.22-7.2a1.004 1.004 0 0 1 0-1.274c.304-.35.797-.35 1.108 0L12 12.825l5.666-6.471a.71.71 0 0 1 1.107.007c.305.35.305.924 0 1.274l-6.213 7.109a.73.73 0 0 1-.554.259z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_51_1032">
          <path fill="currentColor" d="M6 8h12v7H6z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export { ChevronDownIcon };
