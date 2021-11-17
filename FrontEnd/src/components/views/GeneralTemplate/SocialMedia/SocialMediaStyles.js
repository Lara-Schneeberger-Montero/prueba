import styled from "styled-components";

export const StyledSocialMedia = styled.div`
  display: flex;

  a {
    color: #fff;
    font-size: 2.3rem;
    margin-right: 20px;

    &:hover {
      color: #000;
    }
  }

  @media screen and (max-width: 480px) {
    display: flex;
    align-self: flex-end;
    a {
      color: #000;
      font-size: 1.8rem;
      margin: 10px;
    }
  }
`;
