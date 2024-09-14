import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../../api/api";
import InputForm from "../../../components/inputs/inputForm/page";
import LsPersonal from "../../Account/list_personal/page";
import LiPersonal from "../../../components/li_list/li_account/liPersonal";
import LsAccount from "../../Account/list_accounts/page";
import ButtonAddAccount from "../../../components/buttons/addFormAccount/page";
import FormChangeAccount from "../../FormChangeAccount/page";
import RenderAccountItem from "../../Account/list_account_items/page";

const Account = () => {
    const { id } = useParams();
    const [saveData, setSaveData] = useState(null);
    const [search, setSearch] = useState("");
    const [isEdit,setIsEdit]=useState(false)
    const [list_accounts,setList_accounts]=useState([])
    useEffect(() => {
        const getUser = async () => {
            try {
                const res = (await api.get(`/accounts/${id}`)).data;
                setSaveData(res);
                setList_accounts(res.list_accounts)
            } catch (error) {
                console.log(error);
            }
        };
        getUser();
    }, [id]);
    
    const filteredItems = list_accounts.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className="w-screen flex items-center justify-center h-screen fixed top-0 left-0 bg-slate-500 bg-opacity-50">
            <div className="m-4 flex gap-2 flex-col md:w-AccountItem2/3 bg-slate-500 p-4 rounded-lg w-full">
                <div className="bg-sky-100 p-1 rounded-md flex justify-between">
                    <Link className="text-xs md:text-base bg-orange-600 hover:bg-orange-500 text-white p-1 rounded-md" to="/Accounts">بازگشت</Link>
                    <button onClick={()=> setIsEdit(!isEdit)} className="text-xs md:text-base bg-green-500 text-white p-1 rounded-md">ویرایش</button>
                </div>
                <div className="rounded-lg border-solid border-gray-800 p-2 text-right text-white ">
                    <h2>مشخصات فردی #</h2>
                    {
                        isEdit ?
                            <FormChangeAccount id={id} close={(e)=> {e.preventDefault(),setIsEdit(!isEdit)}} data={saveData}/>
                         :
                         <LsPersonal>
                            <LiPersonal title="نام و نام خانوادگی" value={saveData?.name} />
                            <LiPersonal title="شماره حساب یا کارت" value={saveData?.number_account} />
                            <LiPersonal title="شماره همراه" value={saveData?.phone_number} />
                            <LiPersonal title="تاریخ" value={saveData?.date} />
                        </LsPersonal>
                    }
                </div>
                <div className="rounded-lg border-solid border-gray-800 p-2 text-right text-white ">
                    <h2>لیست حساب ها #</h2>
                    <div className="p-1 flex justify-center items-center gap-1">
                        <InputForm title="جستوجوی حساب" setChange={(e) => setSearch(e.target.value)} />
                        <ButtonAddAccount id={id}/>
                    </div>
                    <LsAccount>{filteredItems.map((item,index)=> <RenderAccountItem item={item} key={index} />)}</LsAccount>
                </div>
            </div>
        </div>
    );
};

export default Account;