const InputSpecifications=({title="",id,setChange})=>{

    return(
        <input onChange={setChange} placeholder={title} type="text" className="p-2 bg-slate-100 shadow-lg rounded-md" />
    )
}
export default InputSpecifications