import React from "react";
import {
  WrapperSection1,
  TextSection1,
  BoxMessage,
  Des,
} from "pages/home/styled";
import shapeImage from "assets/svg/shape.svg";
import mobileShapeImage from "assets/svg/mobile_shape.svg";
import useMedia from "utils/useMedia";
import Link from "components/Link";
import { mgsConfig } from "constants/common";

export default function Wave() {
  const isOnMobile = useMedia();

  return (
    <WrapperSection1>
      <img
        alt=""
        height="auto"
        src={isOnMobile ? mobileShapeImage : shapeImage}
        width="auto"
      />
      <div className="self-end">
        <TextSection1>{mgsConfig.PROGRESSIVE}</TextSection1>
        <BoxMessage>
          <Des>{mgsConfig.ASSET_MANAGERS}</Des>
          <Des>
            <Link className="mini-des" msg={mgsConfig.LEARN_MORE_ABOUT} />
          </Des>
        </BoxMessage>
      </div>
    </WrapperSection1>
  );
}
