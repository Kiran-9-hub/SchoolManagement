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


const App = () => {
  const route = createBrowserRouter([
    {
      path:"/",
      element:<Root/>,
      children:[
        {
          path:"/home",
          element:<Home/>
        },
        {
          path:"/admin",
          element:<Admin/>
        },
        {
          path:"/students",
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
          path:"/teachers",
          element:<Teachers/>
        },
        {
          path:"/lists/teachers",
          element:<TeachersList/>
        },
        {
          path:"/subjects",
          element:<Subject/>
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
