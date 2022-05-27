import React from "react";
import { Wrapper, Link } from "pages/home/styled";
import { Icon } from "components";
import search from "assets/svg/icons/search.svg";
import useMedia from "utils/useMedia";
import ROUTES from "constants/routes";
import { links } from "constants/common";

export default function Header() {
  const isOnMobile = useMedia();

  return (
    <Wrapper>
      <Icon className="icon" type="logo" />
      <div className="right-menu">
        <img alt="" className="shape-image" src={search} />
        <Icon className="menu-icon" type="menu" />
      </div>
      {!isOnMobile && (
        <div className="menu">
          {(links || []).map((item) => (
            <Link href={ROUTES.GG} target="_blank">
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </Wrapper>
  );
}
