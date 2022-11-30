import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userAuthContext } from '../../Context/UserContext/UserContext';
import logo from '../../Images/Logo/puran Mobile Logo.png';
import { FaUser } from 'react-icons/fa';
import SearchField from '../../Components/SearchField/SearchField';

const Navbar = () => {


    const { user, logout } = useContext(userAuthContext);




    return (

        <div>
            <div className="navbar bg-primary">
                <div className="navbar-start">

                    <div className='hidden lg:flex w-full ml-2 items-center gap-3'>
                        {user ? <div>
                            {user?.photoURL ? <img className='mask mask-circle w-16' src={user?.photoURL
                            } alt="" /> : <div><FaUser size={'40px'}></FaUser></div>}
                        </div> : <div></div>}
                        <h1 className='text-4xl mx-2'>{user?.displayName}</h1>


                    </div>


                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <div tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            {user ? <div className='flex flex-col gap-4'>

                                <div className='flex flex-col items-center'>
                                    {user ? <div>
                                        {user?.photoURL ? <img className='mask mask-circle w-16' src={user?.photoURL
                                        } alt="" /> : <div><FaUser size={'40px'}></FaUser></div>}
                                    </div> : <div></div>}
                                    <h1 className='text-4xl mx-2'>{user?.displayName}</h1>
                                </div>


                                <li><Link to='/' className='btn text-white'>Home</Link></li>
                                <li><Link to='/blog' className='btn text-white'>Blog</Link></li>
                                <li><Link to='/dashboard' className='btn text-white'>Dashboard</Link></li>
                                <li><Link onClick={() => logout()} className='btn text-white '>Logout</Link></li>

                            </div>

                                :
                                <div className='flex flex-col gap-4'>
                                    <li><Link to='/' className='btn text-white'>Home</Link></li>
                                    <li><Link to='/blog' className='btn text-white'>Blog</Link></li>
                                    <li><Link to='/login' className='btn text-white'>Login</Link></li>
                                    <li><Link to='/signup' className='btn text-white'>Sign up</Link></li>
                                </div>}






                        </div>
                    </div>


                </div>
                <div className="navbar-center flex flex-col">
                    <Link to={'/'} className="flex items-center font-semibold my-5 normal-case text-4xl"><img width={'50px'} src={logo} alt="" /> PURAN-Mobile </Link>

                </div>
                <div className="navbar-end">


                    <div className='hidden lg:flex lg:w-full justify-end gap-4 mr-2'>

                        {user ?
                            <div className='hidden lg:flex lg:w-full justify-end gap-4 mr-2'>
                                <Link to='/' className='btn '>Home</Link>
                                <Link to='/blog' className='btn '>Blog</Link>
                                <Link to='/dashboard' className='btn'>DashBoard</Link>
                                <Link onClick={() => logout()} className='btn'>Logout</Link>
                            </div>
                            :
                            <div className='hidden lg:flex lg:w-full justify-end gap-4 mr-2'>
                                <Link to='/' className='btn'>Home</Link>
                                <Link to='/blog' className='btn'>Blog</Link>
                                <Link to='/login' className='btn'>Login</Link>
                                <Link to='/signup' className='btn'>sing up</Link>
                            </div>}

                    </div>

                </div>
            </div>
                    <SearchField></SearchField>
        </div>


    );
};

export default Navbar;