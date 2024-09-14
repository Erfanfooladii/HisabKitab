const InputForm=({type="text",setChange,title,id,mainValue})=>{
    return(
        <input
            type={type}
            onChange={setChange}
            className="text-blue-900 box text-xs md:text-base shadow-sm p-2 w-full md:w-fit rounded-md focus:outline-none"
            placeholder={title}
            value={mainValue}
            id={id}
        />
    )
}
export default InputForm;