import React, { useRef, useEffect } from "react";
import { Wrapper } from "./styled";
import shapeImage from "assets/svg/shape_2.svg";
import ROUTES from "constants/routes";
import { mgsConfig } from "constants/common";
import { TimelineLite, Power3 } from "gsap";

export default function GlobalSection() {
  const globalRef = useRef<HTMLImageElement>(null);
  console.log(globalRef.current);
  const t1 = new TimelineLite({ delay: 0.3 });

  useEffect(() => {
    t1.from(
      ".des-title",
      {
        y: 15,
        opacity: 0,
        ease: Power3.easeOut,
        delay: 0.2,
      },
      "Start"
    );
  }, [t1]);
  return (
    <Wrapper className="container-global">
      {/* eslint-disable-next-line */}
      <img alt="" className="shape-image" src={shapeImage} ref={globalRef} />
      <div className="wrap-box">
        <div className="des-title">{mgsConfig.TERM}</div>
        <div className="title">{mgsConfig.GLOBAL}</div>
        <div className="wrap-text">
          <div
            className="des-title"
            style={{ marginTop: "0", marginBottom: "48px" }}
          >
            {mgsConfig.TRANSFORM_INTELLIGENT}
          </div>
          <a
            className="des-title"
            href={ROUTES.GG}
            style={{ marginTop: "48px" }}
            target="_blank"
          >
            {mgsConfig.LEARN_MORE}
          </a>
        </div>
      </div>
    </Wrapper>
  );
}
