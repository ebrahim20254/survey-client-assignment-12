import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import Frequently from "../Feq/Frequently";
import Testimonial from "../../Testimonials/Testimonial";
import WorkSection from "../Work/WorkSection";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>survey-Man / Home</title>
            </Helmet>
            <Banner></Banner>
            <Featured></Featured>
            <WorkSection></WorkSection>
            <Testimonial></Testimonial>
            <Frequently></Frequently>
        </div>
    );
};

export default Home;