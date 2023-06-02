import FoodCart from "../../../../components/FoodCart/FoodCart";

const OrderTab = ({items}) => {
    return (
        <div className={'md:grid md:grid-cols-3 lg:grid-cols-4 gap-10'}>
            {
                items && items.map(item => <FoodCart
                    key={item._id}
                    item={item}
                ></FoodCart>)
            }
        </div>
    );
};

export default OrderTab;