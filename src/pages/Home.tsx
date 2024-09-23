import Navbar from '../components/Navbar'
import ImageCarousel from '../components/ImageCarousel'

const Home = () => {

  return (
    <div id='home' className='h-screen relative'>
      <Navbar />
      <ImageCarousel />

      <section className='h-full flex lg:flex-row flex-col items-center lg:justify-evenly justify-center w-screen py-[10rem] text-white'>
        <div id='hero-div' className='z-[998] w-full lg:text-8xl md:text-7xl text-4xl leading-[2.5rem] flex flex-col items-center justify-center lg:gap-[3rem] gap-9 h-auto text-center'>

          <div className='flex flex-col items-center justify-center w-full'>
            <h1 className='font-light'>welcome to </h1>
            <h1 className='font-semibold'>apple montessori<span className='text-green-500'>.</span></h1>
            <p className='text-center md:text-[1rem] text-xs md:leading-[1.75rem] italic pt-6 md:w-full w-[80%]'>Nurturing curiosity, fostering independence, and igniting a lifelong love of learning.</p>
          </div>

          <div className='flex items-center justify-center md:gap-12 gap-6'>
            <button id='main-btn' className='border border-white flex transition-all md:px-6 md:py-4 p-2 text-white text-xl lg:text-2xl items-center justify-center gap-8'>
              <h1>Virtual Tour</h1>
              <i className="fa-solid fa-chevron-right"></i>
            </button>

            <button id='main-btn' className='border border-white flex transition-all md:px-6 md:py-4 p-2 text-white text-xl lg:text-2xl items-center justify-center gap-8'>
              <h1>Contact Us</h1>
              <i className="fa-solid fa-phone-flip"></i>
            </button>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Home