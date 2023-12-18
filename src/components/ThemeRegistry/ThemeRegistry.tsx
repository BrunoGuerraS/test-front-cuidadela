"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import NextAppDirEmotionalCacheProvider from "./EmotionCache";
import theme from "./Theme";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionalCacheProvider options={{key: 'mui'}}>
      <ThemeProvider theme={theme}>
        {children}
        <CssBaseline />
      </ThemeProvider>
    </NextAppDirEmotionalCacheProvider>
  );
}
