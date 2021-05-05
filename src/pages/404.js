import * as React from "react"

import Layout from "../components/templates/layout/layout"
import Seo from "../components/atoms/seo/seo"
import { Typography } from "../components/atoms/typography/Typography"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Typography variant="h1">404: Not Found</Typography>
    <Typography variant="p">
      You just hit a route that doesn&#39;t exist... the sadness.
    </Typography>
  </Layout>
)

export default NotFoundPage
