import { createTheme, ThemeProvider } from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import Shape from "./Shape";
import Spacing from "./Spacing";
import customTypography  from '../theme/Type';
import Type from "../theme/Type";

const LightColorScheme = {
    primary: {
        main: "#0288d1",
    },
    secondary: {
        main: "#f50057",
    },
    background: {
        default: "#fafafa",
        paper: "#ffffff",
    },
    text: {
        primary: "#212121",
        secondary: "#757575",
        disabled: "#bdbdbd",
    },
    action: {
        active: "#0288d1",
        hover: "#0288d1",
        selected: "#0288d1",
        disabled: "#e0e0e0",
    },
    divider: "#e0e0e0",
    error: {
        main: "#d32f2f",
    },
    warning: {
        main: "#ff9800",
    },
    info: {
        main: "#2196f3",
    },
    success: {
        main: "#4caf50",
    },
};

const DarkColorScheme = {
    primary: {
        main: "#03a9f4",
    },
    secondary: {
        main: "#f06292",
    },
    background: {
        default: "#121212",
        paper: "#1e1e1e",
    },
    text: {
        primary: "#e0e0e0",
        secondary: "#b0b0b0",
        disabled: "#757575",
    },
    action: {
        active: "#03a9f4",
        hover: "#0288d1",
        selected: "#0288d1",
        disabled: "#424242",
    },
    divider: "#424242",
    error: {
        main: "#f44336",
    },
    warning: {
        main: "#ffb300",
    },
    info: {
        main: "#64b5f6",
    },
    success: {
        main: "#81c784",
    },
};

const createAppTheme = (mode: "light" | "dark") => {
    const isDarkMode = mode === "dark";

    return createTheme({
        palette: isDarkMode ? DarkColorScheme : LightColorScheme,
        typography: Type.typography,
        spacing: Spacing.spacingUnit,
        shape: Shape,
    });
};

interface ThemeProps {
    mode: "light" | "dark";
    children: React.ReactNode;
}

export const AppThemeProvider: React.FC<ThemeProps> = ({ mode, children }) => {
    const theme = createAppTheme(mode);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
