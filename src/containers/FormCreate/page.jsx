import { useState, useCallback } from "react";
import CreateCustomer from "./createCustomer/page";
import CreateAccount from "./createAccounts/page";
import CreateSpecifications from "./createSpecifications/page";

const FormCreate = ({ isClose }) => {
  const [state, setState] = useState('customer');

  const handleChangeState = useCallback((newState) => {
    setState(newState);
  }, []);

  return (
    <div className="w-screen flex items-center justify-center h-screen fixed top-0 left-0 bg-slate-500 bg-opacity-50">
      <div className="md:w-1/2 min-w-[90%] md:min-w-80 max-w-[650px] relative text-white rounded-lg p-4 bg-slate-500">
        <div className="flex justify-end p-1 bg-slate-300 rounded-md">
        <button
          onClick={isClose}
          className="bg-red-400 flex items-center justify-center p-2 rounded-md shadow-md hover:bg-red-600"
        >
          <span className="hover:rotate-180 transition-transform material-symbols-outlined">
            close
          </span>
        </button>
        </div>
        <div className="flex gap-1 p-2">
          <button onClick={() => handleChangeState('customer')} className={state == 'customer'?"w-1/2 border-b-2 bg-slate-50 text-black border-white p-1":"p-1 rounded-t-md w-1/2 border-b-2 border-white"}>ثبت مشتری</button>
          <button onClick={() => handleChangeState('account')} className={state == 'account'?"w-1/2 border-b-2 bg-slate-50 text-black border-white p-1":"p-1 rounded-t-md w-1/2 border-b-2 border-white"}>ثبت حساب</button>
          <button onClick={() => handleChangeState('specification')} className={state == 'specification'?"w-1/2 border-b-2 bg-slate-50 text-black border-white p-1":"p-1 rounded-t-md w-1/2 border-b-2 border-white"}>ثبت مشخصات دستگاه</button>
        </div>
        {state === 'customer' && <CreateCustomer isClose={isClose}/>}
        {state === 'account' && <CreateAccount/>}
        {state === 'specification' && <CreateSpecifications/>}
      </div>
    </div>
  );
};

export default FormCreate;