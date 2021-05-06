import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import SpotifyWebApi from "../../../services/spotify-web-api.js"
import { Typography } from "../../atoms/typography/Typography"
import AlbumCard from "../../molecules/albumn-card/AlbumCard.js"
import "./listFavorites.scss"

const ListFavorites = () => {
  const [albumsCards, setAlbumsCards] = useState([])

  useEffect(() => {
    if (localStorage.getItem("tokenSpotify") === null) {
      // Spotify token is required
      navigate("/")
    } else {
      let spotifyApi = new SpotifyWebApi()

      spotifyApi.setAccessToken(localStorage.getItem("tokenSpotify"))

      spotifyApi.getUserPlaylists().then(
        function (data) {
          setAlbumsCards(data.items)
        },
        function () {
          navigate("/")
        }
      )
    }
  }, [])

  return (
    <>
      <Typography variant="h2">My Favorites</Typography>
      <section className="o-list-favorites">
        {albumsCards.map(element => (
          <AlbumCard
            key={element.id}
            imageUrl={element.images[0].url}
            title={element.name}
            by={element.owner.display_name}
          />
        ))}
      </section>
    </>
  )
}

export default ListFavorites
