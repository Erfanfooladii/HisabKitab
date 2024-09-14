import React, { useEffect, useMemo, useState } from 'react';
import api from '../../../api/api';
import { Link, Outlet , useNavigate } from 'react-router-dom';

const Customers = () => {
    const [data,setData]=useState([])
    useEffect(() => {
        const userGet=async () => {
            try {
                const res = await api.get('/user')
                const userData = res.data
                setData(userData)
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        userGet()
    }, []);
    const setStatusUrl =() => {
        const url = location.pathname.slice(11);
        return url;
    };
    const navigate = useNavigate();
    const routeUser=(id)=>{
        navigate(`./${id}`)
    }
    return (
        <div className="max-h-[100%] overflow-scroll none-scroolbar">
            <h2 className='text-xl md:text-lg'>مشتریان</h2>
            <ul className='flex flex-col gap-1'>
                {data.map((item, index) => (
                    <li key={index} className='flex p-2 rounded-md items-center w-full justify-between bg-slate-600'>
                        <button onClick={()=> routeUser(item.id)} className="hover:bg-green-500 bg-green-600 p-2 rounded-lg text-white">جزیات بیشتر</button>
                        <h2 className="text-white">{item.name}</h2>
                    </li>
                ))}
            </ul>
            {setStatusUrl() === "" ? null : <Outlet />}
        </div>
    );
};

export default Customers;