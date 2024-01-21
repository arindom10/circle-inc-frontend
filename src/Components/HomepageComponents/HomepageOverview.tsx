import Banner from "./Banner";
import Contact from "./Contact";
import DropshippingAd from "./DropshippingAd";
import LatestWorks from "./LatestWorks";
import OtherServices from "./OtherServices";
import OurTeam from "./OurTeam";
import Services from "./Services";

const HomepageOverview = () => {
  return (
    <div>
      <Banner />
      <DropshippingAd />
      <LatestWorks />
      <Services />
      <Contact />
      <OurTeam />
      <OtherServices />
    </div>
  );
};

export default HomepageOverview;
