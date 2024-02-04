import "./playlist.css";
import Track from "../Track/Track";
import TrackList from "../TrackList/Tracklist";

export default function Playlist({
  playlist,
  setPlaylist,
  playlistTracks,
  removeTracksFromPlaylist,
  SavePlaylist,
}) {
  return (
    <div className="playlist">
      <input
        type="text"
        placeholder="Enter playlist Name"
        onChange={({ target }) => setPlaylist(target.value)}
        value={playlist}
      />
      <h2 className="playlist-title">{playlist}</h2>
      {/* <TrackList /> */}
      <button className="playlist-save" onClick={SavePlaylist}>
        Save to Spotify
      </button>

      <TrackList
        tracks={playlistTracks}
        removeTracksFromPlaylist={removeTracksFromPlaylist}
        isRemoval={true}
      />
    </div>
  );
}
