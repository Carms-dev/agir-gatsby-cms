import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function PrivacyPage() {
  return (
    <Layout>
      <Seo title="Privacy Policy | AGIR Montreal" />
      <Link to="/">Go back to Landing</Link>
    </Layout>
  )
}
