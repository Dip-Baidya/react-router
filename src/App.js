import './App.css';
import Home from './Home/Home';
import Friends from './Friends/Friends';
import NotFound from './NotFound/NotFound';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Link } from 'react-router-dom';
import Header from './Header/Header';
import FriendDetail from './FriendDetail/FriendDetail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header> </Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/friends" element={<Friends></Friends>}></Route>
          <Route path="/friends/:friendId" element={<FriendDetail></FriendDetail>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
          {/* </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 