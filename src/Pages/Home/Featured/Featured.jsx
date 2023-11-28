import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";


const Featured = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/survey')
        .then(res => res.json())
        .then(data => {
            setUsers(data);
        })
    },[])
    return (
        <div>
            <h2 className=" text-4xl text-center font-bold">Featured Surveys Section</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    users?.map(user => <FeaturedCard key={user._id} user={user}></FeaturedCard> )
                }
            </div>
        </div>
    );
};

export default Featured;