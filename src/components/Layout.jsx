import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Main from "./Main";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
const layout = ({ children }) => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="tablet:w-full tablet:flex">
        <div className=" hidden tablet:block w-[70px] desktop:w-[350px]  h-auto bg-[#F2F2F3] border-r">
          <Menu />
        </div>
        <div className="w-full bg-[#f2f2f2] h-screen">
          <Header />
          <Main />
        </div>
      </div>
      {/* <Main></Main> */}
      <div className="tablet:hidden">
        <Menu></Menu>
      </div>
      {children}
    </div>
  );
};

export default layout;
