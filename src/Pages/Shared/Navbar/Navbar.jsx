import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navOptions = <>
        <NavLink className={({ isActive }) => isActive ? "text-orange-700" : ""} to={'/'}>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-orange-700" : ""} to={'/menu'}>Our Menu</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-orange-700" : ""} to={'/'}>Home</NavLink>
    </>
    return (
        <div className="navbar fixed py-5 max-w-screen-2xl mx-auto top-0 z-50 bg-opacity-70 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <span className="space-x-14 pr-5">
                    {navOptions}
                </span>
            </div>
        </div>
    );
};

export default Navbar;