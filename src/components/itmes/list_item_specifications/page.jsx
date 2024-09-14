import { useEffect, useState } from "react";

const Item_specifications = ({name,title="",phases=false}) => {
  const [state,setState]=useState(false)
  useEffect(()=>{
    setState(phases)
  },[])
    return (
    <>
      {
        state ?
        <div className="flex rounded-lg bg-slate-50 p-2 justify-end">
            {name ? <h2>تک فاز</h2>: <h2>سه فاز</h2> }
        </div>
        :
        <div className="flex rounded-lg bg-slate-50 p-2 justify-end">
            <h2>{name}</h2>
            <p>:{title}</p>
        </div> 
      }
    </>
  );
};
export default Item_specifications;