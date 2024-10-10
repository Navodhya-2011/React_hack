// src/pages/DashboardPage/index.jsx
import React from "react";
import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import { Img, Text } from "components";
import SidebarItem from "components/SidebarItem";

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-indigo-50 flex flex-col font-alfaslabone items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="!sticky !w-[267px] bg-gray-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <div className="flex flex-col items-center justify-start mt-[26px] mx-auto">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                size="txtAlfaSlabOneRegular28"
              >
                Learn
              </Text>
            </div>
            <div className="flex flex-col font-ibmplexsans items-center justify-start md:ml-[0] ml-[62px] mr-[71px] mt-[23px] w-[49%]">
              <Img
                className="h-[90px] md:h-auto rounded-[50%] w-[90px]"
                src="images/img_ellipse1.png"
                alt="ellipseOne"
              />
              <Text
                className="mt-[7px] text-gray-300 text-xl"
                size="txtIBMPlexSansBold20"
              >
                School Name
              </Text>
              <Text
                className="text-base text-gray-300"
                size="txtIBMPlexSansSemiBold16"
              >
                Colombo
              </Text>
            </div>
            <div className="flex flex-col font-ibmplexsans items-center justify-start mb-[406px] mt-6 w-full">
              <SidebarItem iconSrc="images/img_grid_black_900_01.svg" label="Dashboard" isActive />
              <SidebarItem iconSrc="images/img_airplane.svg" label="Income & Expense" />
              <SidebarItem iconSrc="images/img_epsetting.svg" label="Settings" />
            </div>
          </Sidebar>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;