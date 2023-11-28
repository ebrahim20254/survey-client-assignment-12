import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import Frequently from "../Feq/Frequently";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>survey-Man / Home</title>
            </Helmet>
            <Banner></Banner>
            <Featured></Featured>
            <Frequently></Frequently>
        </div>
    );
};

export default Home;