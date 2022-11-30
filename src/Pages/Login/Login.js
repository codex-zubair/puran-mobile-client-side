import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle} from 'react-icons/fa';
import { userAuthContext } from '../../Context/UserContext/UserContext';
import { SaveUserInfo } from '../../SharedFunction/SaveUserInfo';


const Login = () => {




    // Getting location system.
    const location = useLocation();

    // Getting Location.
    const from = location.state?.from?.pathname || '/';


    // navigate system 
    const navigate = useNavigate();






    // taking values from User Context.
    const { loginByEmail, signUpByGoogle } = useContext(userAuthContext);



    const onSubmitHandler = (event) => {


        // Stop Loading on submit 
        event.preventDefault();

        // full form
        const form = event.target;


        // TODO password strong system user Later.

        // Form Values Start
        const email = form.email.value;
        const password = form.password.value;
        // Form Values End


      



        loginByEmail(email, password)
            .then(() => navigateNow())
            .catch(error => alert(error.message));


    }


    // sign up by google start
    const signUpByGoogleHandler = () => {
        signUpByGoogle()
            .then((result) => {
                const user = result.user;
                const role = 'user';

                navigateNow();
                SaveUserInfo(user,role);
            })
            .catch(error => alert(error.message))
    }
    // sign up by google End





 




    // setup navigator After Register.
    const navigateNow = () => {
        setTimeout(() => { navigate(from, { replace: true }) }, 1);
    }









    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={onSubmitHandler} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                    </form>
                    <div className='card-body'>

                        <p className='mb-2'>are you new here? <Link className='text-blue-400 hover:text-blue-600' to='/signup'>Sign Up</Link></p>


                        <button onClick={signUpByGoogleHandler} className='btn btn-outline'><FaGoogle className='mr-2' /> Login with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;