import { useState } from "react";
import api from "../../api/api";
import LiPersonal from "../../components/li_list/li_account/liPersonal";
import { toast , ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputFormChange from "../../components/inputs/inputFormChange/page";


const FormChangeAccount=({id,data,close})=>{
    const [name, setName] = useState("");
    const [phone_number, setPhone_number] = useState("");
    const [number_account, setNumber_account] = useState("");
    const [isDone, setIsDone] = useState(false);

    const updateAccount = async () => {
        const date = new Date();
        try {
            const data=(await api.get(`accounts/${id}`)).data
            const list_accounts=data.list_accounts
            const postData = await api.put(`accounts/${id}`, {
                id:id,
                name,
                phone_number,
                number_account,
                first_time: date.toISOString(),
                isDone:isDone,
                list_accounts:list_accounts
            });
            return postData;
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };
    const handleUpdate = (e) => {
        if (name == "" || phone_number == "" || number_account == "") {
            e.preventDefault();
            toast("!لطفا تمام فیلد ها رو پر کنید");
        } else {
            toast("با موفقیت ثبت شد")
            updateAccount();
        }
    }
    return(
        <>
            <ToastContainer/>
            <form className="flex flex-col  gap-2">
                <InputFormChange setChange={(e)=> setName(e.target.value)} title={data?.name} />
                <InputFormChange setChange={(e)=> setNumber_account(e.target.value)} title={data?.number_account} />
                <InputFormChange setChange={(e)=> setPhone_number(e.target.value)} title={data?.phone_number} />
                <LiPersonal title="تاریخ" value={data?.date} />
                <div className="flex w-full gap-1">
                    <button onClick={close} className="p-2 w-full bg-red-400 hover:bg-red-600 rounded-md shadow-md">
                        لغو
                    </button>
                    <button onClick={handleUpdate} className="p-2 w-full bg-green-400 hover:bg-green-600 rounded-md shadow-md">
                        ثبت تغییرات
                    </button>
                </div>
            </form>
        </>
    )
}

export default FormChangeAccount;