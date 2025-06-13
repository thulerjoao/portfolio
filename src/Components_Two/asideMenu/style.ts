import styled from "styled-components";

export const AsideMenuContainer = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  section {
    height: 2px;
    width: 100%;
    max-width: 90rem;

    .menuContent {
      background-color: black;
      height: 100vh;
      width: 350px;
      padding: 60px 30px;
      color: white;
    }
  }
`;
