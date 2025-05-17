import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { FaArrowLeft } from "react-icons/fa";
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

   const {name,photo,chef,price,_id,supplier,taste,category,details,quantity} = useLoaderData();

    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateCoffee = Object.fromEntries(formData.entries());

        console.log(updateCoffee)

        fetch(`https://y-bice-delta.vercel.app/coffees/${_id}`,{
            method: 'PUT',
          headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(updateCoffee)
        }
        )
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Updated successfully!!",
                    showConfirmButton: false,
                    timer: 1500
                    });
            }
        })

        form.reset();

    }

    return (
        <div className='w-9/12 mx-auto'>
            <div>
                <Link to="/" className='flex items-center pt-12'><FaArrowLeft /> Back to home</Link>
            </div>
            <div className='text-center pt-8'>
                <h1 className=' text-4xl'>Update Existing Coffee Details</h1>
                <p className=' text-xl pt-7'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>
            </div>
            <div className='pb-10'>
                <form onSubmit={handleUpdateCoffee}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-xl ">Name</legend>
                            <input type="text" name='name' className="input w-full" defaultValue={name} placeholder="Enter your name" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-xl ">Chef</legend>
                            <input type="text" name='chef' className="input w-full" defaultValue={chef} placeholder="Enter your chef" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-xl ">Supplier</legend>
                            <input type="text" name='supplier' className="input w-full" defaultValue={supplier} placeholder="Enter your supplier" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-xl ">Price</legend>
                            <input type="text" name='price' className="input w-full" defaultValue={price} placeholder="Enter your price" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-xl ">Taste</legend>
                            <input type="text" name='taste' className="input w-full" defaultValue={taste} placeholder="Enter your taste" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-xl ">Category</legend>
                            <input type="text" name='category' className="input w-full" defaultValue={category} placeholder="Enter your category" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-xl ">Details</legend>
                            <input type="text" name='details' className="input w-full" defaultValue={details} placeholder="Enter your details" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-xl ">Quantity</legend>
                            <input type="text" name='quantity' className="input w-full" defaultValue={quantity} placeholder="Enter your quantity" />
                        </fieldset>
                    </div>

                    <fieldset className="fieldset">
                            <legend className="fieldset-legend text-xl ">Photo</legend>
                            <input type="text" name='photo' className="input w-full" defaultValue={photo} placeholder="Enter your photo" />
                    </fieldset>

                    <button type='submit' className='bg-[#D2B48C] text-2xl w-full py-3 mt-4 rounded-2xl'>Update Coffee Details</button>

                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;