import { useEffect, useState } from "react";
import api from "../../../api/api";
import InputForm from "../../../components/inputs/inputForm/page";
import { v4 as uuidv4 } from 'uuid';
import { toast, ToastContainer } from "react-toastify";


const CreateFormAccountList = ({ onClose, id }) => {
    const [data, setData] = useState([]);
    const [newLs, setNewLs] = useState({});
    
    const [title, setTitle] = useState("");    
    const [debtor, setDebtor] = useState("");    
    const [settlement, setSettlement] = useState("");    
    const [value, setValue] = useState("");    

    const getApi = async () => {
        try {
            const res = await (await api.get(`/accounts/${id}`)).data;
            setData(res);
        } catch (error) {
            console.log(error);
        }
    };

    const postApi = async (newList) => {            
        try {
            const res = await (await api.get(`/accounts/${id}`)).data;
            await api.put(`/accounts/${id}`, {
                ...res,
                list_accounts: [
                    ...res.list_accounts,
                    newList
                ]
            });
        } catch (error) {
            console.log(error);
        }
    };

    const createListAccount = (e) => {
        if (title=="" || value=="" || debtor=="" || settlement=="") {
            e.preventDefault();
            toast("لطفا تمام فیلد ها را پر کنید!");
            return null            
        }else{
            const newList = {
                id: uuidv4(),
                date: new Date().toLocaleString('fa-IR'),
                title: title,
                value: value,
                debtor: debtor,
                settlement: settlement
            };
            postApi(newList);
        }
    };
    useEffect(() => {
        getApi();
    }, []);

    return(
        <>
            <ToastContainer rtl />
            <div onClick={onClose}  className="z-10 w-screen flex items-center justify-center h-screen fixed top-0 left-0 bg-slate-500 rounded-md bg-opacity-50"></div>
            <form onSubmit={createListAccount} className="z-20 w-full md:w-fit fixed flex items-center bg-slate-700 p-4 rounded-lg flex-col gap-3">
                <h2>ایجاد حساب</h2>
                <div className="flex flex-col gap-2 ">
                    <div className="flex flex-row-reverse w-full justify-between items-center gap-1">
                        <label className="text-xs md:text-base" htmlFor="title">عنوان حساب</label>
                        <InputForm id="title" setChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="flex flex-row-reverse w-full justify-between items-center gap-1">
                        <label className="text-xs md:text-base" htmlFor="debtor">مبلغ بدهکار</label>
                        <InputForm id="debtor" setChange={(e) => setDebtor(e.target.value)} />
                    </div>
                    <div className="flex flex-row-reverse w-full justify-between items-center gap-1">
                        <label className="text-xs md:text-base" htmlFor="settlement">مبلغ قابل تسویه</label>
                        <InputForm id="settlement" setChange={(e) => setSettlement(e.target.value)} />
                    </div>
                    <div className="flex flex-row-reverse w-full justify-between items-center gap-1">
                        <label className="text-xs md:text-base" htmlFor="value">تعداد</label>
                        <InputForm id="value" setChange={(e) => setValue(e.target.value)} title="0" type="number" />
                    </div>
                    <div className="flex justify-between gap-2">
                        <button onClick={onClose} type="button" className="p-2 hover:bg-red-400 w-full bg-red-500 rounded-md">
                            لغو
                        </button>
                        <button type="submit" className="p-2 hover:bg-green-400 w-full bg-green-500 rounded-md">
                            ثبت حساب
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}
export default CreateFormAccountList;