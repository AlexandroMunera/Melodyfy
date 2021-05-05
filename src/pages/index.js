import * as React from "react"
import { getParamValues } from "../utils/functions"
import Login from "./Login"
import { Link } from "gatsby"
import Layout from "../components/templates/layout/layout"
import Seo from "../components/atoms/seo/seo"
import { Typography } from "../components/atoms/typography/Typography"

const IndexPage = () => {
  const params = getParamValues(window.location.href)

  return params.expires_in !== undefined ? (
    <Layout>
      <Seo title="Home" />
      <Typography variant="h1">Popular albumns</Typography>
      <Link to="/Favorites/">Your favorites</Link>
    </Layout>
  ) : (
    <Login />
  )
}

export default IndexPage
