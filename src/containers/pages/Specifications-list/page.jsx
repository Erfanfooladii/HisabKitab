import { lazy, Suspense, useEffect, useState } from "react";
/* import Li_specifications from "../../../components/li_list/li_specificationsList/page";
 */import api from "../../../api/api";
import { Outlet } from "react-router-dom";
const Li_specifications=lazy(()=> import('../../../components/li_list/li_specificationsList/page'))
const SpecificationsList=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        const getApi=async()=>{
            try {
                const res=await api.get('/specifications_list')
                setData(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getApi()
    },[])
    const setStatusUrl =() => {
        const url = location.pathname.slice(11);
        return url;
    };
    return(
        <>
            <div className="max-h-[100%] overflow-scroll none-scroolbar">
            <ul className="flex gap-1 flex-col">
                {
                    data.map((item,index)=>(
                        <Suspense key={index} fallback={<h2>صفحه درحال بارگیری...</h2>}>
                            <Li_specifications id={item.id} title={item.name} />
                        </Suspense>
                    ))
                }
            </ul>
        </div>
        {setStatusUrl() === "" ? null : <Outlet/>}
        </>
    )
}

export default SpecificationsList;