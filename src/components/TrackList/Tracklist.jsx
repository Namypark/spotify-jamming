import { songs } from "../dataset";
import Track from "../Track/Track";
import "./tracklist.css";
export default function TrackList({
  tracks,
  onAddTrack,
  removeTracksFromPlaylist,
  isRemoval,
}) {
  return (
    <div className="TrackList">
      {tracks.map((track) => (
        <Track
          key={track.id}
          track={track}
          onAddTrack={onAddTrack}
          onRemoveTrack={removeTracksFromPlaylist}
          isRemoval={isRemoval}
        />
      ))}
    </div>
  );
}
