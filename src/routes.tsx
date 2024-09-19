import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Profile from "./pages/profile";
import MyPhotos from "./pages/myPhotos";
import SignUp from "./pages/SignUp";
import CreatePost from "./pages/Post";

export const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />, 
    errorElement: <Error />
  }, 
  {
    path: '/post',
    element: <CreatePost />, 
    errorElement: <Error />
  }, 
  {
    path: '/profile',
    element: <Profile />, 
    errorElement: <Error />
  }, 
  {
    path: '/myphotos',
    element: <MyPhotos />, 
    errorElement: <Error />
  }, 
  {
    path: '/login',
    element: <Login />, 
    errorElement: <Error />
  }, 
  {
    path: '/signup',
    element: <SignUp />, 
    errorElement: <Error />
  }, 
])

export default router;