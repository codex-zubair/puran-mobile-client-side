import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUser = () => {


    const { data: buyers, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('https://puran-mobile-server-side.vercel.app/buyers')
            return res.json();
        }
    })





    // Delete buyer 
    const deleteBuyer = (id) => {
        fetch(`https://puran-mobile-server-side.vercel.app/buyers/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })
            .catch(error => console.log(error))
    }



    return (
        <div>
            {/* {buyers?.map(buyer => <div key={buyer._id} className='flex gap-4 items-center mt-5'>
                <h1>{buyer?.userName}</h1>
                <h1>{buyer?.email}</h1>
                <h1>{buyer?.role}</h1>
                <button onClick={() => deleteBuyer(buyer._id)} className='btn'>Delete</button>
            </div>)} */}




            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>

                        {buyers?.map(buyer  =>
                            <tr>
                                <th className='bg-slate-100'>{buyer.userName}</th>
                                <td>{buyer.email}</td>
                                <td>{buyer.role}</td>


                                <td><button onClick={() => deleteBuyer(buyer._id)} className='btn'>Delete</button> </td>

                            </tr>
                        )}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;