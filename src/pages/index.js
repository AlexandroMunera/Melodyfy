import React, { useEffect, useState } from "react"
import Seo from "../components/atoms/seo/seo"
import ListNewReleases from "../components/organisms/list-new-releases/ListNewReleases"
import Layout from "../components/templates/layout/layout"
import Login from "./Login"

const IndexPage = ({ location }) => {
  const [tokenSpotify, setTokenSpotify] = useState()

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTokenSpotify(localStorage.getItem("tokenSpotify"))
    }

    if (location.hash !== "") {
      if (location.hash.split("=")[0] === "#access_token") {
        setTokenSpotify(location.hash.split("=")[1])
        localStorage.setItem("tokenSpotify", location.hash.split("=")[1])
      }
    }
  }, [location.hash])

  return tokenSpotify !== null ? (
    <Layout>
      <Seo title="Home" />
      <ListNewReleases />
    </Layout>
  ) : (
    <Login />
  )
}

export default IndexPage
