import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import Root from '../pages/Root'
import Discover from '../pages/Discover'
import Settings from '../pages/Settings'
import Profile from '../pages/Profile'
import Search from '../pages/Search'


const router = createBrowserRouter( createRoutesFromElements (
  <Route path="/" element={ <Root/>} >
    <Route path="discover" element={ <Discover/> } />
    <Route path="settings" element={ <Settings/> } />
    <Route path="profile" element={ <Profile/> } />
    <Route path="search" element={ <Search/> } />
  </Route>
))



function App() {
  return (
    <>
    <RouterProvider router={ router } />
    </>
  );
}


export default App;
