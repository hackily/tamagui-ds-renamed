import userEvent from "@testing-library/user-event";
import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { TamaguiProvider } from "tamagui";
import { config } from "../core/tamagui.config";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => (
  <TamaguiProvider config={config} defaultTheme="light">
    {children}
  </TamaguiProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { userEvent, customRender as render };
