import * as React from "react"

import SpotifyWebApi from "../../../services/spotify-web-api.js"
import { Typography } from "../../atoms/typography/Typography"
import AlbumCard from "../../molecules/albumn-card/AlbumCard.js"
import "./listFavorites.scss"

const ListFavorites = () => {
 
  const [albumsCards, setAlbumsCards] = React.useState([])

  React.useEffect(() => {

    let spotifyApi = new SpotifyWebApi()
  
    spotifyApi.setAccessToken(
      "BQDjmt0w2NTAQJIGF9weYvWRrHlfMO1mkYLhJQv9kkdlUgDYymg9begx3O8cABoUslaNx5fo4xvGYfyzf5_LyMaB0SOaAE8nDkKBntWuax8JC9dh9YOr_9elZAem78ypkUiAf1DM1K2U3DOnme2qGg"
    )

    spotifyApi.getUserPlaylists().then(
      function (data) {
        setAlbumsCards(data.items)
      },
      function (err) {
        console.error(err)
      }
    )
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
