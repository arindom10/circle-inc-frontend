import Banner from "./Banner";
import Contact from "./Contact";
import DropshippingAd from "./DropshippingAd";
import ExpertWith from "./ExpertWith";
import LatestWorks from "./LatestWorks";
import OurTeam from "./OurTeam";
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
      <Services />
      <Contact />
      <OurTeam />
    </div>
  );
};

export default HomepageOverview;
