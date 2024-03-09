import { NavLink } from "@remix-run/react";

import AsideNavRender from "~/shared/components/AsideNavRender";

const Aside = () => {
  return (
    <>
      <ul className="flex flex-col justify-start gap-4">
        <AsideNavRender
          render={({ serviceMenu }) => (
            <div className=" pb-4">
              {serviceMenu.map((menu) => (
                <li className="py-4 my-4 first:my-0 first:py-0" key={menu.text}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-pink-200"
                        : "text-black-100 hover:text-pink-200 visited:text-visited"
                    }
                    to={menu.text.toLowerCase()}
                  >
                    <span className="flex justify-start gap-2">
                      {menu.icon}
                      <span className="pl-3 font-medium">{menu.text}</span>
                    </span>
                  </NavLink>
                </li>
              ))}
            </div>
          )}
        />
        <AsideNavRender
          render={({ serviceProvider }) => (
            <div className="pb-4">
              <h2 className="pb-6 font-medium text-slate-600">
                SERVICE PROVIDERS
              </h2>
              <ul>
                {serviceProvider.map((service) => (
                  <li className="pb-1" key={service.id}>
                    {service.icon}
                  </li>
                ))}
              </ul>
            </div>
          )}
        />
        <AsideNavRender
          render={({ topContributors }) => (
            <div className="pb-4">
              <h2 className="pb-6 font-medium text-slate-600">
                TOP CONTRIBUTORS
              </h2>
              <ul>
                <div className="flex justify-start -space-x-1">
                  {topContributors.map((contributor) => (
                    <img
                      src={contributor.avatar}
                      alt={contributor.name}
                      className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white"
                      loading="lazy"
                    />
                  ))}
                </div>
              </ul>
            </div>
          )}
        />
      </ul>
    </>
  );
};

export default Aside;
