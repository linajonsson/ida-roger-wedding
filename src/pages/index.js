import React from "react"
import Accomodation from "../components/content/accomodation"
import BlockOne from "../components/content/blockOne"
import Destination from "../components/content/destination"
import Happenings from "../components/content/happenings"
import Menu from "../components/content/menu"
import RsvpForm from "../components/content/rsvpForm"
import ToastMadames from "../components/content/toastMadames"
import Transportation from "../components/content/transportation"
import WelcomeText from "../components/content/welcomeText"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DressCode from "../components/content/dressCode"
import Surroundings from "../components/content/surroundings"
import Header from "../components/content/header"

const IndexPage = () => (
  <Layout>
    <SEO title="hej" />
    <Menu />
    <div>
      <BlockOne />
      <WelcomeText />
      <Destination />
      <Accomodation />
      <Transportation />
      <Happenings />
      <RsvpForm />
      <DressCode />
      <ToastMadames />
      <Surroundings />
    </div>
  </Layout>
)

export default IndexPage
