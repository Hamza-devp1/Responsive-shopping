// // app/layout.js
import ShopContextProvider from '../context/ShopContext'; 
import Navbar from '../components/Navbar/Navbar'; 
import Footer from '../components/Footer/Footer';

const Layout = ({ children }) => {

    
    return (
      <ShopContextProvider>
        <div>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
        </ShopContextProvider>
 
    );
};

export default Layout;
