import React from 'react';
import { Wrapper } from './style';
import Map from 'img/map.jpg';
import Link from 'components/Link';
import TEXTS from 'constants/text';

export const msgDetail = [
  {
    msg: 'NAV (per 100 shares)',
    price: '¥196,977',
  },
  {
    msg: 'Net Assets',
    price: '7,309,193 million',
  },
  {
    msg: 'Day Change',
    price: '- ¥1,094',
  },
  {
    msg: 'Issued',
    price: '3,710,686,634 shares',
  },
];

export default function Carousel() {
  return (
    <Wrapper>
      <div className="wrap-number">
        <div className="number">01</div>
        <div className="number">02</div>
        <div className="number">03</div>
        <div className="number">04</div>
      </div>
      <div className="wrap-content">
        <div className="msg-01">{TEXTS.OUR_FEATURED_FUNDS}</div>
        <div className="msg-02">{TEXTS.DISRUPTIVE}</div>
        {/*eslint-disable-next-line  */}
        <img src={Map} alt="" className="map-img" />

        {msgDetail.map((item) => (
          <div className="wrap-detail">
            <div className="msg-left-detail"> {item.msg}</div>
            <div className="msg-left-detail msg-right-detail">{item.price}</div>
          </div>
        ))}
        <Link className="more-detail" msg="Explore more funds" />
      </div>
    </Wrapper>
  );
}
