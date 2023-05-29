import Banner from "../Others/Banner/banner";
import Category from "../Others/Category/Category";
import Featured from "../Others/Featured/Featured";
import PopularMenu from "../Others/PopularMenu/PopularMenu";
import TestiMonials from "../Others/TestiMonials/TestiMonials";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <TestiMonials></TestiMonials>
        </>
    );
};

export default Home;