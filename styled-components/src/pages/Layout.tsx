import { Outlet } from "react-router";
import { Footer, Header, Main } from "../components/styled/Layouts";
import { Wrapper } from "../components/styled/Wrappers";

export const Layout = () => {
  return (
    <Wrapper>
      <Header></Header>
      <Main>
        <Outlet />
      </Main>
      <Footer></Footer>
    </Wrapper>
  );
};
