import { createBrowserRouter } from "react-router-dom";
import Main from "./Layouts/Main";
import Home from "./Pages/Home";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import AddJob from "./Pages/AddJob";
import JobDetails from "./Pages/JobDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
    {
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/registration',
        element:<Registration></Registration>
    },
    {
      path:'/job/:id',
      element:<JobDetails></JobDetails>,
      loader:({params})=>fetch(`http://localhost:9000/job/${params.id}`)
    },
    {
      path:'/addJob',
      element:<AddJob></AddJob>
    }


    ]
  },
]);
