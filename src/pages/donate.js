import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function DonatePage() {
  return (
    <Layout>
      <Seo title="Donate | AGIR Montreal" />
      <Link to="/">Go back to Landing</Link>
    </Layout>
  )
}
