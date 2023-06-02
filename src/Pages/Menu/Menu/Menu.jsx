import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import coverImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../Others/MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category == 'offered')
    const dessert = menu.filter(item => item.category == 'dessert')
    const salad = menu.filter(item => item.category == 'salad')
    const pizza = menu.filter(item => item.category == 'pizza')
    const soup = menu.filter(item => item.category == 'soup')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={coverImg} title={"TODAY'S OFFER"} subTitle={"Don't miss"}></Cover>
            <SectionTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>
            {/* offered */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert */}
            <MenuCategory items={dessert} title={"dessert"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s."} coverImg={dessertImg}></MenuCategory>
            {/* salad */}
            <MenuCategory items={salad} title={"salad"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s."} coverImg={pizzaImg}></MenuCategory>
            {/* pizza */}
            <MenuCategory items={pizza} title={"pizza"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s."} coverImg={saladImg}></MenuCategory>
            {/* soup */}
            <MenuCategory items={soup} title={"soup"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s."} coverImg={soupImg}></MenuCategory>

        </div>
    );
};

export default Menu;