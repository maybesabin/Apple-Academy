import Home from "./pages/Home"
import About from './pages/About'
import Programs from './pages/Programs'
import Testimonials from "./pages/Testimonials"
import Accordion from "./pages/Accordion"

const App = () => {
  return (
    <div className="overflow-hidden">
      <Home />
      <About />
      <Programs />
      <Testimonials />
      <Accordion />
    </div>
  )
}

export default App