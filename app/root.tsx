import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { Header, Footer, Aside, ComboBoxResponsive } from "./components";

import styles from "./css/output.css";

//Linking stylesheet
export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gray font-inter my-2">
        <div className="grid grid-cols-12 gap-4 relative container mx-auto max-w-screen-xl px-4">
          <Header />

          <Aside />
          <Outlet />
          <ComboBoxResponsive />

          <Footer />
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
