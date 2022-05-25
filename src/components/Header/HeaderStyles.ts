import styled from "styled-components";

export const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-around;

  a {
    color: black;
  }

  & :hover {
    color: red;
  }

  .active {
    background-color: #de9b9b;
    border-radius: 20px;
    padding: 5px;
  }
`