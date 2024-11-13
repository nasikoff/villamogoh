import * as React from "react";

import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 28,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 250 250"
    width={size || width}
    {...props}
  >
 <path fill="none" strokeLinecap="round" strokeWidth="15" d="m54.18678,194.70262l34.49819,-74.434l34.49818,55.8255l34.49819,-55.8255l34.49819,74.434" id="svg_2" strokeLinejoin="round" stroke="currentColor"/>
 <path fill="none" strokeLinecap="round" strokeWidth="15" d="m96.32979,103.28423l26.68016,-57.28745l26.68015,57.28745" id="svg_12" stroke="currentColor"/>
  </svg>
);

 
export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const NextUILogo: React.FC<IconSvgProps> = (props) => {
  const { width, height = 40 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 161 32"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="fill-black dark:fill-white"
        d="M55.6827 5V26.6275H53.7794L41.1235 8.51665H40.9563V26.6275H39V5H40.89L53.5911 23.1323H53.7555V5H55.6827ZM67.4831 26.9663C66.1109 27.0019 64.7581 26.6329 63.5903 25.9044C62.4852 25.185 61.6054 24.1633 61.0537 22.9582C60.4354 21.5961 60.1298 20.1106 60.1598 18.6126C60.132 17.1113 60.4375 15.6228 61.0537 14.2563C61.5954 13.0511 62.4525 12.0179 63.5326 11.268C64.6166 10.5379 65.8958 10.16 67.1986 10.1852C68.0611 10.1837 68.9162 10.3468 69.7187 10.666C70.5398 10.9946 71.2829 11.4948 71.8992 12.1337C72.5764 12.8435 73.0985 13.6889 73.4318 14.6152C73.8311 15.7483 74.0226 16.9455 73.9968 18.1479V19.0773H63.2262V17.4194H72.0935C72.1083 16.4456 71.8952 15.4821 71.4714 14.6072C71.083 13.803 70.4874 13.1191 69.7472 12.6272C68.9887 12.1348 68.1022 11.8812 67.2006 11.8987C66.2411 11.8807 65.3005 12.1689 64.5128 12.7223C63.7332 13.2783 63.1083 14.0275 62.6984 14.8978C62.2582 15.8199 62.0314 16.831 62.0352 17.8546V18.8476C62.009 20.0078 62.2354 21.1595 62.6984 22.2217C63.1005 23.1349 63.7564 23.9108 64.5864 24.4554C65.4554 24.9973 66.4621 25.2717 67.4831 25.2448C68.1676 25.2588 68.848 25.1368 69.4859 24.8859C70.0301 24.6666 70.5242 24.3376 70.9382 23.919C71.3183 23.5345 71.6217 23.0799 71.8322 22.5799L73.5995 23.1604C73.3388 23.8697 72.9304 24.5143 72.4019 25.0506C71.8132 25.6529 71.1086 26.1269 70.3314 26.4434C69.4258 26.8068 68.4575 26.9846 67.4831 26.9663V26.9663ZM78.8233 10.4075L82.9655 17.325L87.1076 10.4075H89.2683L84.1008 18.5175L89.2683 26.6275H87.103L82.9608 19.9317L78.8193 26.6275H76.6647L81.7711 18.5169L76.6647 10.4062L78.8233 10.4075ZM99.5142 10.4075V12.0447H91.8413V10.4075H99.5142ZM94.2427 6.52397H96.1148V22.3931C96.086 22.9446 96.2051 23.4938 96.4597 23.9827C96.6652 24.344 96.9805 24.629 97.3589 24.7955C97.7328 24.9548 98.1349 25.0357 98.5407 25.0332C98.7508 25.0359 98.9607 25.02 99.168 24.9857C99.3422 24.954 99.4956 24.9205 99.6283 24.8853L100.026 26.5853C99.8062 26.6672 99.5805 26.7327 99.3511 26.7815C99.0274 26.847 98.6977 26.8771 98.3676 26.8712C97.6854 26.871 97.0119 26.7156 96.3973 26.4166C95.7683 26.1156 95.2317 25.6485 94.8442 25.0647C94.4214 24.4018 94.2097 23.6242 94.2374 22.8363L94.2427 6.52397ZM118.398 5H120.354V19.3204C120.376 20.7052 120.022 22.0697 119.328 23.2649C118.644 24.4235 117.658 25.3698 116.477 26.0001C115.168 26.6879 113.708 27.0311 112.232 26.9978C110.759 27.029 109.302 26.6835 107.996 25.9934C106.815 25.362 105.827 24.4161 105.141 23.2582C104.447 22.0651 104.092 20.7022 104.115 19.319V5H106.08V19.1831C106.061 20.2559 106.324 21.3147 106.843 22.2511C107.349 23.1459 108.094 23.8795 108.992 24.3683C109.993 24.9011 111.111 25.1664 112.242 25.139C113.373 25.1656 114.493 24.9003 115.495 24.3683C116.395 23.8815 117.14 23.1475 117.644 22.2511C118.16 21.3136 118.421 20.2553 118.402 19.1831L118.398 5ZM128 5V26.6275H126.041V5H128Z"
      />
      <path
        className="fill-black dark:fill-white"
        d="M23.5294 0H8.47059C3.79241 0 0 3.79241 0 8.47059V23.5294C0 28.2076 3.79241 32 8.47059 32H23.5294C28.2076 32 32 28.2076 32 23.5294V8.47059C32 3.79241 28.2076 0 23.5294 0Z"
      />
      <path
        className="fill-white dark:fill-black"
        d="M17.5667 9.21729H18.8111V18.2403C18.8255 19.1128 18.6 19.9726 18.159 20.7256C17.7241 21.4555 17.0968 22.0518 16.3458 22.4491C15.5717 22.8683 14.6722 23.0779 13.6473 23.0779C12.627 23.0779 11.7286 22.8672 10.9521 22.4457C10.2007 22.0478 9.5727 21.4518 9.13602 20.7223C8.6948 19.9705 8.4692 19.1118 8.48396 18.2403V9.21729H9.72854V18.1538C9.71656 18.8298 9.88417 19.4968 10.2143 20.0868C10.5362 20.6506 11.0099 21.1129 11.5814 21.421C12.1689 21.7448 12.8576 21.9067 13.6475 21.9067C14.4374 21.9067 15.1272 21.7448 15.7169 21.421C16.2895 21.1142 16.7635 20.6516 17.0844 20.0868C17.4124 19.4961 17.5788 18.8293 17.5667 18.1538V9.21729ZM23.6753 9.21729V22.845H22.4309V9.21729H23.6753Z"
      />
    </svg>
  );
};

 
export const ConditionerIcon  = ({
}: IconSvgProps) => (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M10 16a1 1 0 0 1 1 1v1.172a3 3 0 0 1-.879 2.12l-.414.415a1 1 0 0 1-1.414-1.414l.414-.414A1 1 0 0 0 9 18.172V17a1 1 0 0 1 1-1m4 0a1 1 0 0 1 .993.883L15 17v1.172a1 1 0 0 0 .206.608l.087.099l.414.414a1 1 0 0 1-1.32 1.497l-.094-.083l-.414-.414a3 3 0 0 1-.872-1.923L13 18.172V17a1 1 0 0 1 1-1m-8 0a1 1 0 0 1 .993.883L7 17v.613a2 2 0 0 1-1.218 1.84l-.15.057l-1.316.439a1 1 0 0 1-.74-1.854l.108-.044L5 17.613V17a1 1 0 0 1 1-1m12 0a1 1 0 0 1 .993.883L19 17v.613l1.316.438a1 1 0 0 1-.52 1.928l-.112-.03l-1.316-.44a2 2 0 0 1-1.362-1.736l-.006-.16V17a1 1 0 0 1 1-1m0-13a3 3 0 0 1 2.995 2.824L21 6v6a3 3 0 0 1-2.824 2.995L18 15H6a3 3 0 0 1-2.995-2.824L3 12V6a3 3 0 0 1 2.824-2.995L6 3zm0 8H6a1 1 0 0 0-1 1v1h14v-1a1 1 0 0 0-1-1m-1-5a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></path></g></svg>
);

export const SquareIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 22 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
    <path fill="currentColor" d="M10 21v-2H6.41l4.5-4.5l-1.41-1.41l-4.5 4.5V14H3v7zm4.5-10.09l4.5-4.5V10h2V3h-7v2h3.59l-4.5 4.5z"/>
    </svg>
  );
};

 
 






export const BedRoomIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 22 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 512 512"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
<path fill="currentColor" d="M432 230.7a79.4 79.4 0 0 0-32-6.7H112a79.5 79.5 0 0 0-32 6.69A80.09 80.09 0 0 0 32 304v112a16 16 0 0 0 32 0v-8a8.1 8.1 0 0 1 8-8h368a8.1 8.1 0 0 1 8 8v8a16 16 0 0 0 32 0V304a80.09 80.09 0 0 0-48-73.3M376 80H136a56 56 0 0 0-56 56v72a4 4 0 0 0 5.11 3.84A95.5 95.5 0 0 1 112 208h4.23a4 4 0 0 0 4-3.55A32 32 0 0 1 152 176h56a32 32 0 0 1 31.8 28.45a4 4 0 0 0 4 3.55h24.46a4 4 0 0 0 4-3.55A32 32 0 0 1 304 176h56a32 32 0 0 1 31.8 28.45a4 4 0 0 0 4 3.55h4.2a95.5 95.5 0 0 1 26.89 3.85A4 4 0 0 0 432 208v-72a56 56 0 0 0-56-56"/>
    </svg>
  );
};

 
 

export const BathRoomIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 22 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
<g fill="none"><path fill="currentColor" d="M20 14v-2H4v2c0 1.138.583 3.248 2.745 3.841c.37.102.787.159 1.255.159h8a4.7 4.7 0 0 0 1.255-.159C19.417 17.248 20 15.138 20 14"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h1m16 0a1 1 0 0 0 1-1V7c0-1-.6-3-3-3s-3 2-3 3m5 5v2c0 1.138-.583 3.248-2.745 3.841M20 12H4m0 0v2c0 1.138.583 3.248 2.745 3.841M6 20l.745-2.159m0 0c.37.102.787.159 1.255.159h8a4.7 4.7 0 0 0 1.255-.159M18 20l-.745-2.159M15 7h-2m2 0h2"/></g>
    </svg>
  );
};
 




export const BroneIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 22 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
<path fill="currentColor" d="M17.616 16.385V18.5q0 .154.115.27q.115.114.269.114t.27-.115q.114-.115.114-.269v-2.116H20.5q.154 0 .27-.115q.114-.115.114-.269t-.115-.27q-.115-.114-.269-.114h-2.116V13.5q0-.154-.115-.27q-.115-.114-.269-.114t-.27.115q-.114.115-.114.269v2.116H15.5q-.154 0-.27.115q-.114.115-.114.269t.115.27q.115.114.269.114zM18 20q-1.671 0-2.835-1.164Q14 17.67 14 16t1.165-2.835T18 12t2.836 1.165T22 16t-1.164 2.836T18 20M5 16.384V8.308q0-.384.172-.727q.171-.344.474-.566l5.385-4.077q.423-.323.966-.323t.972.323l5.385 4.078q.303.222.474.566q.172.345.172.73v.425q0 .223-.17.385t-.413.132q-1.425-.108-2.812.414q-1.388.523-2.401 1.536q-1.177 1.177-1.665 2.727t-.198 3.144q.067.373-.154.649t-.57.276H6.616q-.667 0-1.141-.475T5 16.386"></path>
    </svg>
  );
};

 




 
export const GuestsIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 22 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
     <path fill="currentColor" d="M2 20v-2.8q0-.85.425-1.562T3.6 14.55q1.5-.75 3.113-1.15T10 13q.625 0 1.25.088t1.25.212v1.575q-1.125.55-1.812 1.45T10 18.675V20zm10 0v-1.4q0-.6.313-1.112t.887-.738q.9-.375 1.863-.562T17 16t1.938.188t1.862.562q.575.225.888.738T22 18.6V20zm5-5q-1.05 0-1.775-.725T14.5 12.5t.725-1.775T17 10t1.775.725t.725 1.775t-.725 1.775T17 15m-7-3q-1.65 0-2.825-1.175T6 8t1.175-2.825T10 4t2.825 1.175T14 8t-1.175 2.825T10 12"/>
    </svg>
  );
};



 
export const ParkingIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 22 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
   <path fill="currentColor" d="M6 21V3h7q2.5 0 4.25 1.75T19 9t-1.75 4.25T13 15h-3v6zm4-10h3.2q.825 0 1.413-.587T15.2 9t-.587-1.412T13.2 7H10z"/>
    </svg>
  );
};

 




export const WifiIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 22 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
   <path fill="currentColor" d="M12 21L0 9q2.375-2.425 5.488-3.713T12 4q3.425 0 6.525 1.275T24 9zM4.35 10.5q1.675-1.2 3.625-1.85T12 8t4.025.65t3.625 1.85l1.45-1.45q-1.975-1.5-4.3-2.275T12 6t-4.8.775T2.9 9.05z"></path>
    </svg>
  );
};



export const TvIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 22 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
  <path fill="currentColor" d="M4 21v-2q-.825 0-1.412-.587T2 17V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v11q0 .825-.587 1.413T20 19v2h-1l-.65-2H5.675L5 21z"/>
    </svg>
  );
};

export const ClimatIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 22 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 14 14"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
 <path fill="currentColor" fillRule="evenodd" d="M1.5 0C.706 0 0 .607 0 1.43v4.654c0 .824.706 1.43 1.5 1.43h.582V5.5c0-.446.19-.864.513-1.164a1.74 1.74 0 0 1 1.185-.461h6.44c.436 0 .863.161 1.185.46c.322.301.513.72.513 1.165v2.015h.582c.794 0 1.5-.607 1.5-1.43V1.43C14 .607 13.294 0 12.5 0zm9.168 7.515H3.332V5.5c0-.085.036-.176.115-.25a.5.5 0 0 1 .333-.125h6.44a.5.5 0 0 1 .332.125c.08.074.116.165.116.25zM4.75 9.749a.75.75 0 0 0-1.5 0v1.1a.65.65 0 0 1-.65.65h-.1a.75.75 0 0 0 0 1.5h.1a2.15 2.15 0 0 0 2.15-2.15zm5.25-.75a.75.75 0 0 0-.75.75v1.1a2.15 2.15 0 0 0 2.15 2.15h.1a.75.75 0 0 0 0-1.5h-.1a.65.65 0 0 1-.65-.65v-1.1a.75.75 0 0 0-.75-.75m-2.25.75a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0z" clipRule="evenodd"/>
    </svg>
  );
};

export const GameIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 22 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
 <path fill="currentColor" d="M12 2a9.98 9.98 0 0 1 7.743 3.671L13.414 12l6.329 6.329A9.98 9.98 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2m0 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></path>
    </svg>
  );
};


export const MicriIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 22 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 16 16"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
 <path d="M0.666667 2C0.298477 2 0 2.29848 0 2.66667V12C0 12.3682 0.298477 12.6667 0.666667 12.6667H2V13.6667C2 13.8508 2.14924 14 2.33333 14H3.66667C3.85076 14 4 13.8508 4 13.6667V12.6667H11.3333C11.7015 12.6667 12 12.3682 12 12V2.66667C12 2.29848 11.7015 2 11.3333 2H0.666667ZM15.3333 2H12.6667V12.6667V13.6667C12.6667 13.8508 12.8159 14 13 14H14.3333C14.5174 14 14.6667 13.8508 14.6667 13.6667V12.6667H15.3333C15.7015 12.6667 16 12.3682 16 12V2.66667C16 2.29848 15.7015 2 15.3333 2ZM1.35355 8.30331C1.15829 8.49857 1.15829 8.81515 1.35355 9.01041C1.54882 9.20568 1.8654 9.20568 2.06066 9.01041L7.01041 4.06067C7.20567 3.8654 7.20567 3.54882 7.01041 3.35356C6.81515 3.1583 6.49856 3.1583 6.3033 3.35356L1.35355 8.30331ZM5.35355 9.01041C5.15829 8.81515 5.15829 8.49857 5.35355 8.30331L8.18198 5.47488C8.37724 5.27962 8.69382 5.27962 8.88909 5.47488C9.08435 5.67014 9.08435 5.98672 8.88909 6.18199L6.06066 9.01041C5.8654 9.20568 5.54882 9.20568 5.35355 9.01041ZM14.318 6.98901C15.1464 6.98901 15.818 6.31744 15.818 5.48901C15.818 4.66059 15.1464 3.98901 14.318 3.98901C13.4896 3.98901 12.818 4.66059 12.818 5.48901C12.818 6.31744 13.4896 6.98901 14.318 6.98901Z" fill="currentColor"></path>
    </svg>
  );
};


 
 
export const FridgeIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 22 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
 <path fill="currentColor" d="M7 2h10a2 2 0 0 1 2 2v5H5V4a2 2 0 0 1 2-2m12 17a2 2 0 0 1-2 2v1h-2v-1H9v1H7v-1a2 2 0 0 1-2-2v-9h14zM8 5v2h2V5zm0 7v3h2v-3z"/>
    </svg>
  );
};


export const CofeIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 22 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
<path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h14v2h-2v2q0 .425-.288.713T17 7H9q-.425 0-.712-.288T8 6V4H6v16h4.05q-.95-.675-1.5-1.713T8 16v-5h10v5q0 1.25-.55 2.288T15.95 20H20v2zm7-12q.425 0 .713-.288T14 9t-.288-.712T13 8t-.712.288T12 9t.288.713T13 10"/>
    </svg>
  );
};
 

export const KitchenIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 22 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v17M4 4v3a3 3 0 1 0 6 0V4m4 4a3 4 0 1 0 6 0a3 4 0 1 0-6 0m3 4v9"/>
    </svg>
  );
};

export const CheckIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 22 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="currentColor" d="M9 16.2L4.8 12l-1.4 1.4L9 19L21 7l-1.4-1.4z"/>
    </svg>
  );
};


export const BroneIcon2: React.FC<IconSvgProps> = (props) => {
  const { width, height = 28 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="2 1 20 20"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
     <path fill="currentColor" d="M17.616 16.385V18.5q0 .154.115.27q.115.114.269.114t.27-.115q.114-.115.114-.269v-2.116H20.5q.154 0 .27-.115q.114-.115.114-.269t-.115-.27q-.115-.114-.269-.114h-2.116V13.5q0-.154-.115-.27q-.115-.114-.269-.114t-.27.115q-.114.115-.114.269v2.116H15.5q-.154 0-.27.115q-.114.115-.114.269t.115.27q.115.114.269.114zM18 20q-1.671 0-2.835-1.164Q14 17.67 14 16t1.165-2.835T18 12t2.836 1.165T22 16t-1.164 2.836T18 20M5 16.384V8.308q0-.384.172-.727q.171-.344.474-.566l5.385-4.077q.423-.323.966-.323t.972.323l5.385 4.078q.303.222.474.566q.172.345.172.73v.425q0 .223-.17.385t-.413.132q-1.425-.108-2.812.414q-1.388.523-2.401 1.536q-1.177 1.177-1.665 2.727t-.198 3.144q.067.373-.154.649t-.57.276H6.616q-.667 0-1.141-.475T5 16.386"></path>
    </svg>
  );
};



export const BroomIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 22 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
<path fill="currentColor" d="m19.36 2.72l1.42 1.42l-5.72 5.71c1.07 1.54 1.22 3.39.32 4.59L9.06 8.12c1.2-.9 3.05-.75 4.59.32zM5.93 17.57c-2.01-2.01-3.24-4.41-3.58-6.65l4.88-2.09l7.44 7.44l-2.09 4.88c-2.24-.34-4.64-1.57-6.65-3.58"/>
    </svg>
  );
};


export const BathIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 22 } = props;
  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
<path fill="currentColor" d="M19.25 9.5q-.725 0-1.237-.525t-.513-1.25t.513-1.237t1.237-.513t1.238.513T21 7.725t-.513 1.25t-1.237.525m-14.5 0q-.725 0-1.237-.525T3 7.725t.513-1.237t1.237-.513t1.238.513t.512 1.237t-.513 1.25T4.75 9.5M9.075 8q-.3 0-.475-.237t-.15-.538q.05-.575-.125-1.075t-.575-.975q-.675-.8-.95-1.612T6.6 1.8q.05-.35.288-.575T7.475 1q.3 0 .5.238t.175.562q-.05.725.125 1.3t.6 1.1q.65.775.913 1.488T10 7.2q-.025.35-.3.575T9.075 8m3 0q-.3 0-.475-.238t-.15-.537q.05-.575-.125-1.075t-.575-.975q-.675-.8-.95-1.612T9.6 1.8q.05-.35.3-.575T10.5 1q.3 0 .488.25t.162.575q-.05.75.125 1.313t.6 1.062q.65.775.913 1.488T13 7.2q-.025.35-.3.575T12.075 8m3 0q-.3 0-.475-.238t-.15-.537q.05-.575-.125-1.075t-.575-.975q-.675-.8-.95-1.612T12.6 1.8q.05-.35.3-.575T13.5 1q.3 0 .488.25t.162.575q-.05.75.125 1.313t.6 1.062q.65.775.913 1.488T16 7.2q-.025.35-.3.575T15.075 8M2 17v-3q0-.425.288-.712T3 13v-.625q0-.775.538-1.325t1.312-.55q.4 0 .763.188t.637.462l1.125 1.275q.15.15.313.3t.337.275h7.95q.2-.125.35-.275l.3-.3l1.125-1.275q.275-.275.638-.462t.762-.188q.775 0 1.313.55T21 12.375V13q.425 0 .713.288T22 14v3zm2 5q-.825 0-1.412-.587T2 20v-1h20v1q0 .825-.587 1.413T20 22z"/>
    </svg>
  );
};
 


export const WoodIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 22 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 512 512"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
<path fill="currentColor" d="m100.3 19.86l-36.62 2.02l-.72 13.1a16 16 0 0 1 5.18-.86a16 16 0 0 1 16 16a16 16 0 0 1-16 16a16 16 0 0 1-16-16a16 16 0 0 1 2.38-8.4l-6.44-18.98l-15.63.86l-.78 377.3l23.01-.8l.55-105.9l12.23 105.5l46.84-1.6zm353.5 11.6L121.5 41.71l2.6 58.39L485 85.15l3.5-36.38zm7 72.74l-25.4 1l-15 39l-13.2-37.8l-22.5 1l-2.8 83.3l7.6 34l-9.5 24.1l-7.5 226.6l14.1.7l11.3-33.5l11.3 34.7l4.7.3l14.1-21.1l4.6 22l18.3 1zm-61.1 299a16 16 0 0 1 16 16a16 16 0 0 1-16 16a16 16 0 0 1-16-16a16 16 0 0 1 16-16m85.3.8l-14.1.5l-1.9 75.2l16.2-.1zm-128.3 4.2l-93 3l-43.7 20.3l-22-18.1l-174.24 5.7l-.28 63.8l330.82-2.3l1.3-40c-12.9-.3-87.9-2.3-89.6-2.3c-1.6 0 69-9.9 90.1-13zM103 431.7a16 16 0 0 1 16 16a16 16 0 0 1-16 16a16 16 0 0 1-15.96-16a16 16 0 0 1 15.96-16m-51.48.3a16 16 0 0 1 16 16a16 16 0 0 1-16 16a16 16 0 0 1-16-16a16 16 0 0 1 16-16"/>
    </svg>
  );
};


export const WashIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 22 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 14 14"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M.5 8.5h13v2a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3v-2h0Zm7-6a2 2 0 0 0-4 0v6m4-4v1"/>
    </svg>
  );
};
 
export const Bath2Icon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 22 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
    <path fill="currentColor" d="M9.001 17.77q.328 0 .548-.222t.22-.55t-.221-.547t-.55-.22t-.547.221t-.22.55t.221.547t.55.22m3 0q.327 0 .547-.221t.22-.55t-.221-.547t-.55-.22t-.547.221t-.22.55t.221.547t.55.22m3 0q.327 0 .547-.221t.22-.55t-.221-.547t-.55-.22t-.547.221t-.22.55t.221.547t.55.22m-6-3q.327 0 .547-.221t.22-.55t-.221-.547t-.55-.22t-.547.221t-.22.55t.221.547t.55.22m3 0q.327 0 .547-.221t.22-.55t-.221-.547t-.55-.22t-.547.221t-.22.55t.221.547t.55.22m3 0q.327 0 .547-.221t.22-.55t-.221-.547t-.55-.22t-.547.221t-.22.55t.221.547t.55.22M12 6.616q-1.71 0-2.96 1.154t-1.405 2.846q-.039.328.199.549q.238.22.589.22h7.154q.351 0 .589-.22t.2-.55q-.154-1.69-1.405-2.845T12 6.616M4.616 21q-.691 0-1.153-.462T3 19.385V4.615q0-.69.463-1.152T4.615 3h14.77q.69 0 1.152.463T21 4.616v14.769q0 .69-.463 1.153T19.385 21z"/>
    </svg>
  );
};


export const TeaIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 22 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 48 48"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
        >
    <defs><mask id="ipTTeapot0"><g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M23.001 13c-7.3 0-13.458 5.07-15.379 12H38.38c-1.92-6.93-8.079-12-15.379-12"/><path fill="#555" d="M7.001 29.593c0 4.418 1.665 8.433 4.381 11.407H34.62c2.716-2.974 4.381-6.989 4.381-11.407c0-1.594-.217-3.134-.62-4.593H7.62C7.217 26.459 7 28 7 29.593"/><path d="M27 13v-2a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v2M7 28s-1.985-.131-3-2.5C2.5 22 5 20 6 17c.761-2.282-.793-3.986-1.58-4.67c-.252-.22-.42-.53-.42-.865v-.618c0-.489.354-.903.843-.92C5.878 9.887 7.663 9.996 9 11c2 1.5 3 6 3 6M9 41h28m2-16a5 5 0 1 0-4.584-7"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTeapot0)"/>
    </svg>
  );
};

export const CottageIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 22 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 48 48"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
        >
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path fill="currentColor" fillRule="evenodd" d="M11 14L25 4v40H11z" clipRule="evenodd"/><path d="m25 13l14 10v21M4 44h40"/></g>
    </svg>
  );
};

export const YandexIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 22 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 16 16"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
        >
    <path fill="currentColor" fillRule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.136 5.103a.75.75 0 0 0-1.272.795l2.044 3.27c.223.357.342.77.342 1.192v1.14a.75.75 0 0 0 1.5 0v-1.14a3.75 3.75 0 0 0-.57-1.987zm5 .795a.75.75 0 1 0-1.272-.795L8.77 6.853a.75.75 0 0 0 1.272.795z" clipRule="evenodd"/>
    </svg>
  );
};



export const ChevronRightIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 22 } = props;

  return (
    <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
        >
     <path d="m9 18 6-6-6-6" />
    </svg>
  );
};
 
export const PhoneIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 22 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
        >
   <path fill="currentColor" d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317"></path>
    </svg>
  );
};

export const WhatsappIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 22 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
        >
  <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/>
    </svg>
  );
};

export const BackIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 22 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
        >
<path fill="currentColor" d="M9.308 17.308L4 12l5.308-5.308l.708.708l-4.1 4.1H20v1H5.916l4.1 4.1z"/>
    </svg>
  );
};
 