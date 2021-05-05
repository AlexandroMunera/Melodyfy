import * as React from "react"

import SpotifyWebApi from "../../../services/spotify-web-api.js"
import { Typography } from "../../atoms/typography/Typography"
import AlbumCard from "../../molecules/albumn-card/AlbumCard.js"
import './listFavorites.scss'

const ListFavorites = () => {
  let spotifyApi = new SpotifyWebApi()

  const [albumsCards, setAlbumsCards] = React.useState([])

  spotifyApi.setAccessToken(
    "BQC2ub6WvY1z338uMRsGRYGUfXJ-JKiqIT1CeKITpZfOXcaHjCFJinhMfgaZJ958QX2KNVe6-TAHjjdVHT1XviXRonqvvCASWa0au36BIBQCJHxKx8ZhXM1OofbN793AgH-3A0_kdGBGGG7EvH_hDg"
  )

  spotifyApi.getNewReleases().then(
    function (data) {
      setAlbumsCards(data.albums.items)
    },
    function (err) {
      console.error(err)
    }
  )

  return (
    <>
      <Typography variant="h2">My Favorites</Typography>
      <section className="o-list-favorites">
        {albumsCards.map(element => (
          <AlbumCard
            imageUrl={element.images[0].url}
            title={element.name}
            by={element.artists[0].name}
          />
        ))}
      </section>
    </>
  )
}

export default ListFavorites
