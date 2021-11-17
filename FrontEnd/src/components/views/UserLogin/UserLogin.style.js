import styled from "styled-components";

export const StyledLogin = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  font-family: "Quicksand", sans-serif;
  font-size: 1rem;
  color: #31363f;
  font-weight: bold;
  display: flex;
  height: 80vh;
  width: 100%;
  form {
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 33vw;
    h2 {
      font-size: x-large;
      align-self: center;
      font-weight: bold;
      color: #f0572d;
      margin-bottom: 2rem;
    }
    label {
      display: block;
    }
    input {
      border: none;
      border-radius: 0.3rem;
      height: 2.3rem;
      box-shadow: 1px 1px 5px #bdbcbc;
      /* line-height:2.3rem; */
      width: 100%;
      margin-top: 0.4rem;
      margin-bottom: 0.6rem;
    }
    .hidden {
      display: none;
    }
    .visible {
      font-size: 11px;
      color: red;
    }
    #error {
      font-size: 12px;
      margin-top: 1rem;
      text-align: center;
    }
    button {
      height: 2.3rem;
      background-color: #f0572d;
      color: white;
      font-weight: bold;
      border: none;
      border-radius: 0.3rem;
      display: block;
      box-shadow: 1px 1px 5px #bdbcbc;
      padding: 2rem auto;
      line-height: 2.3rem;
      width: 15rem;
      align-self: center;
      margin-top: 1rem;
      font-family: "Quicksand", sans-serif;
      font-size: 13px;
    }
    p {
      margin-top: 0.5rem;
      align-self: center;
    }
    span {
      color: #4285f4;
    }
    @media screen and (max-width: 480px) {
      width: 80vw;
      button {
        width: 80vw;
      }
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
      width: 60vw;
      button {
        width: 60vw;
      }
    }
  }
`;
