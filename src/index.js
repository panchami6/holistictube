import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { PlaylistProvider } from './Context/playlist-context';
import { CustomPlaylistProvider } from './Context/customPlaylist-context';
import { AuthProvider } from './Context/auth-context';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <PlaylistProvider>
          <CustomPlaylistProvider>
            <App />
        </CustomPlaylistProvider>
        </PlaylistProvider>
        </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
