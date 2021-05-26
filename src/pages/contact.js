import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function ContactPage() {
  return (
    <Layout>
      <Seo title="Contact | AGIR Montreal" />
      <Link to="/">Go back to Landing</Link>
    </Layout>
  )
}
