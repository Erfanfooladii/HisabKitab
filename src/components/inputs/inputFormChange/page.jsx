const InputFormChange=({type,id,mainValue,title,setChange})=>{
    return (
        <input
            type={type}
            onChange={setChange}
            className="text-blue-900 text-xs md:text-base shadow-sm p-2 w-full rounded-md focus:outline-none"
            placeholder={title}
            value={mainValue}
            id={id}
        />
    )
}

export default InputFormChange;