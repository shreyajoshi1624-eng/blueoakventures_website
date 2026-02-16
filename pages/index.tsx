import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import Navigation from '../components/Navigation'
import AnnouncementBar from '../components/AnnouncementBar'
import ClientEffects from '../components/ClientEffects'
import HowItWorks from '../components/HowItWorks'
import Services from '../components/Services'
import Approach from '../components/Approach'
import WhyChoose from '../components/WhyChoose'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>BlueOak Ventures - Transforming Visionary Ideas into Investable Ventures</title>
        <meta name="description" content="Expert guidance and strategic support to achieve substantial funding. Join 500+ founders who have successfully raised funding with our proven methodology." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <ClientEffects />
      <Navigation />
      <AnnouncementBar />
      <HeroSection />
      <HowItWorks />
      <Services />
      <Approach />
      <WhyChoose />
      <Contact />
      <Footer />
    </>
  )
}