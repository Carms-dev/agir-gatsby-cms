import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

export default function OrganizationalTrainingPage() {
  return (
    <Layout>
      <Seo title="Organizational Training" />
      <Link to="/">Go back to Landing</Link>
    </Layout>
  )
}
