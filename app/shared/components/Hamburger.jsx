import React from "react";
import { NavLink } from "@remix-run/react";

import Logo from "~/assets/Logo";
import Aside from "~/shared/containers/Aside";

const sideMenu = [{ text: "Services" }, { text: "Shop" }];

export default function Hamburger() {
  return (
    <React.Fragment>
      <label className="h-px w-8 cursor-pointer md:hidden">
        <input type="checkbox" className="peer sr-only" />
        <span
          className="
          relative
          z-30
          block 
          h-0.5 
          w-1/2 
          rounded-full
          bg-black-600 
          transition-all 
          duration-150         
          
          before:absolute 
          before:h-0.5 
          before:w-full 
          before:-translate-y-1 
          before:rounded-full 
          before:bg-black-600 
          before:transition-all 
          before:duration-150
          
          after:absolute 
          after:h-0.5 
          after:w-full 
          after:translate-y-1 
          after:rounded-full 
          after:bg-black-600 
          after:transition-all 
          after:duration-150
          
          peer-checked:bg-transparent
          peer-checked:before:translate-y-0
          peer-checked:before:rotate-45
          peer-checked:after:translate-y-0
          peer-checked:after:-rotate-45
          "
        ></span>

        <span className="peer:transition fixed -left-full top-0 z-20 block h-screen w-9/12 overflow-x-hidden overflow-y-scroll bg-light shadow-2xl delay-150 duration-300 ease-out peer-checked:left-0">
          <nav>
            <ul className="p-6 pb-4">
              <div className="mx-auto p-6 text-center">
                <Logo />
              </div>
              <div className="mt-8">
                <div className="py-4">
                  {sideMenu.map((menu) => (
                    <NavLink
                      key={menu.text}
                      className={({ isActive }) =>
                        isActive
                          ? "text-pink-200"
                          : "visited:text-visited text-black-100 hover:text-pink-200"
                      }
                      to={menu.text.toLowerCase()}
                    >
                      <li className="py-1 font-medium">{menu.text}</li>
                    </NavLink>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <Aside />
              </div>
            </ul>
          </nav>
        </span>
        <span className="fixed left-0 top-0 z-10 block hidden h-screen w-screen bg-gray-900 duration-200 peer-checked:block peer-checked:bg-opacity-30 peer-checked:transition "></span>
      </label>
    </React.Fragment>
  );
}
