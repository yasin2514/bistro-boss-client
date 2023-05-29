import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import img1 from '../../../../assets/home/slide1.jpg'
import img2 from '../../../../assets/home/slide2.jpg'
import img3 from '../../../../assets/home/slide3.jpg'
import img4 from '../../../../assets/home/slide4.jpg'
const ChefMenu = () => {
    return (
        <section className="mb-20">
            <SectionTitle
                subHeading={'Should Try'}
                heading={'CHEF RECOMMENDS'}
            >
            </SectionTitle>
            <div className="md:grid grid-cols-4 gap-x-14">
            {/* item-1 */}
                <div className=" w-full bg-base-100  shadow-xl shadow-gray-400">
                    <figure>
                        <img src={img1} alt="food" className="w-full h-64 object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="mt-5">
                            <button className="btn-3 uppercase">add to cart</button>
                        </div>
                    </div>
                </div>
            {/* item-2 */}
                <div className=" w-full bg-base-100  shadow-xl shadow-gray-400">
                    <figure>
                        <img src={img2} alt="food" className="w-full h-64 object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Pizzas</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="mt-5">
                            <button className="btn-3 uppercase">add to cart</button>
                        </div>
                    </div>
                </div>
            {/* item-3 */}
                <div className=" w-full bg-base-100  shadow-xl shadow-gray-400">
                    <figure>
                        <img src={img3} alt="food" className="w-full h-64 object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Soups</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="mt-5">
                            <button className="btn-3 uppercase">add to cart</button>
                        </div>
                    </div>
                </div>
            {/* item-4 */}
                <div className=" w-full bg-base-100  shadow-xl shadow-gray-400">
                    <figure>
                        <img src={img4} alt="food" className="w-full h-64 object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Dessert</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="mt-5">
                            <button className="btn-3 uppercase">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefMenu;