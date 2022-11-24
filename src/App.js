import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Category from './Components/Category/Category';
import CheckOut from './Components/Checkout/CheckOut';
import Courses from './Components/Courses/Courses';
import FAQ from './Components/FAQ/FAQ';
import Register from './Components/Form/Register';
import SignIn from './Components/Form/SignIn';
import Home from './Components/Home/Home';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Main from './layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/courses',
          element: <Courses></Courses>,
          loader: async () => {
            return fetch('http://localhost:5000/courses')
          }
        },
        {
          path: '/courses/category/:id',
          element: <Category></Category>,
          loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
        },
        {
          path: '/checkout/:id',
          element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
        },
        {
          path: '/faq',
          element: <FAQ></FAQ>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/signIn',
          element: <SignIn></SignIn>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '*',
          element: <div className='text-center'>
            <h1>Sorry</h1>
            <p>The route you want to visit doesn't exist. please try again!</p>
            <p>error code: 404</p>
          </div>
        }
      ]
    },
  ])

  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
