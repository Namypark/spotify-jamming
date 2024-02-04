import { useState } from "react";
import "./App.css";
import Playlist from "./components/Playlist/Playlist";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResult from "./components/SearchResult/SearchResults";
import Track from "./components/Track/Track";
import { songs } from "./components/dataset";
import { Spotify } from "./util/Spotipy.js";

export default function App() {
  const [searchResults, setSearchResults] = useState(songs);
  const [playlist, setPlaylist] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playListTracksUri, setPlayListTracksUri] = useState([]);

  function searchTerm(term) {
    Spotify.getSearch(term).then((result) => setSearchResults(result));
  }
  const addTracksToPlaylist = (track) => {
    if (playlistTracks.some((tracks) => tracks.id === track.id)) {
      alert("track already exists in the playlist");
    } else {
      setPlaylistTracks((prev) => [...prev, track]);
      setPlayListTracksUri((prev) => [...prev, track.uri]);
    }
  };

  const removeTracksFromPlaylist = (track) => {
    setPlaylistTracks((prev) =>
      prev.filter((prevTrack) => prevTrack.id !== track.id)
    );
  };

  const SavePlaylist = () => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.getPlaylist(playlist, playListTracksUri).then(() => {
      setPlaylist("New Playlist");
      setPlaylistTracks([]);
      setPlayListTracksUri([]);
    });
  };

  return (
    <div>
      <h1>
        Ja<span className="purple">mmm</span>ing
      </h1>
      <div className="app">
        <SearchBar searchTerm={searchTerm} />

        <div className="app-playlist">
          <SearchResult
            searchResults={searchResults}
            onAddTrack={addTracksToPlaylist}
          />
          <Playlist
            SavePlaylist={SavePlaylist}
            playlist={playlist}
            playlistTracks={playlistTracks}
            setPlaylist={setPlaylist}
            removeTracksFromPlaylist={removeTracksFromPlaylist}
          />
        </div>
      </div>
    </div>
  );
}
