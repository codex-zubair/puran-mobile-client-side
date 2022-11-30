import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { userAuthContext } from '../../Context/UserContext/UserContext';
import axios from 'axios';


const Drawer = ({ children }) => {


    // getting login user
    const { user } = useContext(userAuthContext);


    // Verification state
    const [buyer, setBuyer] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [seller, setSeller] = useState(false);




    // Loading user details
    axios.get(`https://puran-mobile-server-side.vercel.app/user/${user?.email}`)
        .then(data => {
            if (data.status) {

                if (data?.data[0]?.role === 'seller') {
                    setSeller(true);
                }
                else if (data?.data[0]?.role === 'user') {
                    setBuyer(true);
                }
                else if (data?.data[0]?.role === 'admin') {
                    setAdmin(true);
                }
            }

        });









    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
              
                {/* <!-- Page content here --> */}

                <div>{children}</div>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu w-56 bg-sky-50 text-base-content">

                    {
                        admin && <ul className="menu p-4 w-56 gap-2  text-base-content ">
                            <li className=' rounded-none'><Link className='btn btn-outline' to='/dashboard/all-buyer'>All Buyer</Link></li>
                            <li className=' rounded-none'><Link className='btn btn-outline' to='/dashboard/all-seller'>All Seller</Link></li>
                        </ul>
                    }



                    {
                        buyer && <ul className="menu p-4 w-56 gap-2  text-base-content">
                            <li className=' rounded-none'><Link className='btn btn-outline' to='/dashboard/my-order'>My Order</Link></li>
                            <li className=' rounded-none'><Link className='btn btn-outline' to='/dashboard/my-wish-list'>Whish List</Link></li>
                        </ul>
                    }



                    {
                        seller && <ul className="menu p-4 w-56 gap-2  text-base-content">
                            <li className=' rounded-none'><Link className='btn btn-outline' to='/dashboard/add-product'>Add A Product</Link></li>
                            <li className=' rounded-none'><Link className='btn btn-outline' to='/dashboard/my-products'>My Products</Link></li>
                        </ul>
                    }


                </ul>

            </div>
        </div>
    );
};

export default Drawer;