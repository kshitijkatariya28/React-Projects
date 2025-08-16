import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Layout from './Layout.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Github,{getGithubInfo} from './pages/Github/Github.jsx'
import User from './pages/User/User.jsx'


// const route = createBrowserRouter([
//   {
//     path : "/",
//     element : <Layout/>,
//     children : [
//       {
//         path : "",
//         element : <Home/>
//       },
//        {
//         path : "/about",
//         element : <About/>
//       },
//        {
//         path : "/contact",
//         element : <Contact/>
//       }
//     ]
//   }
// ])

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
       <Route path='' element={<Home/>}/>
       <Route path='about' element={<About/>}/>
       <Route path='contact' element={<Contact/>}/>
       <Route path='user/:id' element={<User/>}/>
       <Route path='github' loader={getGithubInfo} element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}> </RouterProvider>
  </StrictMode>,
)
