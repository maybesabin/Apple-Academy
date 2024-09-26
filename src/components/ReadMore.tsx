const ReadMore = ({data, border} : {data:string, border:string}) => {
    return (
        <div id='read-more' className={`cursor-pointer flex items-center justify-center gap-4 border border-${border}-500 border-${border} pl-4 p-2`}>
            <h1>{data}</h1>
            <svg className='fill-white rotate-[270deg]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    )
}

export default ReadMore