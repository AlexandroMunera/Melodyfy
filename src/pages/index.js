import * as React from "react"
import { getParamValues } from "../utils/functions"

import Login from "./Login"

const IndexPage = () => {
  const params = getParamValues(window.location.href)
  // const urlParams = new URLSearchParams(window.location.search);
  console.log(`params`, params)
  console.log(`expires_in`, params.expires_in)
  console.log(`expiresdfas_in`, params.expires_idsfadn)

  return params.expires_in !== undefined ? <h1>Home</h1> : <Login />
}

export default IndexPage
