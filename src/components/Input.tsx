
const Input = ({ name, inputText, type }: { name: string, inputText: string, type: string }) => {
    return (
        <div className="flex items-start flex-col justify-center gap-4">
            <label htmlFor={name} className="text-xl">{inputText}</label>
            <input type={type} required className="focus:outline-blue-600 border border-gray-400 p-3 w-full rounded-lg bg-[rgb(249,250,251)]" name={name} />
        </div>
    )
}

export default Input;