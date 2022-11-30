import toast, { Toaster } from 'react-hot-toast';

const BookNowModal = ({ user, phone, setSelected }) => {




    const { seller_mail, item_name, _id, seller_email, image, location, original_price, resale_price, seller_name, date, years_of_use, verified } = phone;



    // Confirm Booking.
    const confirmHandler = (event) => {

        event.preventDefault();
        const form = event.target;
        const meetLocation = form.location.value;
        const userName = form.location.value;
        const userNumber = form.number.value;





        // Order collection for sending data
        var order =
        {
            _id,
            item_name,
            image,
            location,
            original_price,
            resale_price,
            seller_name,
            seller_email,
            date,
            years_of_use,
            verified,
            meetLocation,
            userName,
            userNumber,
            userEmail: user?.email,
            seller_mail
        }





        fetch(`https://puran-mobile-server-side.vercel.app/order/${item_name}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                if (result.upsertedCount) {
                    form.reset();
                    toast.success("Successfully Booked!")
                }

                else {
                    toast.error("product already added!")
                }




            })
    }








    return (
        <div>
            <Toaster></Toaster>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            {/* Put this part before </body> tag */}
            <div className="modal modal-bottom sm:modal-middle">
                <form onSubmit={confirmHandler} className="modal-box">
                    <h3 className="font-bold text-lg">Booking Form</h3>
                    <div className='grid grid-cols-2 gap-2'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" className='input input-bordered' defaultValue={user?.email} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' className='input input-bordered' defaultValue={user?.displayName} />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <input type="text" disabled className='input input-bordered' defaultValue={item_name} />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" disabled className='input input-bordered' defaultValue={resale_price} />
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contact Number:</span>
                            </label>
                            <input name='number' type="text" className='input input-bordered' />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Meet Location</span>
                            </label>
                            <input name='location' type="text" className='input input-bordered' />
                        </div>




                    </div>
                    <p className="py-4"><strong>Seller Location: </strong> {location}</p>
                    <p className="py-4"><strong>Seller Name: </strong> {seller_name}</p>
                    <div className="modal-action">
                        <button type='submit'><label htmlFor="my-modal-6" className="btn">Confirm</label></button>

                        <label onClick={() => setSelected(null)} htmlFor="my-modal-6" className="btn">Cancel</label>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default BookNowModal;