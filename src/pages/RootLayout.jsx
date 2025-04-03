import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import MainFooter from "../components/MainFooter";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <MainFooter />
    </>
  );
}
