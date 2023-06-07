import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {

    const [cart, refetch] = useCart();
    // how does reduce work
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | MyCart</title>
            </Helmet>
            <div className="uppercase font-semibold h-[60px] items-center text-3xl flex justify-evenly">
                <h3 >Total Item: {cart.length}</h3>
                <h3 >Total Price: ${totalPrice.toFixed(2)}</h3>
                <button className="btn btn-warning btn-sm">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> #</th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th className="text-end">Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr
                                key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className="text-end">{item.price.toFixed(2)}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>
                        ))}


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyCart;