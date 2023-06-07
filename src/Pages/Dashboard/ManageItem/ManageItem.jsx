import Swal from "sweetalert2";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageItem = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

    const handleDeleteItem = item => {
        console.log(item._id);
        Swal.fire({
            title: `Are you sure to delete this user? ${item.name}`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log(res.data)
                        refetch();
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'User is Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }
    return (
        <div className="w-full pt-10">
            <SectionTitle heading="Manage All Item" subHeading="Hurry Up">

            </SectionTitle>
            <div className="overflow-x-auto">
                <table className="table w-full text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> #</th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Category</th>
                            <th className="text-end">Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu?.map((item, index) => (
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
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td className="text-end">{item.price.toFixed(2)}</td>

                                <td>
                                    <button className="btn btn-ghost bg-orange-600 text-white text-xl"><FaEdit></FaEdit></button>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost bg-red-600 text-white text-xl"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>
                        ))}


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageItem;