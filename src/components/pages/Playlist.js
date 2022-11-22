import React from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as PlayIcon } from "../../svgs/play.svg";
import { ReactComponent as HeartIcon } from "../../svgs/heart.svg";
import { ReactComponent as NoteIcon } from "../../svgs/note.svg";
import { Link } from "react-router-dom";
import { dataPlaylists } from "./../Playlists";

export const songsArray = [
  {
    id: 1,
    songName: "Held Down",
    songArtist: "Laura Marling",
    songDuration: "4m 30s",
    songLikes: "22 likes",
    songDescription: "this is a short description",
  },
  {
    id: 2,
    songName: "Lose yourself",
    songArtist: "Eminem",
    songDuration: "4m 30s",
    songLikes: "42 likes",
    songDescription: "this is a short description",
  },
  {
    id: 3,
    songName: "Jabajaba",
    songArtist: "Laura Marling",
    songDuration: "4m 30s",
    songLikes: "32 likes",
    songDescription: "this is a short description",
  },
  {
    id: 4,
    songName: "Held UP",
    songArtist: "Laura Marling",
    songDuration: "4m 30s",
    songLikes: "11 likes",
    songDescription: "this is a short description",
  },
  {
    id: 5,
    songName: "Held Down",
    songArtist: "Laura Marling",
    songDuration: "4m 30s",
    songLikes: "52 likes",
    songDescription: "this is a short description",
  },
];

const PlaylistPage = () => {
  const { id } = useParams();

  const currentPlaylistData = dataPlaylists.find(
    (playlist) => playlist.id == id
  );

  return (
    <div className="playlistPage">
      <div className="mainInner">
        <div className="playlistPageInfo">
          <div className="playlistPageImage">
            <img src={currentPlaylistData.img} alt="pic" />
          </div>
          <div className="playlistPageContent">
            <p className="smallText uppercase bold">Playlist</p>
            <h1>{currentPlaylistData.name}</h1>

            <p className="tagline">{currentPlaylistData.desc}</p>
            <div className="playlistPageDesc">
              <p className="spotify">Spotify</p>
              <span>{currentPlaylistData.likes}</span>
              <span>{currentPlaylistData.duration}</span>
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

          <ul className="songList">
            {songsArray.map((song) => {
              return (
                <li key={song.id}>
                  <div className="songIcon">
                    <NoteIcon className="noteI" />
                    <PlayIcon className="playI" />
                  </div>
                  <div className="songDetails">
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to={`/singleSongPage/${song.id}`}
                    >
                      <h3>{song.songName}</h3>
                    </Link>
                    <span>{song.songArtist}</span>
                  </div>
                  <div className="songTime">
                    <span>{song.songDuration}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
