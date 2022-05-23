import React from 'react';
import LINKS from 'constants/link';
import { Wrapper, Link } from './styled';
import { Icon } from 'components';
import search from 'svg/icons/search.svg';
import useMedia from 'utils/useMedia';
import ROUTES from 'constants/routes';

export const link = [
  {
    title: LINKS.ABOUT_US,
    url: '',
  },
  {
    title: LINKS.SUSTAINABILITY,
    url: '',
  },
  {
    title: LINKS.INSIGHTS_NEWS,
    url: '',
  },
  {
    title: LINKS.STRATEGIES,
    url: '',
  },
  {
    title: LINKS.STRATEGIES,
    url: '',
  },
  {
    title: LINKS.FUNDS,
    url: '',
  },
  {
    title: LINKS.INVEST,
    url: '',
  },
  {
    title: LINKS.SINGAPORE,
    url: '',
  },
];

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
          {(link || []).map((item) => (
            <Link href={ROUTES.GG} target="_blank">
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </Wrapper>
  );
}
