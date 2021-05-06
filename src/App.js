import './App.css';
import Home from "./Pages/Home/Home"
import { Routes, Route } from 'react-router-dom';
import {DetailedVideo} from '../src/Components/DetailedVideo';
import { Playlist } from './Pages/Playlist/Playlist';
import {CustomPlaylist} from './Pages/CustomPlaylist/CustomPlaylist';
import { Navigation } from './Components/NavigationBar/Navigation';
import {CustomPlaylistPage} from './Pages/CustomPlaylist/CustomPlaylistPage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:videoId" element={<DetailedVideo />} />
        <Route path="/Playlist" element={<Playlist />} />
        <Route path="/CustomPlaylist" element={<CustomPlaylist />} />
        <Route path="/CustomPlaylist/:playlistId" element = {<CustomPlaylistPage />} />
      </Routes>
    </div>
  );
}

export default App;
