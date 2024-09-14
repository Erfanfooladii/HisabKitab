import { NavLink } from "react-router-dom"
const ButtonMenu=({cheldern,imageUrl,imageAlt,path})=>{
    return(
        <li className="w-full bg-gray-300 hover:bg-gray-400 hover:text-gray-200 transition-all p-2 rounded-md shadow-md"><NavLink className="flex justify-end gap-2 items-center w-full" to={path} >{cheldern} <img src={imageUrl} alt={imageAlt} className='w-9 h-9' /></NavLink></li>
    )
}
export default ButtonMenu;