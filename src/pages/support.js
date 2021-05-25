import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function SupportPage() {
  return (
    <Layout>
      <Seo title="Support | AGIR Montreal" />
      <Link to="/">Go back to Landing</Link>
    </Layout>
  )
}
