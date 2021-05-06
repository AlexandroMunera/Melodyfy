import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Seo from "../components/atoms/seo/seo"
import ListNewReleases from "../components/organisms/list-new-releases/ListNewReleases"
import Login from "./Login"

const IndexPage = ({ location }) => {
  const [tokenSpotify, setTokenSpotify] = useState(
    localStorage.getItem("tokenSpotify")
  )

  useEffect(() => {
    if (location.hash !== "") {
      if (location.hash.split("=")[0] === "#access_token") {
        setTokenSpotify(location.hash.split("=")[1])
        localStorage.setItem("tokenSpotify", location.hash.split("=")[1])
      }
    }
  }, [location.hash])

  return tokenSpotify !== null ? (
    <>
      <Seo title="Home" />

      <ListNewReleases />

      <Link to="/Favorites/">Your favorites</Link>
    </>
  ) : (
    <Login />
  )
}

export default IndexPage
