import { useEffect, useState } from "react";
import api from "../../../api/api";
import { Outlet, useNavigate } from "react-router-dom";

const Accounts=()=>{
    const [data,setData]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        const accountsUser=async () => {
            try {
                const res=(await api.get('accounts/')).data
                setData(res)
            } catch (error) {
                console.log(error);
            }
        }
        accountsUser()
    },[])
    const doneYes = data.filter(item => item.isDone == false)
    const doneNot= data.filter( item => item.isDone == true)
    const setStatusUrl =() => {
        const url = location.pathname.slice(11);
        return url;
    };
    const routeAccounts=(id)=>{
        navigate(`./${id}`)
    }
    
    return (
        <div className="flex flex-wrap md:flex-nowrap gap-2 max-h-full  overflow-scroll none-scroolbar">
            <div className="w-full md:w-1/2 min-w-80 relative">
                <h1 className="w-full border-b-2 bg-slate-400 p-2 rounded border-r-blue-300 text-center text-white sticky top-0">حساب های مانده</h1>
                <ul className="flex gap-2 flex-col pt-1">
                   {
                    doneYes.map(item => (
                        <li key={item.id} className="flex bg-yellow-50 rounded-md shadow-sm flex-col w-full p-1 md:p-2">
                            <h2>{item.name}</h2>
                            <h2><span>{item.total}</span>:مبلغ مانده</h2>
                            <button onClick={()=> routeAccounts(item.id)} className="bg-green-500 p-2 rounded-lg text-white shadow-sm">جزیات بیشتر</button>
                        </li>
                    ))
                   }
                </ul>
            </div>
            <div className="w-full md:w-1/2 min-w-80">
                <h1 className="w-full border-b-2 bg-slate-400 p-2 rounded border-r-blue-300 text-center text-white sticky top-0">حساب های تسویه شده</h1>
                <ul className="flex gap-2 flex-col pt-1">
                {
                    doneNot.map(item => (
                        <li key={item.id} className="flex bg-yellow-50 rounded-md shadow-sm flex-col w-full p-1 md:p-2">
                            <h2>{item.name}</h2>
                            <h2><span>{item.total}</span>:مبلغ تسویه شده</h2>
                            <button onClick={()=> routeAccounts(item.id)} className="bg-green-500 p-2 rounded-lg text-white shadow-sm">جزیات بیشتر</button>
                        </li>
                    ))
                   }
                </ul>
            </div>
            {setStatusUrl() === "" ? null : <Outlet />}
        </div>
    )
}
export default Accounts;