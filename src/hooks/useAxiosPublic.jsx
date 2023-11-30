import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://survey-server-assignment-12.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;