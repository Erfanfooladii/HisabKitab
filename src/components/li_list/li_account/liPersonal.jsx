const LiPersonal=({title,value})=>{
    return(
        <li className="flex text-xs md:text-base rounded-sm shadow-sm flex-row-reverse gap-1 bg-slate-400 p-1 justify-start ">
            <p>:{title}</p>
            <h2>{value}</h2>
        </li>
    )
}

export default LiPersonal;