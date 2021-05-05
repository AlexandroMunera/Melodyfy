import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/templates/layout/layout"
import Seo from "../components/atoms/seo/seo"

const Favorites = () => (
  <Layout>
    <Seo title="Favorites" />

    <h1>Your Favorites</h1>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default Favorites
