import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>404!!</h2>
            <Link to="/">Go to Back</Link>
        </div>
    );
};

export default ErrorPage;