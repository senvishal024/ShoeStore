import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import LoginPage from './Components/Login'
import RegistrationPage from './Components/Registration'
import HomePage from './Pages/Home'
import AdminHome from './Pages/AdminHome'
import Product from './Pages/Product'
import ProductDetailPage from './Pages/ProductDetailPage'
import CartPage from './Pages/Cart'
import CheckoutPage from './Pages/CheckoutPage'
import Order from './Pages/Order'
import AdminOrderpage from './Pages/AdminOrderpage'
import AdminAddProductPage from './Pages/AdminAddProductPage'
import AdminProducts from './Pages/AdminProducts'
import ProductEdit from './Components/ProductEdit'
import WishlistPage from './Pages/WishlistPage'
import Protectedroute from './Components/Protectedroute'
import AdminProtectedRoute from './Components/AdminProtectedRoute'
import {Toaster} from 'react-hot-toast'
import AdminLogin from './Components/AdminLogin'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/registration' element={<RegistrationPage/>} />
        <Route path='/admin-login' element={<AdminLogin/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/admin' element={<AdminProtectedRoute><AdminHome/></AdminProtectedRoute>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/product-detail/:id' element={<ProductDetailPage/>}/>
        <Route path='/cart' element={<Protectedroute><CartPage/></Protectedroute>}/>
        <Route path='/checkout' element={<Protectedroute><CheckoutPage/></Protectedroute>}/>
        <Route path='/order'element={<Protectedroute><Order/></Protectedroute>}/>
        <Route path='/admin-orders' element={<AdminProtectedRoute><AdminOrderpage/></AdminProtectedRoute>}/>
        <Route path='/add-products' element={<AdminProtectedRoute><AdminAddProductPage/></AdminProtectedRoute>}/>
        <Route path='/all-products' element={<AdminProtectedRoute><AdminProducts/></AdminProtectedRoute>}/>
        <Route path='/edit-product/:id' element={<ProductEdit/>}/>
        <Route path='/wishlist' element={<Protectedroute><WishlistPage/></Protectedroute>}/>

      </Routes>
      </BrowserRouter>
      <Toaster
    position="top-right"
    reverseOrder={false}
    toastOptions={{
      duration: 2000,
      style: {
        background: "#4E220F",
        color: "#fff",
        borderRadius: "12px",
      },
    }}
  />
    </>
  )
}

export default App
