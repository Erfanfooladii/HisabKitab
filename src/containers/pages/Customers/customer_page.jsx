import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../../api/api";

const Customer = () => {
    const { id } = useParams();
    const [saveData, setSaveData] = useState(null);
    
    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await api.get(`/user/${id}`);
                setSaveData(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getUser();
    }, [id]);

    return (
        <>
            (
                <div className="w-screen flex items-center justify-center h-screen fixed top-0 left-0 bg-slate-500 bg-opacity-50">
                    <div className="m-4 flex gap-2 flex-col md:w-2/3 bg-slate-500 p-4 rounded-lg w-full">
                        <div className="bg-sky-100 p-1 rounded-md flex justify-between">
                            <Link className="text-xs md:text-base bg-orange-600 hover:bg-orange-500 text-white p-1 rounded-md" to="/customers">بازگشت</Link>
                            <button className="text-xs md:text-base bg-green-500 text-white p-1 rounded-md" >ویرایش</button>
                        </div>
                        <div className="p-2 text-right text-white ">
                            <ul className="flex flex-col gap-2">
                                <li className="flex text-xs md:text-base rounded-sm shadow-sm flex-row-reverse gap-1 bg-slate-400 p-1 justify-start ">
                                <p>:نام و نام خانوادگی مشتری</p>
                                <h2>{saveData && saveData.name}</h2>
                                </li>
                                <li className="flex text-xs md:text-base rounded-sm shadow-sm flex-row-reverse gap-1 bg-slate-400 p-1 justify-start ">
                                <p>: نام وسیله</p>
                                <h2>{saveData && saveData.deviceـname}</h2>
                                </li>
                                <li className="flex text-xs md:text-base rounded-sm shadow-sm flex-row-reverse gap-1 bg-slate-400 p-1 justify-start ">
                                <p>: توضیحات</p>
                                <h2>{saveData && saveData.description}</h2>
                                </li>
                                <li className="flex text-xs md:text-base rounded-sm shadow-sm flex-row-reverse gap-1 bg-slate-400 p-1 justify-start ">
                                <p>: شماره همراه</p>
                                <h2>{saveData && saveData.phone_number}</h2>
                                </li>
                                <li className="flex text-xs md:text-base rounded-sm shadow-sm flex-row-reverse gap-1 bg-slate-400 p-1 justify-start ">
                                <p>:تاریخ</p>
                                <h2>{saveData && saveData.date}</h2>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        </>
    );
};

export default Customer;