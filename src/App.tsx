import Home from "./pages/Home"
import About from './pages/About'
import Programs from './pages/Programs'
import Testimonials from "./pages/Testimonials"
import Accordion from "./pages/Accordion"
import Gallery from "./pages/Gallery"

const App = () => {
  return (
    <div className="overflow-hidden">
      <Home />
      <Programs />
      <About />
      <Testimonials />
      <Gallery />
      <Accordion />
    </div>
  )
}

export default App