
const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="flex space-x-3">
            <img className="w-[110px] h-[110px] rounded-b-[200px] rounded-tr-[200px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}--------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;