import { lazy, Suspense, useState } from "react";

const CreateFormAccountList=lazy(()=> import('../../../containers/Account/create_account/page'))

const ButtonAddAccount=({setClick,id})=>{
    const [state,setState]=useState(false)
    const handeleState=()=>{
        setState(!state)        
    }
    return(
        <>
            <button onClick={handeleState} className="w-8 rounded-full h-8 hover:bg-blue-600 bg-blue-500">
                +
            </button>
            <Suspense fallback={<>loadinge....</>}>
                {state && <CreateFormAccountList id={id} onClose={( )=>setState(!state)} />}
            </Suspense>
        </>
    )
}
export default ButtonAddAccount;