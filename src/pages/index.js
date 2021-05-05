import * as React from "react"
import { getParamValues } from "../utils/functions"
import Home from "./Home"
import Login from "./Login"

const IndexPage = () => {
  const params = getParamValues(window.location.href)

  return params.expires_in !== undefined ? <Home /> : <Login />
}

export default IndexPage
