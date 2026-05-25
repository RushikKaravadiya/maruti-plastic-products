import Hero from '../components/Hero'
import Introduction from '../components/Introduction'
import FeaturedProducts from '../components/FeaturedProducts'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import ContactCTA from '../components/ContactCTA'

const Home = () => {
  return (
    <div>
      <Hero />
      <Introduction />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <ContactCTA />
    </div>
  )
}

export default Home
