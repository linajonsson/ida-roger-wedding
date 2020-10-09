import React from "react"
import Accomodation from "../components/content/accomodation"
import BlockOne from "../components/content/blockOne"
import Destination from "../components/content/destination"
import DressCode from "../components/content/dressCode"
import Happenings from "../components/content/happenings"
import Menu from "../components/content/menu"
import RsvpForm from "../components/content/rsvpForm"
import Surroundings from "../components/content/surroundings"
import ToastMadames from "../components/content/toastMadames"
import Transportation from "../components/content/transportation"
import WelcomeText from "../components/content/welcomeText"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WeddingGifts from "../components/content/weddingGifts"

const IndexPage = () => (
  <Layout>
    <SEO title="hej" />
    <Menu />
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
    <WeddingGifts />
    <div className="last-text">
      Ett särskilt och stort tack till Lina Jonsson som hjälpt oss att göra den
      här hemsidan! ❤️
    </div>
  </Layout>
)

export default IndexPage
