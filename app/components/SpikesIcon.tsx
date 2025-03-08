import { SVGProps } from "react";

export function SpikesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M25.5 0.5H6.5C2.91015 0.5 0 3.41015 0 7V26C0 29.5899 2.91015 32.5 6.5 32.5H25.5C29.0899 32.5 32 29.5899 32 26V7C32 3.41015 29.0899 0.5 25.5 0.5Z"
        fill="url(#paint0_linear_749_1673)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.125 16.8125C26.125 22.4389 21.5639 27 15.9375 27C10.3111 27 5.75 22.4389 5.75 16.8125C5.75 11.1861 10.3111 6.625 15.9375 6.625C21.5639 6.625 26.125 11.1861 26.125 16.8125ZM10.1778 21.3184L14.8257 13.2679C15.3549 12.3513 16.678 12.3513 17.2073 13.2679L21.7874 21.2009C22.7058 19.9786 23.25 18.4591 23.25 16.8125C23.25 12.7739 19.9761 9.5 15.9375 9.5C11.8989 9.5 8.625 12.7739 8.625 16.8125C8.625 18.5123 9.20495 20.0766 10.1778 21.3184Z"
        fill="#FDF7FF"
      />
      <defs>
        <linearGradient
          id="paint0_linear_749_1673"
          x1="16"
          y1="0.5"
          x2="16"
          y2="32.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#623DFF" />
          <stop offset="1" stopColor="#433898" />
        </linearGradient>
      </defs>
    </svg>
  );
}
