import "./track.css";
import { useCallback } from "react";
export default function Track({ track, onAddTrack, onRemoveTrack, isRemoval }) {
  const { id, name, artist, album } = track;
  const addTrack = useCallback(() => {
    onAddTrack(track);
  }, [onAddTrack, track]);

  const removeTrack = useCallback(() => {
    onRemoveTrack(track);
  }, [onRemoveTrack, track]);
  const renderAction = () => {
    if (isRemoval) {
      return (
        <button className="track-action" onClick={removeTrack}>
          -
        </button>
      );
    }

    return (
      <button className="track-action" onClick={addTrack}>
        +
      </button>
    );
  };
  return (
    <div className="Track" key={id}>
      <div className="Track-information" id={id}>
        <h3>{name}</h3>
        <p>
          {artist}|{album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
}
