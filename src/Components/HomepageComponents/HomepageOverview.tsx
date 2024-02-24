import Banner from "./Banner";
import Contact from "./Contact";
import DropshippingAd from "./DropshippingAd";
import ExpertWith from "./ExpertWith";
import HowWeWork from "./HowWeWork";
import LatestWorks from "./LatestWorks";
import OurTeam from "./OurTeam";
import OurValues from "./OurValues";
import Services from "./Services";
import WhatWeOffer from "./WhatWeOffer";

const HomepageOverview = () => {
  return (
    <div>
      <Banner />
      <WhatWeOffer />
      <ExpertWith />
      {/* <DropshippingAd /> */}
      <LatestWorks />
      {/* <Services /> */}
      <HowWeWork />
      <OurValues />
      <Contact />
      <OurTeam />
    </div>
  );
};

export default HomepageOverview;
