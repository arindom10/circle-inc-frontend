import Banner from "./Banner";
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
      <OurTeam />
      <OtherServices />
    </div>
  );
};

export default HomepageOverview;
