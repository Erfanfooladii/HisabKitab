import { Outlet } from "react-router-dom";

const Body=()=>{
    
    return(
        <div className="max-h-[100%] rounded-lg p-2 w-full bg-slate-100 shadow-md text-right">
            <Outlet/>
        </div>
    )
}
export default Body;