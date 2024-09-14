const ItemAccount=({title,value})=>{
    return(
        <div className="flex border-l-2 text-xs md:text-base ml-1 pl-1 text-black p-2 max-w-96 rounded-lg min-w-64 bg-slate-200 flex-row-reverse justify-start gap-1">
            <p>: {title}</p>
            <span>{value}</span>
        </div>
    )
}

export default ItemAccount;