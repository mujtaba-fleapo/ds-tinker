import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
export const PillSelected = ({ color = 'currentColor', size }: IconProps) => {
  return (
    <SvgIcon>
      <svg
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="33" height="32" rx="4" fill="black" />
        <path
          d="M14.5392 11.7727L16.4611 14.9688H16.5293L18.4597 11.7727H20.2623L17.5733 16.1364L20.3049 20.5H18.4725L16.5293 17.3253H16.4611L14.5179 20.5H12.6941L15.4512 16.1364L12.7282 11.7727H14.5392Z"
          fill="white"
        />
      </svg>
    </SvgIcon>
  );
};
