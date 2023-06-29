import { createTokens } from "@tamagui/web";
import { radius, zIndex, space, size } from "@tamagui/themes";

export const colors = {
  white: "#fff",
  black: "#111",

  gray100: "#3f3f3f",
  gray200: "#666",
  gray300: "#a6a6a6",
  gray400: "#ccc",
  gray500: "#e6e6e6",
  gray600: "#efefef",
  gray700: "#f5f5f5",

  primary: "#0d5e52",
  secondary: "#f3b0e9",
  feedbackSuccess: "#0d5e52",
  feedbackError: "#be532e",

  icons: "#0d5e52",
  brandGreen: "#0d5e52",
  brandPink: "#e9b4e6",
  brandYellow: "#ffbc33",
  brandRed: "#be532e",
};

export const tokens = createTokens({
  color: colors,
  radius,
  zIndex,
  space,
  size,
});
