"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";

// Keeps the toast container inside the theme context so toasts
// switch between the light and dark react-toastify themes.
function ThemedToastContainer() {
  const { resolvedTheme } = useTheme();

  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      theme={resolvedTheme === "light" ? "light" : "dark"}
    />
  );
}

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
    >
      {children}
      <ThemedToastContainer />
    </NextThemesProvider>
  );
}
