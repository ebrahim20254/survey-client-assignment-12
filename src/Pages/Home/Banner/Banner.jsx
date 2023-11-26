import img from '../../../assets/focused.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen my-6">
            <img src={img} alt="" />
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md space-y-6">
                    <h1 className="text-5xl font-bold text-orange-400">Survey Developer</h1>
                    <p className="">Streamline survey creation with our developer tool. Intuitive interface, customizable questions, and powerful analytics make it easy to gather and analyze valuable data. Simplify decision-making with our survey developer.</p>
                    <button className="btn btn-warning">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;