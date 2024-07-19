
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './features/navbar/Navbar'
import ProductList from './features/product-list/components/ProductList'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Home from './pages/Home'
import CartPage from './pages/CartPage'
import CheckOut from './pages/CheckOut'
import ProductDetailPage from './pages/ProductDetailPage'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/login",
      element: <LoginPage></LoginPage>
    },
    {
      path: "/signup",
      element: <SignupPage></SignupPage>
    },
    {
      path: "/cart",
      element: <CartPage></CartPage>
    },
    {
      path: "/checkout",
      element: <CheckOut></CheckOut>
    },
    {
      path: '/product-detail',
      element: <ProductDetailPage></ProductDetailPage>
    }
  ])

  return (
    <div className='App'>
        <RouterProvider router={router}/>
    </div>
  )
}

export default App
