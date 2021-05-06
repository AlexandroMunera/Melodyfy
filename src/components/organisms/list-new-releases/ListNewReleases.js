import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import SpotifyWebApi from "../../../services/spotify-web-api.js"
import { Typography } from "../../atoms/typography/Typography"
import AlbumCard from "../../molecules/albumn-card/AlbumCard.js"
import "./listNewReleases.scss"

const ListNewReleases = () => {
  const [albumsCards, setAlbumsCards] = useState([])

  useEffect(() => {
    if (localStorage.getItem("tokenSpotify") === null) {
      // Spotify token is required
      navigate("/")
    } else {
      let spotifyApi = new SpotifyWebApi()

      spotifyApi.setAccessToken(localStorage.getItem("tokenSpotify"))

      spotifyApi.getNewReleases().then(
        function (data) {
          setAlbumsCards(data.albums.items)
        },
        function () {
          navigate("/")
        }
      )
    }
  }, [])

  return (
    <>
      <Typography variant="h2">New Releases</Typography>
      <section className="o-list-new-releases">
        {albumsCards.map(element => (
          <AlbumCard
            key={element.id}
            imageUrl={element.images[0].url}
            title={element.name}
            by={element.artists[0].name}
          />
        ))}
      </section>
    </>
  )
}

export default ListNewReleases
