
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './Components/login/login'
import Register from './Components/register/Register'
import NotFound from './Components/notfound/NotFound'
import Movie from './Components/movies/Movie'
import MovieDetails from './Components/movies/MovieDetails'
import MainComponent from './Components/mainComponent/MainComponent'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Favorite from './Components/favorite/Favorite'
import Home from './Components/Home/Home'
import { AuthProvider } from './context/auth'
import { useState } from 'react'
import UserProfile from './Components/userProfile/User.Profile'
import RequireAuth from './Components/Guards/requireAuthGuard'

const appRouter = createBrowserRouter([
  {path :"/" ,element:<Home/> },
  {path:"/main",element:<MainComponent /> ,
      children:[
        {path :"movies" ,element:<Movie/>},
        {path :"details/:id" ,element:<MovieDetails/>},
        {path :"favorite" ,element:<Favorite />},
        {path :"profile" ,element:<RequireAuth><UserProfile /></RequireAuth>},
  ]},
  {path :"login" ,element:<Login/>},
  {path :"*" ,element:<NotFound/>},
  {path :"signup" ,element:<Register/>}
  ])
function App() {
  const [authuser,setAuthUser]=useState(null);

  const login =(user)=>{
    console.log("done")
    setAuthUser(user)
  }
  
  const logout=()=>{
    console.log("delete")
    setAuthUser(null)
  }
  return (
      <>
       <AuthProvider value={{authuser,login, logout}}>
           <Provider store={store}>
              <RouterProvider router={appRouter}></RouterProvider>
          </Provider>
       </AuthProvider>
      </>
  )
}

export default App
