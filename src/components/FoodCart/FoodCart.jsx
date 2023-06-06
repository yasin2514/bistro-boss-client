import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FoodCart = ({ item }) => {
    const { name, price, image, recipe } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddToCart = item => {
        console.log(item);
        if (user) {
            fetch('http://localhost:5000/carts')
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'food added in the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }

        // 
    }
    return (
        < div className=" w-full bg-base-100 flex flex-col items-center pb-10 shadow-xl shadow-gray-400" >
            <div className="relative">
                <img src={image} alt="food" className="w-full h-64 object-cover" />
                <p className="bg-black text-white absolute top-5 right-5 px-4 py-2">${price}</p>
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
            </div>
            <div className="mt-auto">
                <button onClick={() => handleAddToCart(item)} className="btn-3 uppercase">add to cart</button>
            </div>
        </div>

    );
};

export default FoodCart;