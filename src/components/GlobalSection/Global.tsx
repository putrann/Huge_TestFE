import React from "react";
import { Wrapper } from "./styled";
import shapeImage from "assets/svg/shape_2.svg";
import ROUTES from "constants/routes";
import { mgsConfig } from "constants/common";

export default function GlobalSection() {
  return (
    <Wrapper>
      <img alt="" className="shape-image" src={shapeImage} />
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
