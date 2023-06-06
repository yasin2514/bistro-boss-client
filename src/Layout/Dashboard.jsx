import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaHamburger,FaShoppingBag,FaPhone } from "react-icons/fa";
const Dashboard = () => {
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
                    <li><NavLink to={'/dashboard/userHome'}><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to={'/dashboard/history'}><FaWallet></FaWallet>Payment History</NavLink></li>
                    <li><NavLink to={'/dashboard/reservation'}><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink></li>
                    <li><NavLink to={'/dashboard/mycart'}><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
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