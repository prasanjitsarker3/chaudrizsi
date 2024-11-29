"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { PersistGate } from "redux-persist/integration/react";

import { Toaster } from "sonner";
import { Provider } from "react-redux";
import store, { persistor } from "../Redux/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="light">
            <Toaster position="top-right" richColors />
            {children}
          </NextThemesProvider>
        </NextUIProvider>
      </PersistGate>
    </Provider>
  );
}
