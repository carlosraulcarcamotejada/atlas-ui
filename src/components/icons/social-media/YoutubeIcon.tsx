import { IconProps } from "../type/IconProps";

const YoutubeIcon = (props: IconProps): JSX.Element => {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_184_8444)">
        <path
          d="M22.5409 6.65494C22.2922 5.60556 21.5461 4.78704 20.5991 4.5037C18.887 4 12 4 12 4C12 4 5.12261 4 3.40087 4.5037C2.45391 4.78704 1.71739 5.60556 1.45913 6.65494C1 8.55432 1 12.5 1 12.5C1 12.5 1 16.4562 1.45913 18.3451C1.70783 19.3944 2.45391 20.213 3.40087 20.4963C5.11304 21 12 21 12 21C12 21 18.8774 21 20.5991 20.4963C21.5461 20.213 22.2922 19.3944 22.5409 18.3451C23 16.4457 23 12.5 23 12.5C23 12.5 23 8.54383 22.5409 6.65494ZM9.75217 16.0889V8.91111L15.5009 12.5L9.75217 16.0889Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_184_8444">
          <rect
            width="22"
            height="17"
            fill="white"
            transform="translate(1 4)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export { YoutubeIcon };
