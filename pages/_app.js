import { SessionProvider } from "next-auth/react";
import { AppContextProvider } from "../contexts/AppContext";
import "../styles/globals.css";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <AppContextProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </AppContextProvider>
  );
}
