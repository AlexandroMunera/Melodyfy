import React from "react"
import Layout from "../components/templates/layout/layout"
import Seo from "../components/atoms/seo/seo"
import LoginForm from "../components/organisms/login-form/LoginForm"
import "../styles/login.scss"

const Login = () => {
  return (
    <Layout>
      <div className="p-login">
        <Seo title="Login" />
        <h1>Hi there !</h1>
        <p>Welcome to your new favorite site.</p>       

        <LoginForm />

      </div>
    </Layout>
  )
}

export default Login
