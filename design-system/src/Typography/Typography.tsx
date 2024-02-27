import { ThemeProvider } from '@emotion/react';
import MuiTypography from '@mui/material/Typography';
import { SxProps, Theme } from '@mui/material/styles';
import { defaultLocaleValue, getLocaleDirection } from '../helpers/getLocale';
import { theme } from '../theme';

export interface TypographyProps {
    children: React.ReactNode;
    className?: string;
    sx?: SxProps<Theme>;
    locale?: string;
}

const Typography = ({
    locale = defaultLocaleValue,
    ...props
}: TypographyProps) => {
    return (
        <ThemeProvider theme={theme}>
            <MuiTypography
                data-testid={`typography-ds`}
                dir={getLocaleDirection(locale)}
                className={props.className}
                sx={props.sx}
            >
                {props.children}
            </MuiTypography>
        </ThemeProvider>
    );
};

export default Typography;