import React from "react";
import { ReactComponent as PlayIcon } from "../../svgs/play.svg";
import { ReactComponent as HeartIcon } from "../../svgs/heart.svg";
import { useParams } from "react-router-dom";
import { songsArray } from "./Playlist";

const SingleSongPage = () => {
  const { id } = useParams();

  const currentSongData = songsArray.find((song) => song.id == id);

  return (
    <div className="playlistPage">
      <div className="mainInner">
        <div className="playlistPageInfo">
          <div className="playlistPageImage">
            <img
              src="https://images.unsplash.com/photo-1587201572498-2bc131fbf113?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=924&q=80"
              alt="pic"
            />
          </div>
          <div className="playlistPageContent">
            <p className="smallText uppercase bold">Song</p>
            <h1>{currentSongData.songName}</h1>

            <p className="tagline">{currentSongData.songDescription}</p>
            <div className="playlistPageDesc">
              <p className="spotify">{currentSongData.songArtist}</p>
              <span>{currentSongData.songLikes}</span>
              <span>{currentSongData.songDuration}</span>
            </div>
          </div>
        </div>
        <div className="playlistPageSongs">
          <div className="playlistButtons">
            <span className="playIcon">
              <PlayIcon />
            </span>
            <div className="icons">
              <div className="icon iconsHeart">
                <HeartIcon />
              </div>
              <div className="icon iconsDots"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSongPage;
