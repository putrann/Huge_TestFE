import React from 'react';
import { WrapperSection1, TextSection1, BoxMessage, Des } from './styled';
// import { Icon } from 'components';
import shapeImage from '../../../svg/shape.svg';
import mobileShapeImage from '../../../svg/mobile_shape.svg';
import useMedia from 'utils/useMedia';
import Link from 'components/Link';

export default function SectionOne() {
  // eslint-disable-next-line
  const text = `Progressive Solutions\nCompetitive Performance\nGlobal Citizen with Asian DNA`;
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
        <TextSection1>{text}</TextSection1>
        <BoxMessage>
          <Des>We’re one of Asia’s largest asset managers.</Des>
          <Des>
            <Link className="mini-des" msg="Learn more about who we are" />
          </Des>
          {/* <Des className="mini-des">Learn more about who we are</Des> */}
        </BoxMessage>
      </div>
    </WrapperSection1>
  );
}
