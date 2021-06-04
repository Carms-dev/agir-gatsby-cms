import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

export default function AdvocacyPage() {
  return (
    <Layout>
      <Seo title="Advocacy" />
      <Link to="/">Go back to Landing</Link>
    </Layout>
  )
}
