import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";

const MyCart = () => {

    const [cart] = useCart();
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0)
    return (
        <div className="">
            <Helmet>
                <title>Bistro Boss | MyCart</title>
            </Helmet>
            <div className="uppercase font-semibold h-[60px] items-center text-3xl flex justify-evenly">
                <h3 >Total Item: {cart.length}</h3>
                <h3 >Total Price: ${totalPrice.toFixed(2)}</h3>
                <button className="btn btn-warning btn-sm">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> #</th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
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
                                <th>
                                    <button className="btn btn-ghost btn-lg bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </th>
                            </tr>
                        ))}


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyCart;