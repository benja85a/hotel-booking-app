import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'
import MapSection from '../components/MapSection'
import StickyTextScrollImages from '../components/ScrollStatic'

function Home() {
  return (
    <>
        <Hero/>
        <FeaturedDestination/>
        <StickyTextScrollImages/>
        <ExclusiveOffers/>
        <Testimonial/>
        <MapSection/>
        <NewsLetter/>
    </>
  )
}

export default Home