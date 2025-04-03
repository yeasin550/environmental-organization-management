import AboutHelping from "../../components/HomeContent/AboutHelping/AboutHelping";
import Banner from "../../components/HomeContent/Banner/Banner";
import FAQS from "../../components/HomeContent/FAQS/FAQS";
import OurMission from "../../components/HomeContent/OurMission/OurMission";
import VolunteerTeamSection from "../../components/HomeContent/VolunteerTeamSection/VolunteerTeamSection";


const Home = () => {
    return (
        <div>
            <Banner />
            <OurMission />
            <AboutHelping />
            <VolunteerTeamSection/>
            <FAQS />
            {/* <Testimonials /> */}
        </div>
    );
};

export default Home;