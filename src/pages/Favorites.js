import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/atoms/seo/seo"
import ListFavorites from "../components/organisms/list-favorites/ListFavorites"

const Favorites = () => (
  <>
    <Seo title="Favorites" />
    <ListFavorites />
    <Link to="/">Go Home</Link>
  </>
)

export default Favorites
