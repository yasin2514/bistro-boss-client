import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaHamburger, FaShoppingBag, FaPhone, FaUtensils, FaBook, FaUsers } from "react-icons/fa";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
const Dashboard = () => {
    const [cart] = useCart();

    // TODO: load data from the server to have dynamic isAdmin based on Data
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#D1A054] ">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <li><NavLink to={'/dashboard/adminHome'}><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to={'/dashboard/addItem'}><FaUtensils></FaUtensils>Add an Items</NavLink></li>
                            <li><NavLink to={'/dashboard/manageItems'}><FaUtensils></FaUtensils>Manage Items</NavLink></li>
                            <li><NavLink to={'/dashboard/bookings'}><FaBook></FaBook>Manage Bookings</NavLink></li>
                            <li><NavLink to={'/dashboard/allUsers'}><FaUsers></FaUsers>All Users</NavLink></li>



                        </> :
                            <>
                                <li><NavLink to={'/dashboard/userHome'}><FaHome></FaHome>User Home</NavLink></li>
                                <li><NavLink to={'/dashboard/history'}><FaWallet></FaWallet>Payment History</NavLink></li>
                                <li><NavLink to={'/dashboard/reservation'}><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink></li>

                                <li><NavLink to={'/dashboard/mycart'}><FaShoppingCart></FaShoppingCart>My Cart <span className="badge badge-secondary">+{cart?.length || 0}</span></NavLink>
                                </li>

                            </>
                    }

                    {/* diver all same user and admin */}
                    <div className="divider"></div>


                    <li><NavLink to={'/'}><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to={'/dashboard/menu'}><FaHamburger></FaHamburger>Menu</NavLink></li>
                    <li><NavLink to={'/dashboard/shop'}><FaShoppingBag></FaShoppingBag>Shop</NavLink></li>
                    <li><NavLink to={'/dashboard/contact'}><FaPhone></FaPhone>Contact</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;