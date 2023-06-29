import { shorthands } from "@tamagui/shorthands";
import { themes } from "@tamagui/themes";
import { createFont, createTamagui, isWeb } from "tamagui";
import { tokens } from "./theme/tokens";

const HeaderSizeMap = {
  xs: 14,
  sm: 16,
  md: 20,
  true: 20,
  lg: 24,
  xl: 30,
  "2xl": 36,
  "3xl": 48,
  "4xl": 60,
};

const BodySizeMap = {
  "2xs": 10,
  xs: 12,
  sm: 14,
  md: 16,
  true: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 30,
  "4xl": 36,
  "5xl": 48,
  "6xl": 60,
  "7xl": 72,
  "8xl": 96,
  "9xl": 128,
};

export const config = createTamagui({
  themes,
  tokens,
  shorthands,
  media: {
    md: { minWidth: 768 },
    lg: { minWidth: 1280 },
  },
  fonts: {
    heading: createFont({
      family: isWeb
        ? "Poppins, -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
        : "Poppins",
      size: HeaderSizeMap,
      lineHeight: Object.entries(HeaderSizeMap).reduce(
        (acc: { [key: string]: number }, [key, value]) => {
          acc[key] = value * 1.25;
          return acc;
        },
        {}
      ),
      letterSpacing: {
        xs: 0,
        sm: 0,
        // The below are -3%, but native only supports numbers
        md: -0.6,
        lg: -0.72,
        xl: -0.9,
        $2xl: -1.08,
        $3xl: -1.44,
        $4xl: -1.8,
      },
      weight: {
        xs: "600",
      },
      face: {
        600: { normal: "Poppins-SemiBold", italic: "Poppins-SemiBoldItalic" },
      },
    }),
    body: createFont({
      family: isWeb
        ? "Poppins, -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
        : "Poppins",
      size: BodySizeMap,
      lineHeight: Object.entries(BodySizeMap).reduce(
        (acc: { [key: string]: number }, [key, value]) => {
          acc[key] = value * 1.5;
          return acc;
        },
        {}
      ),
      letterSpacing: {
        "2xs": 0,
      },
      weight: {
        "2xs": "400",
      },
      400: { normal: "Poppins-Regular", italic: "Poppins-Italic" },
      500: { normal: "Poppins-SemiBold", italic: "Poppins-SemiBoldItalic" },
    }),
  },
});
