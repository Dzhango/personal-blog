import Footer from './Footer';
import Navbar from './Navbar';
import BackgroundVideo from './BackgroundVideo';

const Layout = ({ children }) => {
    return (
        <div>
            <BackgroundVideo/>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout
