import { useEffect, useState } from "react";
import ItemAccount from "../../../components/li_list/li_account_item/page";
import InputForm from "../../../components/inputs/inputForm/page";
import EditButton from "../../../components/buttons/editButton/page";
import api from "../../../api/api";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputEditAccountForm from "../../../components/inputs/inputEditAccountForm/page";


const RenderAccountItem = ({ item, index }) => {
  const [state, setState] = useState(true);
  const [value, setValue] = useState("");
  const [settlement, setSettlement] = useState("");
  const [debtor, setDebtor] = useState("");
  const [title, setTitle] = useState("");
  const [list_accounts, setList_accounts] = useState([]);
  const handelerState = () => {
    setState(!state);
  };
  const { id } = useParams();
  const getApi = async () => {
    try {
      const res = (await api.get(`/accounts/${id}`)).data;
      setList_accounts(res.list_accounts);
    } catch (error) {
      console.log(error);
    }
  };
  const postApi = async () => {
    try {
      const res = (await api.get(`/accounts/${id}`)).data;
      const setData = await api.put(`/accounts/${id}`, {
        ...res,
        list_accounts: list_accounts,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const formHandler = (e) => {
    if (title=="" || value=="" || debtor=="" || settlement=="") {
      e.preventDefault();
      toast("!لطفا تمام فیلد ها رو پر کنید");
      return null
    }else{
      e.preventDefault();
      const date = new Date();
      const idLs = list_accounts.filter((account) => account.id == item.id);
      const re = idLs.map((item) => item);
      re[0].title = title;
      re[0].debtor = debtor;
      re[0].settlement = settlement;
      re[0].value = value;
      re[0].date= date.getDate()
      setList_accounts(idLs);
      console.log(list_accounts);
      postApi();
      toast("با موفقیت ثبت شد")
    }
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <ToastContainer/>
      <li className="p-2 flex gap-2 relative flex-wrap justify-center items-start bg-gray-700">
        <div className="w-full bg-slate-100 flex justify-end rounded-md p-1">
          <EditButton ocClick={handelerState} state={state} />
        </div>
        {state ? (
          <div className="flex flex-wrap flex-row-reverse justify-center items-end gap-1">
            <ItemAccount title="عنوان حساب" value={item.title} />
            <ItemAccount title="تعداد" value={item.value} />
            <ItemAccount title="تاریخ" value={item.date} />
            <ItemAccount title="مبلغ قابل تسویه" value={item.settlement} />
            <ItemAccount title="مبلغ بدهکار" value={item.debtor} />
            <div className="flex flex-row-reverse justify-start gap-1">
              {item.debtor ? <p>پرداخت نشده</p> : <p>پرداخت شده</p>}
            </div>
          </div>
        ) : (
          <form
            onSubmit={formHandler}
            className="flex flex-wrap flex-col items-center md:flex-row-reverse justify-start md:items-end  max-w-4xl gap-1"
          >
            <InputEditAccountForm title={item.title} id={item.id} label='عنوان حساب' setChange={(e) => setTitle(e.target.value)} />
            <InputEditAccountForm title={item.value} id={item.id} label='تعداد' setChange={(e) => setValue(e.target.value)} />
            <InputEditAccountForm title={item.settlement} id={item.id} label='مبلغ قابل پرداخت' setChange={(e) => setSettlement(e.target.value)} />
            <InputEditAccountForm title={item.debtor} id={item.id} label='مبلغ بدهکار' setChange={(e) => setDebtor(e.target.value)} />
            <div className="flex ml-1 pl-1 bg-white px-1 py-2 text-black rounded-md w-60 md:min-w-96 flex-row-reverse justify-start gap-1">
              <label className="text-xs md:text-base" htmlFor={item.id}>
                تاریخ
              </label>
              {new Date().getDay()}
            </div>
            <div className="flex flex-row-reverse justify-start gap-1">
              {item.isDones ? <p>پرداخت نشده</p> : <p>پرداخت شده</p>}
            </div>
            <div>
              <button
                className="bg-green-500 p-2 rounded hover:bg-green-700"
                type="submit"
              >
                ثبت تغییرات
              </button>
            </div>
          </form>
        )}
      </li>
    </>
  );
};
export default RenderAccountItem;
