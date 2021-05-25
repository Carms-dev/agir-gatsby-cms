import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function ContactPage() {
  return (
    <Layout>
      <Seo title="Contact | AGIR Montreal" />
      <Link to="/">Go back to Landing</Link>
    </Layout>
  )
}
