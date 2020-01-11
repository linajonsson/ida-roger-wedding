import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BlockOne from "../components/content/blockOne"
import WelcomeText from "../components/content/welcomeText"
import Destination from "../components/content/destination"
import Accomodation from "../components/content/accomodation"
import Transportation from "../components/content/transportation"
import Happenings from "../components/content/happenings"

const IndexPage = () => (
  <Layout>
    <SEO title="hej" />
    <BlockOne />
    <WelcomeText />
    <Destination />
    <Accomodation />
    <Transportation />
    <Happenings />
  </Layout>
)

export default IndexPage
