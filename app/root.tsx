import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en";
import ru from "javascript-time-ago/locale/ru";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

import { Header, Footer } from "./shared";

import styles from "./css/output.css";
// import icons from "~/assets/Icons.svg";

export const meta: MetaFunction = () => {
  return [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  ];
};

//Linking stylesheet
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  // { rel: "preload", href: icons, as: "image", type: "image/svg+xml" },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="my-2 bg-gray-100 font-inter">
        <div className="container relative mx-auto grid max-w-screen-xl grid-cols-12 gap-4 px-4">
          <Header />
          <Outlet />
        </div>
        <hr className="border-1 mt-1 border-solid border-black-100" />
        <div className="bg-light">
          <div className="container relative mx-auto grid max-w-screen-xl grid-cols-12 gap-4 px-4 ">
            <Footer />
          </div>
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
