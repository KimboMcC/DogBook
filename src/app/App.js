import Feed from '../components/feed/feed'
import Header from '../components/header/Header'
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import Root from '../pages/Root'
import Discover from '../pages/Discover'


const router = createBrowserRouter( createRoutesFromElements (
  <Route path="/" element={ <Root/>} >
    <Route path="d" element={ <Discover/> } />
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
