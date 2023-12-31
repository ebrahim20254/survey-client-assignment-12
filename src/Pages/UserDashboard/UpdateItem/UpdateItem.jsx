import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import {  FaVoteYea } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useLoaderData } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=ae35b060d88ff7d57b190b08921f674d`;

const UpdateItem = () => {
    const {_id, image, title , description, vote} = useLoaderData();
 
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)

        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {

            const surveyItem = {
                name: data.title,
                category: data.category,
                vote: parseFloat(data.vote),
                description: data.description,
                image: res.data.data.display_url
            }
            // 
            const surveyRes = await axiosSecure.patch(`/survey/${_id}`, surveyItem);
            console.log(surveyRes.data)
            if(surveyRes.data.modifiedCount > 0){

                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data. title} is updated to the survey.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log( 'with image url', res.data);
    };

    return (
        <div>
            <SectionTitle heading="Update an Vote" subHeading="Refresh info"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Voter Name</span>
                        </label>
                        <input
                            type="text" defaultValue={title}
                            placeholder="Voter Name"
                            {...register('title', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Option</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>

                        {/* like */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Like & Dislike</span>
                            </label>
                            <input
                                type="number" defaultValue={vote}
                                placeholder="vote"
                                {...register('vote', { required: true })}
                                className="input input-bordered w-full" />
                        </div>


                    </div>
                    {/* vote details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea defaultValue={description} {...register('description')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Update Vote <FaVoteYea className="ml-4 text-xl"></FaVoteYea>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;