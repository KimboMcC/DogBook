import Navbar from '../components/navbar/navbar'
import Feed from '../components/feed/feed'
import PostList from './Postlist'
import User from '../components/user/User'
import Comment from '../components/comments/comment'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Feed />
    </div>
  );
}
// <Navbar />
// <Feed />
export default App;
