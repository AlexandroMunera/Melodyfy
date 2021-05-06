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
      "BQB8vH6c0jliwH1-13Kg-Xjo3SK0-txZv-MoGrqdCY7DOj8-UzIkxuHPeCEyumMzgQie2WQQ1FL6eATOnHQQ1wpaKDEt534SFh4ZXFSAAK0UqoRDTbRD6gkd7OKHgDEg4B7CbgImDKKPGvJMGQBdqg"
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
