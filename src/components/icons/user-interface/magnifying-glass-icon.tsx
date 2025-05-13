import { IconSVGProps } from "@/interfaces/components/icon/icon-svg-props";

const MagnifyingGlassIcon = (props: IconSVGProps) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g fill="currentColor" clipPath="url(#clip0_84_1676)">
        <path d="M10.952 19.975A8.85 8.85 0 0 1 4.47 17.19a.64.64 0 0 1 .017-.89c.244-.245.644-.227.887.017a7.64 7.64 0 0 0 5.577 2.4c4.245 0 7.707-3.465 7.707-7.734s-3.462-7.726-7.707-7.726c-4.246 0-7.708 3.466-7.708 7.735 0 .55.06 1.108.174 1.65.07.34-.14.672-.478.742a.613.613 0 0 1-.74-.48 9.4 9.4 0 0 1-.2-1.912C1.991 6.033 6.01 2 10.952 2c4.941 0 8.96 4.033 8.96 8.992 0 4.958-4.019 8.991-8.96 8.991z"></path>
        <path d="M21.374 22a.63.63 0 0 1-.444-.183l-3.82-3.833a.629.629 0 0 1 .887-.89l3.82 3.832a.634.634 0 0 1 0 .89.62.62 0 0 1-.443.184"></path>
      </g>
      <defs>
        <clipPath id="clip0_84_1676">
          <path fill="currentColor" d="M0 0h24v24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export { MagnifyingGlassIcon };
