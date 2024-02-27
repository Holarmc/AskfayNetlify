import React from "react";

import Logo from "~/assets/Logo";
// import "../assets/menu.json";
import avater from "../assets/profile-picture.jpeg";
import {
  CommunityIcon,
  ArticleIcon,
  VisualMediaIcon,
  BookmarkIcon,
  FaqIcon,
  NotificationIcon,
  YouthexchangeIcon,
  JhPlegoIcon,
  SFHIcon,
  CPHIIcon,
} from "../assets/Icon";

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
    text: "Visual media",
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

const serviceProvider = [
  { icon: <YouthexchangeIcon /> },
  { icon: <JhPlegoIcon /> },
  { icon: <SFHIcon /> },
  { icon: <CPHIIcon /> },
];

const topContributors = [
  {
    avater:
      "https://s3-alpha-sig.figma.com/img/c035/d306/25179bb3f357db8616e8f183db2b26c6?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zg6xn30mV9tH4Ou8XhjyQhQ3Ds6oUh7xoH11Vcs0mp68JNDnLBhyXi282190UH2YHuJCbJCvAWMd2Ms2QVD3fmR1gfMvoqwcMa41AKY~VhHS-6IEgy4q6~m4p1LDM~cAVdvHsD70aOwQ9wsSkfMkJmRtmMqX-BKxWk9rNfAxX0AUVWEdvK2MRLFX7uggNKv9QQpf7Au1afrCXv~UUZT-8T29L6VYxTl6khmnal8oYskeVEr-44ETudDxy6lpIMTUeUSUhlb~7d6ptqsntBjmZWaVq7k7XiJo2dOTUhs1U8Ua7EHy8plDDkQRmNdXMJyNtnwH15PzpgWMnGLCMfg6dw__",
    name: "Charity",
  },
  { avater: avater, name: "Charity" },
  { avater: avater, name: "Charity" },
  { avater: avater, name: "Charity" },
  { avater: avater, name: "Charity" },
];

function Aside() {
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
          bg-black60
          rounded-full 
          transition-all 
          duration-150         
          
          before:absolute 
          before:w-full 
          before:h-0.5 
          before:bg-black60 
          before:rounded-full 
          before:-translate-y-1 
          before:transition-all 
          before:duration-150
          
          after:absolute 
          after:w-full 
          after:h-0.5 
          after:bg-black60 
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

        {/* <div className="h-dvh w-screen flex items-center  justify-start absolute top-0 left-0"> */}
        <div className="z-20 fixed overflow-x-hidden overflow-y-scroll top-0 -left-full h-screen w-full sm:w-9/12 bg-light shadow-2xl peer-checked:left-0 peer:transition ease-out delay-150 duration-300">
          <nav role="navigation">
            <ul className="p-6 pb-4">
              <div className="p-6 mx-auto text-center">
                <Logo />
              </div>
              <div className="mt-8">
                <span className="block py-4">
                  {sideMenu.map((menu) => (
                    <li className="py-1">{menu.text}</li>
                  ))}
                </span>

                <span className="block py-4">
                  {serviceMenu.map((menu) => (
                    <li className="py-4">
                      <span className="flex justify-start">
                        {menu.icon}
                        <span className="pl-3">{menu.text}</span>
                      </span>
                    </li>
                  ))}
                </span>
              </div>
              {/* <span className="">
                <li>Services</li>
                <li>Shop</li>
              </span>
              <li>Community</li>
              <li>Articles</li>
              <li>Visual media</li>
              <li>Bookmarks</li>
              <li>FAQ</li> */}
            </ul>
          </nav>
          <div className="p-6">
            <h2 className="pb-6">SERVICE PROVIDERS</h2>
            <ul>
              {serviceProvider.map((service) => (
                <li className="pb-1">{service.icon}</li>
              ))}
            </ul>
          </div>
          <div className="p-6">
            <h2 className="pb-6">TOP CONTRIBUTORS</h2>
            <ul>
              <div className="flex justify-start lg:justify-end xl:justify-start -space-x-1.5">
                {topContributors.map((contributor) => (
                  // <li className="pb-1">{service.icon}</li>
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
        </div>
        <div className="z-10 fixed top-0 left-0 h-screen w-screen bg-gray900 hidden peer-checked:block peer-checked:bg-opacity-30 peer-checked:transition duration-200 "></div>
      </label>
      {/* </div> */}
    </React.Fragment>
  );
}

export default Aside;
