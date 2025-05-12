import { IconSVGProps } from "@/interfaces/components/icon/icon-svg-props";

const XIcon = (props: IconSVGProps) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g fill="currentColor" clipPath="url(#clip0_127_5522)">
        <path d="M17.42 18.01a.6.6 0 0 1-.418-.172L6.172 7.013a.6.6 0 0 1 0-.84.6.6 0 0 1 .841 0l10.825 10.824a.59.59 0 0 1-.418 1.008z"></path>
        <path d="M6.59 18.01a.589.589 0 0 1-.418-1.008l10.825-10.83c.23-.23.606-.23.835 0 .23.23.23.606 0 .836L7.013 17.838a.6.6 0 0 1-.418.172z"></path>
      </g>
      <defs>
        <clipPath id="clip0_127_5522">
          <path fill="currentColor" d="M6 6h12.01v12.01H6z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export { XIcon };
