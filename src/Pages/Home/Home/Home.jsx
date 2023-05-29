import Banner from "../Others/Banner/banner";
import Category from "../Others/Category/Category";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="my-20 max-w-screen-xl mx-auto">
                <Category></Category>
            </div>
        </div>
    );
};

export default Home;