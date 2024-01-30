import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import styled from "styled-components";
const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.4rem 6.8rem;
`;

const StyledGrid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
`;

export default function AppLayout() {
  return (
    <>
      <StyledGrid>
        <SideBar />
        <Header />
        <Main>
          <Outlet />
        </Main>
      </StyledGrid>
    </>
  );
}
