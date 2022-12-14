import GetGuesthouse from "./GetGuesthouse";

import Footer from "../../layout/Footer";
import HeadingOne from "../../layout/headings/HeadingOne";
import HeadingTwo from "../../layout/headings/HeadingTwo";
import HeadingImage from "../../layout/headings/HeadingImage";
import SearchGuesthouse from "../../search/SearchGuesthouse";

function GuesthousePage() {
  return (
    <>
      <div className="guesthouse">
        <div className="ribbon">
          Use code <span>holidaze</span> for 20% on all bookings
        </div>
        <HeadingImage style="guesthouse__image" />
        <div class="wrapper">
          <div className="item-container-first">
            <HeadingOne titleStyle="h1__big-header" content="Guesthouses" />
            <SearchGuesthouse />
          </div>
          <div class="accomodations">
            <GetGuesthouse />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GuesthousePage;
