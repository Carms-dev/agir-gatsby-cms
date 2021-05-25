import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import HomeBanner from "../components/home-banner"

export default function HomePage() {
  return (
    <Layout>
      <Seo title="Home | AGIR Montreal" />
      <HomeBanner />
      <Link to="/">Go back to Landing</Link>
    </Layout>
  )
}
