import Home from "./pages/Home"
import About from './pages/About'
import Programs from './pages/Programs'
import Testimonials from "./pages/Testimonials"
import Accordion from "./pages/Accordion"
import Gallery from "./pages/Gallery"
import Contact from './pages/Contact'
import Footer from "./pages/Footer"

const App = () => {
  return (
    <div className="overflow-hidden">
      <Home />
      <Programs />
      <About />
      <Gallery />
      <Testimonials />
      <Accordion />
      <Contact />
      <Footer />
    </div>
  )
}

export default App