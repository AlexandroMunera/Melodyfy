import { Link } from "gatsby"
import * as React from "react"
import Seo from "../components/atoms/seo/seo"
import ListNewReleases from "../components/organisms/list-new-releases/ListNewReleases"
import Layout from "../components/templates/layout/layout"
import { getParamValues } from "../utils/functions"
import Login from "./Login"

const IndexPage = () => {
  const params = getParamValues(window.location.href)

  return params.expires_in !== undefined ? (
    <Layout>
      <Seo title="Home" />

      <ListNewReleases />

      <Link to="/Favorites/">Your favorites</Link>
    </Layout>
  ) : (
    <Login />
  )
}

export default IndexPage
