import React from "react";
import type { Preview } from "@storybook/react";
import { TamaguiProvider } from "tamagui";
import { config } from "../core/tamagui.config";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <TamaguiProvider config={config} defaultTheme="light">
        <Story />
      </TamaguiProvider>
    ),
  ],
};

export default preview;
