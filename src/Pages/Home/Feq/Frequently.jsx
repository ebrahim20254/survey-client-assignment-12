

const Frequently = () => {
    return (
        <div className=" my-6">
            <h2 className=" text-4xl text-center font-bold">Frequently asked questions</h2>
            <div className=" space-y-6">
                <div className="collapse collapse-arrow bg-base-200 my-6">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                       1. How does Ank Aha’s SurveyMan work?
                    </div>
                    <div className="collapse-content">
                        <p>The SurveyMan platform consists of an online web portal and surveyor apps for android and iOS devices. The account owner can invite “Managers” to the online web portal to create surveys. Owner can also assign surveys created by him or other managers. Surveyors download the app on their devices and sign up with their mobile numbers. Owner/Managers can add Surveyors to the their account using their Mobile Numbers and organise them into Teams.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                       2. How do device limitations work?
                    </div>
                    <div className="collapse-content">
                        <p>The only commodity we charge for is the number of devices you use in your account. You can create unlimited surveys with unlimited questions, add unlimited managers and surveyors to your account, and except the free plan, get unlimited responses to your surveys. Once an assigned surveyor logs in to his account, his device gets added to your allocated pool of devices. If your pool of devices is already full, the surveys will be “Locked” on the additional devices that assigned surveyors log on to, and they will not be able to open the survey and fill responses. If a device is not used (does not login) for a period of 30 consecutive days, the device automatically gets removed from the pool.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                       3.  How our monthly billing works?
                    </div>
                    <div className="collapse-content">
                        <p>SurveyMan has prepaid billing. You pay for the plan with allotted number of devices upfront for a month. For example, if you subscribe to our “Large” plan on 17th July at 4 PM for 50 devices, your subscription for 50 devices will be valid till the midnight of 16th of August. After that, your subscription will get auto-renewed and your provided card will get charged – in the above example, on the morning of 17th August – and your subscription will be extended by 1-month.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                       4. Anything special for NGOs and educational institutions?
                    </div>
                    <div className="collapse-content">
                        <p>Yes! We offer special offers including FREE ACCESS for the right causes. Please contact us with details of your project and organisation. We would be happy to consider your request.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                       5. How do cancel or stop auto-renewal of my subscription?
                    </div>
                    <div className="collapse-content">
                        <p>You can downgrade to the free plan anytime. In that case your subscription will not be auto-renewed. Your plan will be immediately downgraded and you will only be able to access the surveys on one device.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                       6. Do you have any contracts or cancellation fees?
                    </div>
                    <div className="collapse-content">
                        <p>No. We do not have any contracts or cancellation fees. You can downgrade to the free plan whenever you want..</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frequently;