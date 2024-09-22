import ReadMore from "./ReadMore"


const SmallCard = ({ color, cardNumber, name, img }: { color: String, cardNumber: String, name: String, img: string }) => {
    return (
        /* From Uiverse.io by jubayer-10 */
        <div
            className="rounded-2xl w-[20rem] h-[15rem] flex flex-col items-start justify-between bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden"
        >
            <div className={`bg-${color}-500 w-24 h-24 rounded-full absolute -right-5 -top-7`}>
                <p className="absolute bottom-6 left-7 text-white text-2xl">0{cardNumber}</p>
            </div>

            <div className={`border-[7px] border-${color}-500 rounded-full`}>
                <img src={img} className="p-1 w-14" alt="" />
            </div>

            <h1 className="font-bold text-xl">{name}</h1>
            <ReadMore data="Read" />
        </div>

    )
}

export default SmallCard