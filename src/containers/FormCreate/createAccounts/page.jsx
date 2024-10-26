import { useEffect, useState } from "react";
import InputForm from "../../../components/inputs/inputForm/page";
import api from "../../../api/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import useData from "../../../Reducers/dataSaveApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const CreateAccount=()=>{
    const unickId=uuidv4()
    const navigate=useNavigate()
    const [name, setName] = useState("");
    const [phone_number, setPhone_number] = useState("");
    const [number_account, setNumber_account] = useState("");
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [debtor, setDebtor] = useState("");
    const [settlement, setSettlement] = useState("");
    const [isDone, setIsDone] = useState(false);
    const [data,setData]=useState([])
    const add=useData((state)=> state.addData)
    const dataZ=useData((state)=> state.data)
    const queryClient= useQueryClient()
    
    const createAccount = async () => {
        const date = new Date();
        const total = debtor - settlement;
        try {
            const postData = await api.post('accounts/', {
                id,
                name,
                phone_number,
                number_account,
                first_time: date.toISOString(),
                isDone:isDone,
                total: total,
                list_accounts: [
                    {
                        id:unickId,
                        title,
                        value,
                        debtor,
                        date: date.toISOString(),
                        settlement: settlement
                    }
                ]
            });
            console.log('Post Data:', postData);
            add(postData)
            return postData;
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };
    const addItemnn=useMutation({
        mutationFn:createAccount,
        onSuccess:()=>{
            queryClient.invalidateQueries(['accounts'])
        }
    })
    const getData=async () => {
        try {
            const res= (await api.get('accounts/')).data
            setData(res)
            console.log(res);
            
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(()=>{
        getData()
        add(data)
        console.log("save data",dataZ[0]);
    },[])
    const [itemName, setItemName] = useState('');

    const submitedForm =(e) => {
        if (name == "" || phone_number == "" || number_account == "" || title == "") {
            e.preventDefault();
            toast("!لطفا تمام فیلد ها را پر کنید");
            return null;
        } else {
            e.preventDefault();
            for (const member of data) {
                if (member.name == name) {
                    toast(`کاربری با نام ${name} موجود هست`)
                    return null   
                }
                if (member.phone_number == phone_number) {
                    toast(`شماره تلفن ${phone_number} موجود هست`)
                    return null
                }
            }
            toast("حساب با موفقیت ثبت شد")
            addItemnn.mutate({ name: itemName})
            setItemName("")            
        }
    };

    return(
        <>
            <ToastContainer rtl />
            <div className="p-3">
                <h1 className="text-xl text-center py-3">ثبت حساب</h1>
                <form onSubmit={submitedForm} className="flex flex-row-reverse gap-2 items-center justify-center flex-wrap">
                    <div className="border-2 border-white rounded-lg p-2">
                        <h2 className="flex justify-center py-1">مشخصات شخص</h2>
                        <div className="flex flex-row-reverse flex-wrap gap-2">
                            <InputForm setChange={(e)=> setName(e.target.value)} title="نام و نام خانوادگی" />
                            <InputForm setChange={(e)=> setNumber_account(e.target.value)} title="شماره کارت" />
                            <InputForm setChange={(e)=> setPhone_number(e.target.value)} title="شماره همراه" />
                        </div>
                    </div>
                    <div className="border-2 border-white rounded-lg p-2">
                        <h2 className="flex justify-center py-1">صورت حساب</h2>
                        <div className="flex flex-row-reverse flex-wrap gap-2">
                            <InputForm setChange={(e)=> setTitle(e.target.value)} title="عنوان حساب" />
                            <InputForm setChange={(e)=> setValue(e.target.value)} title="مقدار(گرم,تعداد)" />
                            <InputForm setChange={(e)=> setDebtor(e.target.value)} title="مبلغ بدهکار" />
                            <InputForm setChange={(e)=> setSettlement(e.target.value)} title="مبلغ تسویه شده" />
                            <div className="flex items-center gap-1">
                                <label className="cursor-pointer" htmlFor="done">
                                    {isDone ? 'حساب شده' : 'حساب نشده'}
                                </label>
                                <input onChange={()=> setIsDone(!isDone)} className="cursor-pointer" type="checkbox" id="done" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <button onClick={(e)=> {e.preventDefault(),navigate('accounts/')}} className="p-2 rounded-lg shadow-md hover:bg-red-600 bg-red-500">صرف نظر</button>
                        <button type="submit" className="p-2 rounded-lg shadow-md hover:bg-green-600 bg-green-500">ثبت حساب</button>
                    </div>
                </form>
            </div>
        </>        
    )
}
export default CreateAccount;