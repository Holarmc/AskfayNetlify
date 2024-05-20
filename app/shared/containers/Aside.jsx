import { NavLink } from "@remix-run/react";
import {
  CommunityIcon,
  ArticleIcon,
  VisualMediaIcon,
  BookmarkIcon,
  FaqIcon,
  NotificationIcon,
} from "~/assets/Icons";

const serviceMenu = [
  {
    text: "Community",
    icon: <CommunityIcon />,
  },
  {
    text: "Articles",
    icon: <ArticleIcon />,
  },
  {
    text: "Visual-media",
    icon: <VisualMediaIcon />,
  },
  {
    text: "Bookmarks",
    icon: <BookmarkIcon />,
  },
  {
    text: "FAQ",
    icon: <FaqIcon />,
  },
  {
    text: "Notifications",
    icon: <NotificationIcon />,
  },
];

const topContributors = [
  {
    avatar: "https://i.pravatar.cc/200",
    name: "Charity",
  },
  {
    avatar: "https://i.pravatar.cc/300",
    name: "Charity",
  },
  {
    avatar: "https://i.pravatar.cc/100",
    name: "Charity",
  },
  {
    avatar: "https://i.pravatar.cc/400",
    name: "Charity",
  },
];

const Aside = () => {
  return (
    <>
      <ul className="flex flex-col justify-start gap-4">
        <div className=" pb-4">
          {serviceMenu.map((menu) => (
            <li className="my-4 py-4 first:my-0 first:py-0" key={menu.text}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-200"
                    : "visited:text-visited text-black-100 hover:text-pink-200"
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

        <div className="pb-4">
          <h2 className="pb-6 font-medium text-slate-600">SERVICE PROVIDERS</h2>
          <ul>
            <li className="pb-1">
              <div className="h-20 w-20 bg-[url('~/assets/youthExchange.svg')] bg-no-repeat"></div>
            </li>
          </ul>
          <ul>
            <li className="pb-1">
              <div className="h-20 w-20 bg-[url('~/assets/jhpiego.svg')] bg-no-repeat"></div>
            </li>
          </ul>
          <ul>
            <li className="pb-1">
              <div className="h-20 w-20 bg-[url('~/assets/familyHealth.svg')] bg-no-repeat"></div>
            </li>
          </ul>
          <ul>
            <li className="pb-1">
              <div className="h-20 w-20 bg-[url('~/assets/cphi.svg')] bg-no-repeat"></div>
            </li>
          </ul>
        </div>

        <div className="pb-4">
          <h2 className="pb-6 font-medium text-slate-600">TOP CONTRIBUTORS</h2>
          <ul>
            <div className="flex justify-start space-x-2">
              {topContributors.map((contributor) => (
                <img
                  src={contributor.avatar}
                  alt={contributor.name}
                  className="h-10 w-10 rounded-full bg-slate-100 "
                />
              ))}
            </div>
          </ul>
        </div>
      </ul>
    </>
  );
};

export default Aside;
