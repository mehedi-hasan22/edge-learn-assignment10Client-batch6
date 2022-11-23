import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Courses from './Components/Courses/Courses';
import FAQ from './Components/FAQ/FAQ';
import Register from './Components/Form/Register';
import SignIn from './Components/Form/SignIn';
import Home from './Components/Home/Home';
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
