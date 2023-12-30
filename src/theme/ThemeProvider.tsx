import { ThemeProvider as ThemeProviderSR } from "@shopify/restyle";
import React, { FC, ReactNode } from "react";

import theme from "./theme";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => (
  <ThemeProviderSR theme={theme}>{children}</ThemeProviderSR>
);
