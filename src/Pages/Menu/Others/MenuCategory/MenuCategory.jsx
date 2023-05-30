import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, coverImg, title }) => {
    return (
        <div className="mb-20">
            {
                title && <Cover img={coverImg} title={"Dessert"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
            }
            <div className="md:grid grid-cols-2 gap-x-14 gap-y-20 mt-20">
                {
                    items && items.map(item => (
                        <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>
                    ))
                }
            </div>
        </div>
    );
};

export default MenuCategory;