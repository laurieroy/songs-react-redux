import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Soulshine", duration: "7:53" },
    { title: "Where is My Mind", duration: "3:53" },
    { title: "Blitzkrieg Bop", duration: "2:13" },
    { title: "Float On", duration: "3:34" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
