import Head from 'next/head'
import Navigation from '../components/Navigation'
import ServicesAnnouncementBar from '../components/ServicesAnnouncementBar'
import ClientEffects from '../components/ClientEffects'
import ServicesHero from '../components/services/ServicesHero'
import ServicesStats from '../components/services/ServicesStats'
import WhatIsOak1 from '../components/services/WhatIsOak1'
import FundingScore from '../components/FundingScore'
import Oak1Journey from '../components/services/Oak1Journey'
import WhyOak1Different from '../components/services/WhyOak1Different'
import OtherServices from '../components/services/OtherServices'
import Footer from '../components/Footer'

export default function Services() {
  return (
    <>
      <Head>
        <title>Oak1 Cohorts - BlueOak Ventures | 45-Day Intensive Fundraising Program</title>
        <meta name="description" content="Transform your startup idea into investment success with Oak1 Cohorts. 45-day intensive program to raise ₹50 Lakhs to ₹250 Crores. Turning founders into CEOs investors bet on." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <ClientEffects />
      <Navigation />
      <ServicesHero />
      <ServicesStats />
      <ServicesAnnouncementBar />
      <WhatIsOak1 />
      <FundingScore />
      <Oak1Journey />
      <WhyOak1Different />
      <OtherServices />
      <Footer />
    </>
  )
}