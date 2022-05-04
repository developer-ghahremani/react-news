import Navbar from "./Navbar";
import React from "react";
import { useAppSelector } from "store";

type Props = {
  children: React.ReactNode;
};

const MainLayout = (props: Props) => {
  const { darkMode } = useAppSelector((s) => s.settings);
  return (
    <div
      className={`${
        darkMode
          ? "bg-secondary text-gray-light"
          : "bg-brown-light text-secondary"
      } min-h-screen font-nunito`}>
      <div className="lg:mx-auto md:mx-16 max-w-5xl pt-5 mx-10">
        <Navbar />
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
