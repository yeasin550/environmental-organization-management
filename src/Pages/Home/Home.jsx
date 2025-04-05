import AboutHelping from "../../components/HomeContent/AboutHelping/AboutHelping";
import Banner from "../../components/HomeContent/Banner/Banner";
import Blogs from "../../components/HomeContent/Blogs/Blogs";
import FAQS from "../../components/HomeContent/FAQS/FAQS";
import OurMission from "../../components/HomeContent/OurMission/OurMission";
import Testimonials from "../../components/HomeContent/Testimonials/Testimonials";
import VolunteerTeamSection from "../../components/HomeContent/VolunteerTeamSection/VolunteerTeamSection";


const Home = () => {
    return (
        <div>
            <Banner />
            <OurMission />
            <AboutHelping />
            <VolunteerTeamSection/>
            <FAQS />
            <Blogs/>
            <Testimonials />
        </div>
    );
};

export default Home;