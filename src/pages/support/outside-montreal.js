import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

export default function OutsideMontrealPage() {
  return (
    <Layout>
      <Seo title="Outside Montreal" />
      <Link to="/">Go back to Landing</Link>
    </Layout>
  )
}
