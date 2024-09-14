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
      <div className="w-1/2 min-w-80 max-w-[650px] relative text-white rounded-lg p-4 bg-slate-500">
        <span
          onClick={isClose}
          className="absolute top-2 cursor-pointer right-2"
        >
          <span className="hover:rotate-180 transition-transform material-symbols-outlined">
            close
          </span>
        </span>
        <div className="flex gap-1">
          <button onClick={() => handleChangeState('customer')} className="w-1/2 border-b-2 border-white">ثبت مشتری</button>
          <button onClick={() => handleChangeState('account')} className="w-1/2 border-b-2 border-white">ثبت حساب</button>
          <button onClick={() => handleChangeState('specification')} className="w-1/2 border-b-2 border-white">ثبت مشخصات دستگاه</button>
        </div>
        {state === 'customer' && <CreateCustomer isClose={isClose}/>}
        {state === 'account' && <CreateAccount/>}
        {state === 'specification' && <CreateSpecifications/>}
      </div>
    </div>
  );
};

export default FormCreate;