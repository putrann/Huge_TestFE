import * as React from "react";
import { IconType } from "./type";
import { ReactComponent as Go } from "assets/svg/icons/go.svg";
import { ReactComponent as Search } from "assets/svg/icons/search.svg";
import { ReactComponent as Right } from "assets/svg/icons/right.svg";
import { ReactComponent as Logo } from "assets/svg/logo.svg";
import { ReactComponent as Menu } from "assets/svg/icons/menu.svg";

const icons: {
  [k in IconType]: any;
} = {
  go: Go,
  search: Search,
  right: Right,
  logo: Logo,
  menu: Menu,
};

export interface IconProps {
  type: IconType;
  className?: string;
}

export function Icon({ type, ...rest }: IconProps) {
  const Component = icons[type];

  if (!Component) {
    // eslint-disable-next-line
    console.error(
      `The icon with type:${type} doesn't exist. Make sure you pass the existing one.`
    );

    return null;
  }

  // eslint-disable-next-line
  return <Component fill="currentColor" width="1em" height="1em" {...rest} />;
}

export default Icon;
