import React from "react";
import { NavLink } from "@remix-run/react";

import Logo from "~/assets/Logo";
import Aside from "~/shared/containers/Aside";

const sideMenu = [
  {
    icon: "",
    text: "Services",
  },
  {
    icon: "",
    text: "Shop",
  },
];

export default function Hamburger() {
  return (
    <React.Fragment>
      <label className="w-8 h-px cursor-pointer md:hidden">
        <input type="checkbox" className="peer sr-only" />
        <span
          className="
          relative
          z-30
          w-1/2 
          h-0.5 
          block 
          bg-black-600
          rounded-full 
          transition-all 
          duration-150         
          
          before:absolute 
          before:w-full 
          before:h-0.5 
          before:bg-black-600 
          before:rounded-full 
          before:-translate-y-1 
          before:transition-all 
          before:duration-150
          
          after:absolute 
          after:w-full 
          after:h-0.5 
          after:bg-black-600 
          after:rounded-full 
          after:translate-y-1 
          after:transition-all 
          after:duration-150
          
          peer-checked:bg-transparent
          peer-checked:before:translate-y-0
          peer-checked:before:rotate-45
          peer-checked:after:translate-y-0
          peer-checked:after:-rotate-45
          "
        ></span>

        <div className="z-20 fixed overflow-x-hidden overflow-y-scroll top-0 -left-full h-screen w-9/12 bg-light shadow-2xl peer-checked:left-0 peer:transition ease-out delay-150 duration-300">
          <nav role="navigation">
            <ul className="p-6 pb-4">
              <div className="p-6 mx-auto text-center">
                <Logo />
              </div>
              <div className="mt-8">
                <div className="py-4">
                  {sideMenu.map((menu) => (
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-pink-200"
                          : "text-black-100 hover:text-pink-200 visited:text-visited"
                      }
                      to={menu.text.toLowerCase()}
                    >
                      <li className="py-1 font-medium" key={menu.text}>
                        {menu.text}
                      </li>
                    </NavLink>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <Aside />
              </div>
            </ul>
          </nav>
        </div>
        <div className="z-10 fixed top-0 left-0 h-screen w-screen bg-gray-900 hidden peer-checked:block peer-checked:bg-opacity-30 peer-checked:transition duration-200 "></div>
      </label>
    </React.Fragment>
  );
}
