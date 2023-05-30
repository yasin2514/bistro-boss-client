import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import coverImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/Others/PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={coverImg} title={'OUR MENU'} subTitle={'Would You Like to Try a Dish?'}></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={coverImg} title={'OUR MENU'} subTitle={''}></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={coverImg} title={'OUR MENU'} subTitle={''}></Cover>
            <PopularMenu></PopularMenu>

        </div>
    );
};

export default Menu;