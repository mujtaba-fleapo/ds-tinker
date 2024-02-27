import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const Filter = ({ color = 'currentColor', size }: IconProps) => {
  const fill = translateFill(color);

  return (
    <SvgIcon
      sx={{ width: size || '16px', height: size || '16px', cursor: 'pointer' }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clipPath="url(#clip0_2136_11209)">
          <path
            d="M4 10C4 10.5304 4.21071 11.0391 4.58579 11.4142C4.96086 11.7893 5.46957 12 6 12C6.53043 12 7.03914 11.7893 7.41421 11.4142C7.78929 11.0391 8 10.5304 8 10C8 9.46957 7.78929 8.96086 7.41421 8.58579C7.03914 8.21071 6.53043 8 6 8C5.46957 8 4.96086 8.21071 4.58579 8.58579C4.21071 8.96086 4 9.46957 4 10Z"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 4V8"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <path
            d="M6 12V20"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <path
            d="M10 16C10 16.5304 10.2107 17.0391 10.5858 17.4142C10.9609 17.7893 11.4696 18 12 18C12.5304 18 13.0391 17.7893 13.4142 17.4142C13.7893 17.0391 14 16.5304 14 16C14 15.4696 13.7893 14.9609 13.4142 14.5858C13.0391 14.2107 12.5304 14 12 14C11.4696 14 10.9609 14.2107 10.5858 14.5858C10.2107 14.9609 10 15.4696 10 16Z"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 4V14"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <path
            d="M12 18V20"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <path
            d="M16 7C16 7.53043 16.2107 8.03914 16.5858 8.41421C16.9609 8.78929 17.4696 9 18 9C18.5304 9 19.0391 8.78929 19.4142 8.41421C19.7893 8.03914 20 7.53043 20 7C20 6.46957 19.7893 5.96086 19.4142 5.58579C19.0391 5.21071 18.5304 5 18 5C17.4696 5 16.9609 5.21071 16.5858 5.58579C16.2107 5.96086 16 6.46957 16 7Z"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 4V5"
            stroke={fill}
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <path
            d="M18 9V20"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2136_11209">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
