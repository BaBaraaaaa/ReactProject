import React from "react";

import { mens_kurta } from "../../../Data/man";
import MainCrousel from './../HomeCarousel/MainCrousel';
import HomeSectionCrousel from './../HomeSectionCarousel/HomeSectionCrousel';


const HomePage = () => {
  return (
    <>
      <MainCrousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10
      ">
        <HomeSectionCrousel data={mens_kurta} sectionName={"Man's"} />
        <HomeSectionCrousel data={mens_kurta} sectionName={"Women's"}/>
        <HomeSectionCrousel data={mens_kurta} sectionName={"Women's"}/>
        <HomeSectionCrousel data={mens_kurta} sectionName={"Women's"}/>
        <HomeSectionCrousel data={mens_kurta} sectionName={"Women's"}/>

      
      </div>
    </>
  );
};

export default HomePage;
