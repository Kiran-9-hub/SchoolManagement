import React from 'react'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Root from './Root'
import Home from './Pages/Home'
import Students from './Pages/Students'
import Parents from './Pages/Parents'
import Teachers from './Pages/Teachers'
import Login from './components/Login/Login'
import Admin from './Pages/Admin'
import Register from './components/Register/Register'
import TeachersList from './components/Lists/TeachersList'
import StudentList from './components/Lists/StudentList'
import ParentList from './components/Lists/ParentList'
import Subject from './Pages/Subject'
import Classes from './Pages/Classes'
import Dashboard from './Pages/Dashboard'
import Carousel from './components/Carousel/Carousel'
import ForgotPassword from './components/forgotpassword/ForgotPassword'
import About from './components/about/About'
import Contact from './components/contact/Contact'




const App = () => {
  const route = createBrowserRouter([
    {
      path:"/",
      element:<Root/>,
      children:[
        {
          path:"/",
          element:<Dashboard/>
        },
        {
          path:"/home",
          element:<Home/>
        },
        {
          path:"/admin",
          element:<Admin/>
        },
        {
          path:"/student",
          element:<Students/>
        },
        {
          path:"/lists/students",
          element:<StudentList/>
        },
        {
          path:"/parents",
          element:<Parents/>
        },
        {
          path:"/lists/parents",
          element:<ParentList/>
        },
        {
          path:"/teacher",
          element:<Teachers/>
        },
        {
          path:"/lists/teachers",
          element:<TeachersList/>
        },
        {
          path:"/subjects",
          element:<Subject/>
        },
        {
          path:"/classes",
          element:<Classes/>
        },{
          path:"/corosal",
          element:<Carousel/>
        },
        {
          path:"/forgot-password",
          element:<ForgotPassword/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        }
        
        
       
       
      ]
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/register",
      element:<Register/>
    }
    
   

  ])
  return (
   <div>
    <RouterProvider router={route}/>
   </div>
  )
}

export default App
