import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/templates/layout/layout"
import Seo from "../components/atoms/seo/seo"
import { Typography } from "../components/atoms/typography/Typography"

const Favorites = () => (
  <Layout>
    <Seo title="Favorites" />
    <Typography variant="h1">Your Favorites</Typography>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default Favorites
