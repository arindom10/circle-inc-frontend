import React from "react";
import Banner from "./Banner";
import DropshippingAd from "./DropshippingAd";
import LatestWorks from "./LatestWorks";
import Services from "./Services";
import OurTeam from "./OurTeam";
import OtherServices from "./OtherServices";

const HomepageOverview = () => {
  return (
    <div>
      <Banner />
      <DropshippingAd />
      <LatestWorks />
      <Services />
      <OurTeam />
      <OtherServices />
    </div>
  );
};

export default HomepageOverview;
