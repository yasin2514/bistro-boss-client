import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../../Hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category == 'popular')

    return (
        <section className="mb-20">
            <SectionTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="md:grid grid-cols-2 gap-x-14 gap-y-20">
                {
                    popular && popular.map(item => (
                        <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>
                    ))
                }
            </div>
            <div className="text-center mt-5"><button className='btn-2'>View Full Menu</button></div>
        </section>
    );
};

export default PopularMenu;