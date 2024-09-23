import SmallCard from '@/components/SmallCard'
import Card from '../components/Card'
import Logo1 from '../assets/images/user1.png'
import Logo2 from '../assets/images/user2.png'
import Logo3 from '../assets/images/user3.png'
import Logo4 from '../assets/images/user4.png'
import Logo5 from '../assets/images/user5.png'
import Logo6 from '../assets/images/user6.png'

const Testimonials = () => {
    return (
        <div className='bg-[#aaabbc] flex items-center py-[5rem] justify-center w-full'>
            <section className='w-[90rem] flex items-center h-full justify-center'>
                <div className='w-full flex items-start justify-center gap-12 flex-wrap'>
                    <div className='bg-white md:flex hidden items-center justify-center w-[20rem] h-[42.5rem] rounded-2xl'>
                        <h1 className='font-semibold text-7xl opacity-65 rotate-[-90deg]'>Testimonials</h1>
                    </div>

                    <h1 className='md:hidden flex font-semibold text-5xl opacity-65'>Testimonials</h1>

                    <div className='flex flex-col items-start justify-center gap-9'>
                        <Card img={Logo1} color={'violet'} cardNumber={'1'} description={"Our daughter looks forward to school every day. The Montessori approach has helped her develop a love for learning that we hadn’t seen before. We couldn’t be happier with our experience here."} name={"Maya Gonzalez"} />
                        <div className='md:flex hidden'>
                            <SmallCard img={Logo4} name={'Aarav Patel'} color={'green'} cardNumber={'4'} />
                        </div>
                    </div>

                    <div className='flex flex-col items-start justify-center gap-12'>
                        <SmallCard img={Logo2} name={'Oliver Smith'} color={'yellow'} cardNumber={'2'} />
                        <div className='md:flex hidden'>
                            <Card img={Logo5} color={'gray'} cardNumber={'5'} description={"I can’t say enough good things about this school. The teachers genuinely care about each child's individual progress. Our son has become more confident and curious since attending!"} name={"Shankar Kumar"} />
                        </div>
                    </div>

                    <div className='flex flex-col items-start justify-center gap-12'>
                        <Card img={Logo3} color={'blue'} cardNumber={'3'} description={"This Montessori school has been a blessing for our family. The child-centered approach has made our son more independent and creative. He comes home excited to share what he's learned each day!"} name={"Zara Khan"} />
                        <div className='md:flex hidden'>
                            <SmallCard img={Logo6} name={'Liam Nguyen'} color={'orange'} cardNumber={'6'} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials;