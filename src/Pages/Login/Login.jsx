import { Link, useLocation, useNavigate } from "react-router-dom";
import img  from '../../assets/login.svg';
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../../components/Socal/SocalLogin";

const Login = () => {
  const {signIn}  = useContext(AuthContext);
  const navigate = useNavigate();
   const location =  useLocation();;
  //  console.log(location);
   
  const from = location.state?.from?.pathname || "/";
  console.log('state in the location login page', location.state)

    const handleLogin = event =>{
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            Swal.fire({
              title: "USER LOGIN SUCCESSFULLY",
              showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `
              },
              hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `
              }
            });
            navigate("/", form, {replace: true});
        })
        .catch(error => console.log(error))
    }
    return (
        <>
          <Helmet>
                <title>survey-Man / Login</title>
            </Helmet>
        
        <div className="hero min-h-screen bg-blue-300 w-[90%] mx-auto my-10">
        <div className="hero-content flex-col lg:flex-row">
          <div className="  mr-12">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form  onSubmit={handleLogin} className="card-body">
              <div className="form-control">
              <h1 className="text-5xl font-bold text-center">Login</h1>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-secondary" type="submit" value="Login" />
                <SocialLogin></SocialLogin>
              </div>
            </form>
            <p className='my-4 text-center'>New to Car doctor? <Link className='text-orange-600 font-bold' to="/signUp">SignUp</Link> </p>
          </div>
        </div>
      </div>
       </>
    );
};

export default Login;