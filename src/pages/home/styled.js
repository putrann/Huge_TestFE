import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: Roboto;
  display: flex;
  justify-content: space-between;
  padding: 40px 24px;
  .icon {
    width: 163px;
    height: 26px;
  }
  @media only screen and (min-width: 1280px) {
    padding: 23px 118px;
    .icon {
      width: 112px;
      height: 18px;
    }
  }

  .menu {
    display: none;
    @media only screen and (min-width: 1280px) {
      display: block;
    }
  }

  .right-menu {
    display: flex;
    @media only screen and (min-width: 1280px) {
      display: none;
    }
  }

  .menu-icon {
    width: 24px;
    height: 24px;
    margin-left: 16px;
    cursor: pointer;
  }
`;

export const Link = styled.a`
  cursor: pointer;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  font-family: "Roboto";
  color: #1a1a1a;
  margin-right: 40px;
  &:last-child {
    margin-right: 0px;
  }
`;

export const WrapperSection1 = styled.div`
  ${"" /* max-width: 1025px; */}
  position: relative;
  height: auto;
  font-family: "Roboto";
  font-weigh: 400;
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  .self-end {
    padding: 0 24px;
    @media only screen and (max-width: 767px) {
      margin-top: -30px;
    }

    @media only screen and (min-width: 768px) {
      position: absolute;
      left: 400px;
      bottom: 40px;
      align-self: flex-end;
      margin-right: 32px;
      padding: 0;
    }
    @media only screen and (min-width: 1280px) {
      left: 651px;
      margin-right: 118px;
    }
  }

  .mini-des {
    color: #00a4b8;
    line-height: 24px;
    font-size: 16px;
    margin-top: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    margin-bottom: 88px;
    @media only screen and (min-width: 768px) {
      line-height: 38px;
      font-size: 18px;
      margin-bottom: 0;
    }
  }

  .mobile-des {
    font-size: 29px;
    line-height: 36px;
    letter-spacing: 2px;
  }
`;

export const TextSection1 = styled.div`
  color: #1a1a1a;
  font-size: 29px;
  line-height: 36px;
  letter-spacing: 2px;
  white-space: pre-line;
  margin-bottom: 32px;
  font-weight: 400;

  @media only screen and (min-width: 768px) {
    font-size: 45px;
    line-height: 48px;
    margin-bottom: 32px;
  }
  @media only screen and (min-width: 1281px) {
    font-size: 58px;
    line-height: 64px;
    margin-bottom: 64px;
  }
`;

export const BoxMessage = styled.div`
  border-left: none;
  @media only screen and (min-width: 768px) {
    border-left: 0.5px solid #8a8a8a;
    padding-left: 16px;
    height: 284px;
  }
`;

export const Des = styled.div`
  white-space: pre-line;
  font-size: 22px;
  line-height: 28px;
  color: #474747;
  font-weigh: 400;
  @media only screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 38px;
  }
`;
