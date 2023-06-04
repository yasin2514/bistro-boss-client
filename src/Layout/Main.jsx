import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login')
    return (
        <div className='flex flex-col min-h-screen'>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            <div className='mt-auto'>
                {noHeaderFooter || <Footer></Footer>}
            </div>
        </div>
    );
};

export default Main;