import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

export default function AdvocacyPage() {
  return (
    <Layout>
      <Seo title="Advocacy | AGIR Montreal" />
      <Link to="/">Go back to Landing</Link>
    </Layout>
  )
}
