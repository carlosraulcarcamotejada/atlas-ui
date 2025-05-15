import { IconProps } from "../type/IconProps";

const FacebookIcon = (props: IconProps): JSX.Element => {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_184_8442)">
        <path
          d="M15.6568 4.81234H18.0125V1.16028C16.8658 1.05724 15.7191 1 14.5724 1C11.1697 1 8.83893 2.9119 8.83893 6.40368V9.41463H5V13.5132H8.83893V24H13.4506V13.5132H17.2771L17.8504 9.41463H13.4382V6.80438C13.4382 5.60229 13.7872 4.81234 15.6443 4.81234H15.6568Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_184_8442">
          <rect
            width="13"
            height="23"
            fill="white"
            transform="translate(5 1)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export { FacebookIcon };
