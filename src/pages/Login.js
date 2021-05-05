import React from "react"
import Layout from "./layout"
// import { Link } from "gatsby"
import Seo from "../components/seo"
import LoginForm from "../components/organisms/login-form/LoginForm"
import "./login.scss"

const Login = () => {
  return (
    <Layout>
      <div className="p-login">
        <Seo title="Home" />
        <h1>Hi there !</h1>
        <p>Welcome to your new favorite site.</p>
        

        <LoginForm />

        {/* <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p> */}
      </div>
    </Layout>
  )
}

export default Login
