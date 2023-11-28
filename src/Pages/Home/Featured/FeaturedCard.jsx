

const FeaturedCard = ({ user }) => {
    const {image, name , description} = user ;
    return (
        <div className="card w-96 bg-base-200 shadow-xl my-6">
            <figure className="">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <button className="btn btn-warning px-8">Add to Vote</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCard;