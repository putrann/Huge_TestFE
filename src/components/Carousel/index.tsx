import React from "react";
import { Wrapper } from "./style";
import Map from "assets/img/map.jpg";
import Link from "components/Link";
import Slider from "react-slick";
import { mgsConfig, msgDetail } from "constants/common";

export default function Carousel() {
  const settings = {
    customPaging: function (i: number) {
      return (
        <Wrapper>
          <div className="wrap-number">
            <div
              className="number click"
              onClick={() => {
                console.log(`0${i + 1}`);
              }}
            >{`0${i + 1}`}</div>
          </div>
        </Wrapper>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  //beacause same data
  const renderNewData = () => {
    return (
      <Wrapper>
        <div className="wrap-content">
          <div className="msg-01">{mgsConfig.OUR_FEATURED_FUNDS}</div>
          <div className="msg-02">{mgsConfig.DISRUPTIVE}</div>
          <img alt="" className="map-img" src={Map} />

          {msgDetail.map((item) => (
            <div className="wrap-detail">
              <div className="msg-left-detail"> {item.msg}</div>
              <div className="msg-left-detail msg-right-detail">
                {item.price}
              </div>
            </div>
          ))}
          <Link className="more-detail" msg={mgsConfig.EXPLORE} />
        </div>
      </Wrapper>
    );
  };

  return (
    <div>
      <Slider {...settings}>
        {renderNewData()}
        {renderNewData()}
        {renderNewData()}
        {renderNewData()}
      </Slider>
    </div>
  );
}
