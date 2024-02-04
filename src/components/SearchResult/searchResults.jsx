import "./searchresult.css";
import { useState } from "react";
import TrackList from "../TrackList/Tracklist";
export default function SearchResult({ searchResults, onAddTrack }) {
  return (
    <div className="SearchResults">
      <h2>Result</h2>
      <TrackList tracks={searchResults} onAddTrack={onAddTrack} />
    </div>
  );
}
