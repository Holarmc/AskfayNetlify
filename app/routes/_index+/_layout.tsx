import { Outlet } from "@remix-run/react";
import Aside from "~/shared/containers/Aside";

function Layout() {
  return (
    <>
      <aside className="hidden md:grid col-start-1 col-span-4 py-4">
        <Aside />
        {/* <h2>Aside</h2> */}
      </aside>
      <main className="grid col-span-full md:col-end-13 md:col-span-8 bg-black-400 py-4">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
