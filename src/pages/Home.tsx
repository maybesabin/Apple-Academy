import Navbar from '../components/Navbar'
import ImageCarousel from '../components/ImageCarousel'

const Home = () => {

  return (
    <div className='relative'>
      <Navbar />
      
      <section className='flex lg:flex-row flex-col items-center lg:justify-evenly justify-center lg:h-[85vh] h-auto w-screen lg:py-0 py-12'>

        <div className='z-[998] md:text-7xl text-5xl flex flex-col lg:items-start items-center justify-center lg:gap-[5rem] gap-9 h-full lg:w-[35%] w-1/2'>

          <div className='flex flex-col lg:items-start items-center justify-center gap-1 lg:w-full w-screen'>
            <h1 className='font-light'>welcome to </h1>
            <h1 className='font-semibold'>apple montessori<span className='font-semibold text-green-700'>.</span></h1>
            <p className='pt-6 lg:text-left text-center md:text-[1rem] text-xs opacity-75 italic w-full'>Nurturing curiosity, fostering independence, and igniting a lifelong love of learning.</p>
          </div>

          <button id='explore-now-btn' className='bg-green-600 hover:bg-green-700 lg:flex hidden transition-all rounded-full px-4 py-4 text-white text-xl lg:text-3xl items-center justify-center gap-8'>
            <h1>Explore Now </h1>
            <i className="bg-white text-black rounded-full p-2 fa-solid fa-arrow-right-long rotate-[320deg]"></i>
          </button>
        </div>

        <ImageCarousel />
      </section>
    </div>
  )
}

export default Home