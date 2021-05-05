import React from "react"
import Layout from "../components/templates/layout/layout"
import Seo from "../components/atoms/seo/seo"
import LoginForm from "../components/organisms/login-form/LoginForm"
import "../styles/login.scss"
import { Typography } from "../components/atoms/typography/Typography"

const Login = () => {
  return (
    <Layout>
      <div className="p-login">
        <Seo title="Login" />
        <Typography variant="h1">Hi there !</Typography>
        <Typography variant="p">Welcome to your new favorite site.</Typography>
        <LoginForm />
      </div>
    </Layout>
  )
}

export default Login
