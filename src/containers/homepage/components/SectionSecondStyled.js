import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #00a4b8;
  padding: 64px 24px 88px 24px;
  color: #fafafa;
  font-family: 'Roboto';
  font-weight: 400;
  @media only screen and (min-width: 1280px) {
    padding: 173px 170px 0 57px;
    display: flex;
    justify-content: space-between;
  }

  .des-title {
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    margin-top: 64px;
    @media only screen and (min-width: 1280px) {
      margin-top: 0;
    }
  }

  .title {
    font-size: 42px;
    line-height: 48px;
    margin-top: 40px;
    @media only screen and (min-width: 1280px) {
      white-space: pre-line;
      font-size: 73px;
      line-height: 82px;
      margin-top: 32px;
    }
  }

  .wrap-box {
    @media only screen and (min-width: 1280px) {
      margin-left: 100px;
    }
  }

  .shape-image {
    width: auto;
    height: auto;
    margin: auto;
    @media only screen and (min-width: 1280px) {
      margin: 0;
      align-self: flex-start;
    }
  }

  .wrap-text {
    margin-top: 48px;
    @media only screen and (min-width: 1280px) {
      border-left: 0.5px solid #fafafa;
      padding-left: 32px;
      height: 280px;
      margin-top: 104px;
    }
  }
`;
