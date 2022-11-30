import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { } from 'react-icons/fa';



const AllSeller = () => {
    const { data: sellers, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('https://puran-mobile-server-side.vercel.app/sellers')
            return res.json();
        }
    })





    // Delete Seller 
    const deleteSeller = (id) => {
        const decide = window.confirm("do you want to really delete?");
        if (decide) {
            fetch(`https://puran-mobile-server-side.vercel.app/sellers/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast.success("deleted successful!")
                    refetch();
                })
                .catch(error => console.log(error))
        }
    }


    // verify Seller 
    const verifySeller = (id, email) => {
        const decide = window.confirm("do you want to really verify the seller?");
        if (decide) {
            fetch(`https://puran-mobile-server-side.vercel.app/sellers/verify/${id}/${email}`, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    toast.success("verify successful!")
                    refetch();
                })
                .catch(error => console.log(error))
        }
    }






    return (
        <div>
            <Toaster></Toaster>
            {/* {sellers?.map(seller => <div key={seller._id} className='flex flex-col gap-4 items-center mt-5'>
                <h1>{seller?.userName}</h1>
                <p>{seller?.email}</p>
                <p>{seller?.role}</p>
                
               
                
            </div>)} */}



            <div className="overflow-x-auto">
                <table className="table w-full">
               
                    <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Verified</th>
                            <th>Verify Seller</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                       {sellers?.map((seller, index)=> 
                        <tr>
                            <th key={index} className='bg-slate-100'>{seller.userName}</th>
                            <td>{seller.email}</td>
                            <td>{seller.role}</td>
                            
                            <td><p>{seller?.verified ? <img className='w-16' src="https://thumbs.dreamstime.com/b/verified-icon-vector-illustration-guaranteed-stamp-badge-190908931.jpg" alt="" /> : 'not verified'}</p></td>

                             <td><button onClick={() => verifySeller(seller._id, seller?.email)} className='btn'>Verify Seller</button></td>

                            <td><button onClick={() => deleteSeller(seller._id)} className='btn'>Delete</button></td>

                        </tr>
                       )}
                        
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;