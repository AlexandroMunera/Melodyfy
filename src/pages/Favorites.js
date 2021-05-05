import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/templates/layout/layout"
import Seo from "../components/atoms/seo/seo"
import ListFavorites from "../components/organisms/list-favorites/ListFavorites"

const Favorites = () => {
  return (
    <Layout>
      <Seo title="Favorites" />
      <ListFavorites />
      <Link to="/">Go Home</Link>
    </Layout>
  )
}

export default Favorites
