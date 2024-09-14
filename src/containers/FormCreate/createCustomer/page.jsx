import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import api from "../../../api/api";

const CreateCustomer = ({isClose}) => {
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [phone_number, setPhone_number] = useState();
    const [deviceـname, setDeviceـname] = useState();
    const [description, setDescription] = useState();
    const [users,setUsers] = useState()
    
    
    const createUser = async ({ id, name, phone_number, device_name, description }) => {
      try {
        const res = await api.post("user/", {
          id,
          name,
          phone_number,
          device_name,
          description,
          date: new Date().getDate()
        });
        return res;
      } catch (err) {
        console.error(err); 
      }
    };
    const submitedForm = (e) => {
      if (name == null || phone_number == null || deviceـname == null) {
        e.preventDefault();
        toast("!لطفا تمام فیلد ها را پر کنید");
        return null;
      } else {
        e.preventDefault();
        const newData = {
          id: id,
          name: name,
          phone_number: phone_number,
          deviceـname: deviceـname,
          description: description,
          date:new Date().getDate()
        };
        createUser({...newData});
        toast(".مشتری با موفقیت اضافه شد");
      }
    };
    
    return (
    <>
      <div className="p-3">
        <h1 className="text-xl text-center py-3">ثبت مشتری</h1>
        <form className="flex flex-row-reverse gap-2 items-center justify-center flex-wrap">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="text-blue-900 box shadow-sm p-2 rounded-md focus:outline-none"
            placeholder="نام و نام خانوادگی مشتری"
          />
          <input
            type="text"
            onChange={(e) => setPhone_number(e.target.value)}
            className="text-blue-900 box shadow-sm p-2 rounded-md focus:outline-none"
            placeholder="شماره همراه مشتری"
          />
          <input
            type="text"
            onChange={(e) => setDeviceـname(e.target.value)}
            className="text-blue-900 box shadow-sm p-2 rounded-md focus:outline-none"
            placeholder="نام وسیله"
          />
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            className="text-right rounded-md p-2 box shadow-sm focus:outline-none text-blue-900 w-3/4"
            placeholder="...توضیحات اضافی"
          ></textarea>
          <div className="flex gap-2 flex-row-reverse">
            <button
              onClick={(e) => submitedForm(e)}
              className="bg-green-400 w-20 p-2 rounded-lg transition hover:bg-green-700"
            >
              افزودن
            </button>
            <button
              onClick={isClose}
              className="bg-red-400 p-2 rounded-lg w-20 transition hover:bg-red-700"
            >
              لغو
            </button>
          </div>
          <ToastContainer />
        </form>
      </div>
    </>
  );
};
export default CreateCustomer;
