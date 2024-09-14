import { useEffect, useState } from "react";

const InputEditSpecifications = ({ title, value, setChange, phases = false, tik = false , setTik }) => {
  const [state, setState] = useState(phases);
  const [isTik, setIsTik] = useState(tik);

  useEffect(() => {
    setState(phases);
  }, [phases]);

  useEffect(() => {
    setIsTik(tik);
  }, [tik]);

  const handleCheckboxChange = () => {
    setIsTik(prev => !prev);
  };

  return (
    <>
      {state ? (
        <div className="flex flex-row-reverse justify-start gap-1 bg-slate-200 items-center p-2 w-full rounded-md lg:w-3/4">
          <label htmlFor="tik"> :نوع برق موتور</label>
          <input onClick={setTik} type="checkbox" id="tik" checked={isTik} onChange={handleCheckboxChange} />
          <h2>{isTik ? "سه فاز" : "تک فاز"}</h2>
        </div>
      ) : (
        <div className="flex flex-row-reverse justify-between bg-slate-200 items-center p-2 rounded-md w-full lg:w-3/4">
          <label className="text-sm md:text-base" htmlFor={title}>:{title}</label>
          <input
            id={title}
            className="rounded-md outline-none max-w-52 md:min-w-52 lg:w-full bg-slate-200"
            type="text"
            onChange={setChange}
            placeholder={value}
          />
        </div>
      )}
    </>
  );
};

export default InputEditSpecifications;