

const contact = () => {
    return (
        <div id='contact' className='bg-white text-black flex items-center py-[5rem] h-screen justify-center'>
            <section className='w-[90rem] flex flex-col items-center h-full justify-center'>
                <div className="w-[40rem] h-[50rem] flex flex-col items-start justify-start p-6 gap-[5rem] border border-gray-200 rounded-xl">
                    <h1 className="font-semibold text-3xl">Contact Us</h1>
                    <form action="" method="POST" className="w-full flex flex-col gap-6">
                        <div className="flex w-full gap-6">
                            <div className="flex items-start flex-col justify-center gap-4 w-1/2">
                                <label htmlFor="firstName" className="text-xl">First Name</label>
                                <input type="text" className="focus:outline-blue-600 border border-gray-400 p-3 w-full rounded-lg bg-[#f9fafb]" name="firstName" />
                            </div>
                            <div className="flex items-start flex-col justify-center gap-4 w-1/2">
                                <label htmlFor="lastName" className="text-xl">Last Name</label>
                                <input type="text" className="focus:outline-blue-600 border border-gray-400 p-3 w-full rounded-lg bg-[#f9fafb]" name="lastName" />
                            </div>
                        </div>
                        <div className="flex items-start flex-col justify-center gap-4">
                            <label htmlFor="email" className="text-xl">Your email</label>
                            <input type="email" className="focus:outline-blue-600 border border-gray-400 p-3 w-full rounded-lg bg-[#f9fafb]" name="email" />
                        </div>
                        <div className="flex items-start flex-col justify-center gap-4">
                            <label htmlFor="message" className="text-xl">Your message</label>
                            <textarea className="h-64 focus:outline-blue-600 border border-gray-400 p-3 w-full rounded-lg bg-[#f9fafb]" name="message" style={{ resize: 'none' }} > </textarea>
                        </div>

                        <div className="flex items-center justify-center gap-4 cursor-pointer transition-all hover:bg-blue-700 bg-blue-600 h-[55px] rounded-xl text-white">
                            <button>Send message</button>
                            <i className="fa-solid fa-paper-plane"></i>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default contact;