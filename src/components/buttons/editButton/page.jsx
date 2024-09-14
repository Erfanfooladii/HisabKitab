const EditButton=({ocClick , state})=>{
    const changeColor={
        mainColor:"flex p-1 items-center justify-center bg-green-400 hover:bg-green-600 rounded-md",
        closeColor:"flex p-1 items-center justify-center  bg-red-400 hover:bg-red-600 rounded-md"
    }
    return(
        <button onClick={ocClick} className={state ? changeColor.mainColor : changeColor.closeColor}>
            {
                state ?
                <span class="material-symbols-outlined">
                edit
                </span> :
                <span class="material-symbols-outlined">
                close
                </span>
            }
        </button>
    )
}
export default EditButton;