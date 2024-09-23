import ReadMore from "./ReadMore"

const Card = ({ color, cardNumber, description, name, img }: { color: String, cardNumber: String, description:String, name: String, img:string }) => {
    return (
        <div
            className="w-[20rem] h-[25rem] rounded-2xl flex flex-col items-start justify-between bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden"
        >
            <div className={`bg-${color}-500 w-24 h-24 rounded-full absolute -right-5 -top-7`}>
                <p className="absolute bottom-6 left-7 text-white text-2xl">0{cardNumber}</p>
            </div>
            <div className={`border-[7px] border-${color}-500 rounded-full`}>
                <img src={img} className="p-1 w-14" alt="" />
            </div>
            <h1 className="font-bold text-xl">{name}</h1>
            <p className="text-sm text-zinc-500 leading-6">
                {description}...
            </p>
            <ReadMore border="black" data="Read More" />
        </div>

    )
}

export default Card