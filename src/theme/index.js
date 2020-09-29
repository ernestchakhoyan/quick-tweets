import { createMuiTheme } from "@material-ui/core";
import colors from "./colors";
import typography from "./typography";

const MuiTheme = () => {
    return createMuiTheme({
        palette: {
            primary: {
                main: colors.primary,
            },
            grey: {
                500: colors.grey300
            },
            secondary: {
                main: colors.secondary
            },
            error: {
                main: colors.danger
            },
            success: {
                main: colors.success
            },
            warning: {
                main: colors.warning
            },
            text: {
                primary: colors.pTextColor,
                secondary: colors.sTextColor
            },
            background: {
                default: "#ffffff"
            },
            contrastThreshold: 3,
            tonalOffset: 0.1
        },
        shape: {},
        overrides: {
            MuiButton:{
                root: {
                    boxShadow: "1px 1px 1px"
                }
            },
            MuiFormLabel: {
                root: {
                    color: colors.pTextColor
                }
            }
        },
        typography
    });
};

export default MuiTheme;
