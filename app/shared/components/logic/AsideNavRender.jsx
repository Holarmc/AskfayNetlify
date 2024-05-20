import React from "react";
import {
  serviceMenu,
  serviceProvider,
  topContributors,
} from "~/shared/utils/AsideNavLogic";

const AsideNavRender = ({ render }) => {
  const data = { serviceMenu, serviceProvider, topContributors };
  return render(data);
};

export default AsideNavRender;
