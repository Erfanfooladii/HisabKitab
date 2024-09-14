import { useState } from "react";
import FormCreate from "../../../containers/FormCreate/page";

const ButtonAdd=()=>{
    const [open , setOpen]= useState(false)
    
    return(
        <div className="fixed bottom-4 right-4 flex flex-col gap-3 items-start">
            <button onClick={()=> {setOpen(!open)}} className="w-14 h-14 bg-cyan-500 hover:bg-cyan-600 text-xl text-white rounded-full flex items-center justify-center">+</button>
            {
            open ? <FormCreate isClose={()=> setOpen(!open)} /> : null
            }
        </div>
    )
}

export default ButtonAdd;