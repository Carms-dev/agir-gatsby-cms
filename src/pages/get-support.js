import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function GetSupportPage() {
  return (
    <Layout>
      <Seo title="Get Involved" />
      <Link to="/">Go back to Landing</Link>
    </Layout>
  )
}
