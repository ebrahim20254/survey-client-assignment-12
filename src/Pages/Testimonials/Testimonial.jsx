import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import img1 from '../../assets/land.jpg'
import img2 from '../../assets/digital.jpg'
import img3 from '../../assets/people.jpg'

const Testimonial = () => {
    return (
        <div>
            <SectionTitle
                subHeading="What Our Client Say"
                heading={'Testimonials'}
            ></SectionTitle>
            <div className=' text-center flex justify-center gap-8 '>
                 {/* card 1  */}
                <div className="card w-96 bg-blue-400 transition duration-300 ease-in-out transform hover:scale-110 group-hover:opacity-75 shadow-xl">
                    <figure className="">
                        <img src={img1} alt="Shoes" className="rounded-full h-[400px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-3xl font-bold">Land Survey</h2>
                        <p className=''>Accurate land survey ensures precise property boundaries, aiding in legal documentation and construction planning.</p>
                        <div className="card-actions">
                           
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-400 shadow-xl  bg-blue-400 transition duration-300 ease-in-out transform hover:scale-110 group-hover:opacity-75">
                    <figure className="">
                        <img src={img2} alt="Shoes" className="rounded-full h-[400px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className=" text-3xl font-bold">Vote Survey</h2>
                        <p>Vote survey gauges public opinions on key issues, guiding informed decision-making in democratic processes</p>
                        <div className="card-actions">
                            
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-400 shadow-xl  bg-blue-400 transition duration-300 ease-in-out transform hover:scale-110 group-hover:opacity-75">
                    <figure className="">
                        <img src={img3} alt="Shoes" className="rounded-full h-[400px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className=" text-3xl font-bold">Developer Survey</h2>
                        <p>Developer survey assesses industry trends, tools, and preferences, informing insights into the evolving landscape of software development.</p>
                        <div className="card-actions">
                           
                        </div>
                    </div>
                </div>
                  
            </div>
        </div>
    );
};

export default Testimonial;