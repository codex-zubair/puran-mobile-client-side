import React from 'react';
import logo from '../../Images/Logo/puran Mobile Logo.png';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div className='text-center flex'>

                <div>
                    <h3 className="text-3xl mb-3"> Download our app </h3>

                    <div className='flex flex-row-reverse my-5'>
                        <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                            <img className="w-7 md:w-8" src="https://cdn-icons-png.flaticon.com/512/888/888857.png" alt="" />
                            <div className="text-left ml-3">
                                <p className='text-xs text-gray-200'>Download on </p>
                                <p className="text-sm md:text-base"> Google Play Store </p>
                            </div>
                        </div>

                        {/* <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                    <img className="w-7 md:w-8" src="https://cdn-icons-png.flaticon.com/512/888/888841.png" alt="" />
                    <div className="text-left ml-3">
                        <p className='text-xs text-gray-200'>Download on </p>
                        <p className="text-sm md:text-base"> Google Play Store </p>
                    </div>
                </div> */}


                        <div className='flex justify-center'>
                            <img width={'50px'} src={logo} alt="" />
                        </div>
                    </div>

                    <p>PURAN-Mobile  Ltd.<br />Providing reliable service since 2022</p>
                </div>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;