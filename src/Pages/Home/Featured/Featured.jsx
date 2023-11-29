import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";


const Featured = () => {
    const [featured, setFeatured] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/survey')
        .then(res => res.json())
        .then(data => {
            setFeatured(data);
        })
    },[])
    return (
        <div>
            <h2 className=" text-4xl text-center font-bold">Featured Surveys Section</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    featured?.map(feature => <FeaturedCard key={feature._id} feature={feature}></FeaturedCard> )
                }
            </div>
        </div>
    );
};

export default Featured;