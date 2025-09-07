import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AppLayout from './layout/AppLayout';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import PageNotFound from './components/PageNotFound';


function App() {

  const router = createBrowserRouter([
    {
      element: <AppLayout />,

      children: [
        {
          path: '/',
          element: <Home />
        }, 
        {
          path: '/privacy',
          element: <Privacy/>
        },

        //Catch-all route for 404 
        {
          path: '*',
          element: <PageNotFound/>,
        },  
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
