import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 64px 24px 90px 24px;
  color: #1a1a1a;
  font-family: "Roboto";
  font-weight: 400;

  @media only screen and (min-width: 768px) {
    padding: 169px 0 48px;
    display: flex;
    justify-content: center;
  }

  .wrap-number {
    display: flex;
    @media only screen and (min-width: 768px) {
      display: block;
      margin-top: 30px;
    }
  }

  .number {
    margin-right: 24px;
    font-size: 52px;
    line-height: 60px;
    color: #00a4b8;
    opacity: 0.1;
    cursor: pointer;
    margin-right: 24px;
    &:last-child {
      margin-right: 0;
    }
    &.click {
      color: #00a4b8;
    }
    @media only screen and (min-width: 768px) {
      margin-right: 48px;
      font-size: 150px;
      line-height: 132px;
      margin-bottom: 48px;
      margin-right: 0;
    }
  }

  .wrap-content {
    margin-top: 40px;
    @media only screen and (min-width: 768px) {
      margin-left: 99px;
      margin-top: 0px;
    }
  }

  .msg-01 {
    font-size: 42px;
    line-height: 48px;
    margin-bottom: 24px;
    @media only screen and (min-width: 768px) {
      font-size: 73px;
      line-height: 82px;
      margin-bottom: 63px;
      max-width: 500px;
    }
  }

  .msg-02 {
    font-size: 22px;
    line-height: 28px;
    color: #00a4b8;
    @media only screen and (min-width: 768px) {
      font-size: 40px;
      line-height: 48px;
      max-width: 500px;
    }
  }

  .wrap-detail {
    padding-top: 8px 0;
    display: flex;
    @media only screen and (min-width: 768px) {
      max-width: 316px;
      padding: 16px 0;
      border-top: 0.5px solid #8a8a8a;
      &:last-child {
        border-bottom: 0.5px solid #8a8a8a;
      }
    }
  }

  .msg-left-detail {
    font-size: 14px;
    line-height: 18px;
    @media only screen and (min-width: 768px) {
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
    }
  }

  .msg-right-detail {
    color: #8a8a8a;
    font-weight: 400;
    margin-left: 8px;
    @media only screen and (min-width: 768px) {
      margin-left: 16px;
    }
  }

  .map-img {
    margin-bottom: 26px;
    margin-top: 26px;
    @media only screen and (min-width: 768px) {
      margin-bottom: 86px;
      margin-top: 40px;
    }
  }

  .more-detail {
    display: flex;
    align-items: center;
    color: #00a4b8;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    margin-top: 56px;
    cursor: pointer;
    @media only screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 24px;
      margin-top: 40px;
    }
  }

  &.slick-dots li {
    width: 60px;
    height: 45px;
  }
`;
