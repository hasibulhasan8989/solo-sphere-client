import { createBrowserRouter } from "react-router-dom";
import Main from "./Layouts/Main";
import Home from "./Pages/Home";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import AddJob from "./Pages/AddJob";
import JobDetails from "./Pages/JobDetails";
import MyBids from "./Pages/MyBids";
import MyPostedJobs from "./Pages/MyPostedJobs";
import UpdateJob from "./Pages/UpdateJob";
import ErrorPage from "./Pages/ErrorPage";
import PrivateRoute from "./Layouts/PrivateRoute";
import BidRequests from "./Pages/BidRequests";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
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
      element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
      loader:({params})=>fetch(`http://localhost:9000/job/${params.id}`)
    },
    {
      path:'/addJob',
      element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
    },
    {
      path:'/my-bids',
      element:<PrivateRoute><MyBids></MyBids></PrivateRoute>,
      
      
    },
    {
      path:'/my-posted-jobs',
      element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
    },
    {
      path:'/update-job/:id',
      element:<PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>,
      loader:({params})=>fetch(`http://localhost:9000/job/${params.id}`)
      
    },
    {
      path:`/bit-request`,
      element:<PrivateRoute><BidRequests></BidRequests></PrivateRoute>
    }


    ]
  },
]);
