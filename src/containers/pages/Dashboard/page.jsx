import { useEffect, useState } from "react";
import api from "../../../api/api";
import { toPersianNumber } from "../../../utilities/numberConvert";

const Dashboard=()=>{
    const [users,setUsers]=useState([])
    const [accounts,setAccounts]=useState([])
    const [specifications_list,setSpecifications_list]=useState([])
    
    const getApi=async ()=>{
        try {
            const user=await api.get("/user")
            const accounts= await api.get("/accounts")
            const specifications_list= await api.get("/specifications_list")
            setUsers(user.data)
            setAccounts(accounts.data)
            setSpecifications_list(specifications_list.data)
        } catch (error) {
            console.log(error);            
        }
    }
    useEffect(()=>{
        getApi()
        
    },[])
    console.log(users.length);
    return(
        <div className="w-full flex none-scroolbar flex-wrap gap-1 max-h-[95%] overflow-auto">
            <div className="shadow-md bg-slate-400 rounded-md p-2 h-72 w-full lg:w-[33%]">
                <h1 className="border-b p-2 border-gray-500">حساب ها</h1>
                <div className="flex justify-center gap-3">
                    <div className="flex flex-col h-full bg-slate-100 p-2 mt-1 rounded-md w-44 items-center">
                        <h1>مشتریان بدون حساب</h1>
                        <h1 className="text-3xl">۲۲</h1>
                        <div className="">
                            <h2>میزان حساب به تومان</h2>
                            <h1 className="text-3xl">
                                ۱۰۰۰۰۰۰۰
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col h-full bg-slate-100 p-2 mt-1 rounded-md w-44 items-center">
                        <h1>مشتریان با حساب مانده</h1>
                        <h1 className="text-3xl">۲۲</h1>
                        <div className="">
                            <h2>میزان حساب به تومان</h2>
                            <h1 className="text-3xl">
                                ۱۰۰۰۰۰۰۰
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shadow-md bg-slate-400 rounded-md p-2 h-72 w-full lg:w-[33%]">
                <h1 className="border-b p-2 border-gray-500">تعداد لیست مشخصات وسایل</h1>
                <div className="w-full h-full flex items-center justify-center">
                    <div className="flex h-32 md:h-40 md:w-40 items-center justify-center flex-col rounded-full w-32 shadow-md bg-green-300">
                        <span className="text-white text-xl" >{toPersianNumber(specifications_list.length)}</span>
                    </div>
                </div>
            </div>
            <div className="shadow-md flex flex-col bg-slate-400 rounded-md p-2 h-72 w-full lg:w-[33%]">
                <h1 className="border-b p-2 border-gray-500">تعداد مشتریان</h1>
                <div className="w-full h-full flex items-center justify-center">
                    <div className="flex h-32 md:h-40 md:w-40 items-center justify-center flex-col rounded-full w-32 shadow-md bg-blue-600">
                        <span className="text-white text-xl" >{toPersianNumber(users.length)}</span>
                        <span className="text-white text-xl" >نفر</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;