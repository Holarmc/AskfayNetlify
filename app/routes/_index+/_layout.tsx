import { Outlet } from "@remix-run/react";
import Aside from "~/shared/containers/Aside";

function Layout() {
  return (
    <>
      <div className="col-span-3 col-start-1 hidden  p-2 py-4 md:grid">
        <Aside />
      </div>
      <main className="col-span-full grid p-2 py-4 md:col-span-9 md:col-end-13">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
