

const Frequently = () => {
    return (
        <div className=" my-6">
            <h2 className=" text-4xl text-center font-bold">Frequently asked questions</h2>
            <div className=" space-y-6">
                <div className="collapse collapse-arrow bg-base-200 my-6">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                       1. How to create SurveyMan website idea?
                    </div>
                    <div className="collapse-content">
                        <p>Create a database schema to store survey data, user information, and other relevant details. Ensure that the database design supports the features you want to implement.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                       2. How do device limitations work?
                    </div>
                    <div className="collapse-content">
                        <p>Develop mechanisms to distribute surveys, such as email invitations, direct links, or embedding options.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                       3.  How  to polling survey vote?
                    </div>
                    <div className="collapse-content">
                        <p>Craft clear, concise, and unbiased questions. Ensure that your questions are relevant to your objectives and audience. Use a mix of question types, such as multiple-choice, open-ended, and rating scales.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                       4. How often do you visit our website?
                    </div>
                    <div className="collapse-content">
                        <p>I don't have the ability to browse the internet or access specific websites, including yours</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                       5. How would you rate the speed and performance of our website?
                    </div>
                    <div className="collapse-content">
                        <p>You can downgrade to the free plan anytime. In that case your subscription will not be auto-renewed. Your plan will be immediately downgraded and you will only be able to access the surveys on one device.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                       6. How would you rate the speed and performance of our website?
                    </div>
                    <div className="collapse-content">
                        <p>If you have specific questions about optimizing your website's performance or if you provide more details, I can certainly try to offer advice or guidance based on general web development principles.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frequently;