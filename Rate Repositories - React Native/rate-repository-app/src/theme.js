import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    textTabs: "white",
    primary: "#0366d6",
    tab: "#24292e",
  },
  fontSizes: {
    tab: 18,
    body: 14,
    subheading: 16,
    error: 10
  },
  fonts: Platform.select({
    android: "Roboto",
    ios: "Arial",
    default: "System",
  }),
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
