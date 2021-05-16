import './App.css';
import Home from "./Pages/Home/Home"
import { Routes, Route } from 'react-router-dom';
import {DetailedVideo} from '../src/Components/DetailedVideo';
import { Playlist } from './Pages/Playlist/Playlist';
import {CustomPlaylist} from './Pages/CustomPlaylist/CustomPlaylist';
import { Navigation } from './Components/NavigationBar/Navigation';
import Login from "./Pages/Login/Login";
import {PrivateRoute} from "./Components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:videoId" element={<DetailedVideo />} />
        <PrivateRoute path="/Playlist" element={<Playlist />} />
        <PrivateRoute path="/CustomPlaylist" element={<CustomPlaylist />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
