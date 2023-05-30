import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, coverImg, title, subTitle }) => {
    return (
        <div className="mb-20">
            {
                title && <Cover img={coverImg} title={title} subTitle={subTitle}></Cover>
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