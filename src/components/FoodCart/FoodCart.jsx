
const FoodCart = ({ item }) => {
    const { name, price, image, recipe } = item;
    return (
        < div className=" w-full bg-base-100  shadow-xl shadow-gray-400" >
            <div className="relative">
                <img src={image} alt="food" className="w-full h-64 object-cover" />
                <p className="bg-black text-white absolute top-5 right-5 px-4 py-2">${price}</p>
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="mt-5">
                    <button className="btn-3 uppercase">add to cart</button>
                </div>
            </div>
        </div>

    );
};

export default FoodCart;