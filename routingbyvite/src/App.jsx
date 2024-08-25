
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Header from './Header'
function App() {
 
  const router = createBrowserRouter([
    {
      path:"/",
      element: <> <Header/> <Home/> </>
    },
    {
      path: "/contact",
      element: <> <Header/>  <Contact/></>
    },
    {
      path:"/about",
      element: <> <Header/> <about/></>
    }
  ])

  return (
    <>
              <RouterProvider router={router} />
    </>
  )
}

export default App
