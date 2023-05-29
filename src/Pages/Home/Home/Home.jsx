import Banner from "../Others/Banner/banner";
import Category from "../Others/Category/Category";
import ChefMenu from "../Others/ChefMenu/ChefMenu";
import Featured from "../Others/Featured/Featured";
import PopularMenu from "../Others/PopularMenu/PopularMenu";
import TestiMonials from "../Others/TestiMonials/TestiMonials";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <section className="bg-black text-white mb-20">
                <h3 className="text-4xl py-20 text-center">Call Us: +880 01494896789</h3>
            </section>
            <ChefMenu></ChefMenu>
            <Featured></Featured>
            <TestiMonials></TestiMonials>
        </>
    );
};

export default Home;