const LsAccount=({children})=>{
    return(
        <ul className="max-h-60 overflow-x-scroll none-scroolbar flex flex-col gap-2">
            {children}
        </ul>
    )
}

export default LsAccount;