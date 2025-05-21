import { Outlet } from "react-router";
import { Header } from "../components/Header/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
