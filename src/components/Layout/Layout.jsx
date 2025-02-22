import { Suspense } from "react";
/*import { Outlet } from "react-router-dom";*/
import AppBar from "../AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
};

export default Layout;
