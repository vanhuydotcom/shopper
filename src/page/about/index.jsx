import Features from "../home/component/Features";
import AboutUs from "./component/AboutUs";
// import Breadcrumb from "./component/Breadcrumb";
import Image from "./component/Image";
import OurStory from "./component/OurStory";
import Review from "./component/Review";
import Slogan from "./component/Slogan";
import Social from "./component/Social";
import Welcome from "./component/Welcom";

export default function About() {
    return (
        <>
            {/* <Breadcrumb /> */}
            <Welcome />
            <OurStory />
            <AboutUs />
            <OurStory />
            <Slogan />
            <Image />
            <Review />
            <Social />
            <Features />
        </>
    )
}