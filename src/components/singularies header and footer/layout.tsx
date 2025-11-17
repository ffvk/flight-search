// src/components/Layout.tsx
import React, { ReactNode } from "react";
import NavbarPage from "./navbarPage";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavbarPage />
      <main>{children}</main>{" "}
    </div>
  );
};

export default Layout;
