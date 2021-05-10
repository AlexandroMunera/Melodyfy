import * as React from "react"
import Seo from "../components/atoms/seo/seo"
import ListFavorites from "../components/organisms/list-favorites/ListFavorites"
import Layout from "../components/templates/layout/layout"

const Favorites = () => (
  <Layout>
    <Seo title="Favorites" />
    <ListFavorites />
  </Layout>
)

export default Favorites
