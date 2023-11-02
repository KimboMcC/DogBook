import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import Root from '../pages/Root'
import Discover from '../pages/Discover'
import Settings from '../pages/Settings'
import Profile from '../pages/Profile'
import Search from '../pages/Search'
import SignUp from '../pages/SignUp'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, selectPosts } from '../redux/posts/postsSlice'
import { useEffect } from 'react'
import Loading from '../components/loading/Loading'

const router = createBrowserRouter( createRoutesFromElements (
  <Route path="/" element={ <Root/>} >
    <Route index element={<SignUp/>} />
    <Route path="discover" element={ <Discover/> } />
    <Route path="settings" element={ <Settings/> } />
    <Route path="profile" element={ <Profile/> } />
    <Route path="search" element={ <Search/> } />
    <Route path="loading" element={ <Loading/> } />
  </Route>
))

function App() {
  const dispatch = useDispatch()
  const { loading, postArray } = useSelector(selectPosts)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  if (loading === 'loading') {
    // You can render a loading indicator here if needed
    return <Loading />
  }

  return (
    <>
      {loading === 'succeeded' && <RouterProvider router={ router } />}
      {loading === 'failed' && <p>Loading failed</p>}
    </>
  );
}

export default App;

