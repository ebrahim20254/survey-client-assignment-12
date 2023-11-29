import img1 from '../../../assets/polling.png'
import img2 from '../../../assets/vote.png'
import img3 from '../../../assets/unnamed.png'

const WorkSection = () => {
    return (
        <div className="my-12">
            <h3 className=' text-4xl text-center my-4 text-orange-500 font-bold'>How It Works Section</h3>
            <div className="hero h-[600px] bg-blue-300 my-8 rounded-xl">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=" lg:w-1/2 space-y-4 mr-12">
                        <h3 className=" font-bold">How to work it</h3>
                        <h2 className=" text-6xl font-bold">Best Online Polling Survey Website</h2>
                        <p>Website surveys are a non-intrusive, minimum effort (on the part of the respondents) way of sharing feedback. They enable marketers to gauge your website and then use that information to rectify what is broken and make good things even better.</p>
                        <button class="btn btn-warning">Find Details</button>
                    </div>
                    <div className="lg:w-1/2 space-y-6">
                        <div className=' flex gap-4'>
                            <div>
                                <img src={img1} className='w-[100px] rounded-full' alt="" />
                            </div>
                            <div>
                                <h2 className=' text-2xl font-bold'>How does online polling work?</h2>
                                <p className='my-2'>An online poll is a survey in which participants communicate responses via the Internet, typically by completing a questionnaire in a web pag</p>
                            </div>
                        </div>

                        <div className=' flex gap-4'>
                            <div>
                                <img src={img2} className='w-[100px] rounded-full' alt="" />
                            </div>
                            <div>
                                <h2 className=' text-2xl font-bold'>How do I build a voting website?</h2>
                                <p className='my-2'>building a voting website involves several steps, including planning, design, development, and deployment. Here's a general guide to help you get started.</p>
                            </div>
                        </div>

                        <div className=' flex gap-4'>
                            <div>
                                <img src={img3} className='w-[100px] rounded-full' alt="" />
                            </div>
                            <div>
                                <h2 className=' text-2xl font-bold'>How do web based surveys work?</h2>
                                <p className='my-2'>questionnaires are sent over the internet to a sample of respondents and they can respond to this survey over the world wide web.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkSection;