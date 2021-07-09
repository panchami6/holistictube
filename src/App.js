import './App.css';
import Home from "./Pages/Home/Home"
import { Routes, Route } from 'react-router-dom';
import {DetailedVideo} from '../src/Components/DetailedVideo';
import { Playlist } from './Pages/Playlist/Playlist';
import {CustomPlaylist} from './Pages/CustomPlaylist/CustomPlaylist';
import { Navigation } from './Components/NavigationBar/Navigation';
import Login from "./Pages/Login/Login";
import SignUp from './Pages/SignUp/SignUp';
import {PrivateRoute} from "./Components/PrivateRoute";
import { CustomPlaylistItems } from './Pages/CustomPlaylist/CustomPlaylistItems';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:videoId" element={<DetailedVideo />} />
        <PrivateRoute path="/watchLater" element={<Playlist />} />
        <PrivateRoute path="/playlist" element={<CustomPlaylist />} />
        <PrivateRoute path={`/playlists/:id`} element={<CustomPlaylistItems />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
