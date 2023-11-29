import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";



const FeaturedCard = ({ feature }) => {
    const {_id, image, title , description, vote} = feature ;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [refetch] = useCart();

    const handleAddToCart = cart =>{
        // console.log(cart);
        if(user && user.email){
            const cartItem = {
                menuId: _id,
                email: user.email,
                title,
                image,
                vote
            }

            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${title} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // refetch cart to update the cart items count
                    refetch();
                }

            })

        }
        else{
            Swal.fire({
                title: "you are not login?",
                text: "please sure login cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
              });
        }
    }
    return (
        <div className="card w-96 bg-base-200 shadow-xl my-6">
            <figure className="">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p>Vote: {vote}</p>
                <div className="card-actions">
                     <button onClick={() => handleAddToCart(feature)} 
                     className="btn btn-secondary  w-full px-12 mt-4">View Details</button>
              </div>
            </div>
        </div>
    );
};

export default FeaturedCard;