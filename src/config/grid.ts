/**
 * bootstrap grid setting
 *
 * 單位值參考
 * row.padding === col.padding === container.padding
 *
 * 更改格數
 * import grid from "config/grid";
 *
 * <GridThemeProvider gridTheme={{
 *     ...grid,
 *     gridColumns: 35,
 *     gridGutterWidth: 3,
 * }}>
 */

export default {
    gridGutterWidth: 5,
    gridColumns: 24,
    gridBreakpoints: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1540,
    },
    containerMaxWidths: {
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140,
        xxl: 1410,
    },
    gridGutterWidthMedia: {
        sm: 5,
        md: 5,
        lg: 5,
        xl: 10,
        xxl: 15,
    }
};
