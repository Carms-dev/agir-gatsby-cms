import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function PrivacyPage() {
  return (
    <Layout>
      <Seo title="Privacy Policy | AGIR Montreal" />
      <Link to="/">Go back to Landing</Link>
    </Layout>
  )
}
