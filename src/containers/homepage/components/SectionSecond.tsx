import React from 'react';
import { Wrapper } from './SectionSecondStyled';
import shapeImage from '../../../svg/shape_2.svg';
import ROUTES from 'constants/routes';
import TEXTS from 'constants/text';

export default function SectionSecond() {
  return (
    <Wrapper>
      <img alt="" className="shape-image" src={shapeImage} />
      <div className="wrap-box">
        <div className="des-title">{TEXTS.TERM}</div>
        <div className="title">
          {`Global Intelligence\nAsian Insights\nLocal Experience`}
        </div>

        <div className="wrap-text">
          <div
            className="des-title"
            style={{ marginTop: '0', marginBottom: '48px' }}
          >
            {TEXTS.TRANSFORM_INTELLIGENT}
          </div>
          <a
            className="des-title"
            href={ROUTES.GG}
            style={{ marginTop: '48px' }}
            target="_blank"
          >
            {TEXTS.LEARN_MORE}
          </a>
        </div>
      </div>
    </Wrapper>
  );
}
