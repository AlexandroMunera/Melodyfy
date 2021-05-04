import * as React from "react"
import { Link } from "gatsby"
import Layout from "./layout"
import Seo from "../components/seo"
import LoginForm from "../components/organisms/login-form/LoginForm";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hello !</h1>
    <p>Welcome to your new favorite site.</p>

    <LoginForm />
    
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
