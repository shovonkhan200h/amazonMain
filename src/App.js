import './App.css';
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Banner from './Component/Banner/Banner';
import Footer from './Component/Footer/Footer';
import Product from './Component/Product/Product';
import Login from './Component/Login/Login';
import { createContext, useState } from 'react';
import { AuthContext } from './Component/Context/AuthContext';
import ProductDetails from './Component/ProductDetails/ProductDetails';

export const cartContext = createContext()

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

const MainPage = () => {
  return (
    <>
      <div>
        <Banner />
        <div className='w-full -mt-10 xl:-mt-36 mdl:-mt-36'>
          <Product />
        </div>

      </div>

    </>
  );
};

const App=()=> {
  const [cart,setCart]=useState([])
  const [showCart, setShowCart] = useState(false);
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout>
          <MainPage />
        </Layout>
      )
    },
    {
      path: '/Login',
      element: (

        <Login></Login>

      )
    },{
      path:'/product/:id',
      element:(
        <Layout>
          <ProductDetails/>
        </Layout>
      )
    }
  ]);

  return (
    <AuthContext>
      <cartContext.Provider value={[cart,setCart]}>
      <div className='font-bodyFont bg-gray-50'>
        <RouterProvider router={router}>
          <Routes>
            <Route path="/" element={<Layout><MainPage /></Layout>} />
          </Routes>
        </RouterProvider>
      </div>
      </cartContext.Provider>
    </AuthContext>

  );
}

export default App;
