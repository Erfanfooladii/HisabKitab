import { useEffect, useState } from "react";
import InputEditSpecifications from "../../../components/inputs/inputEditSpecifications/page";
import { toPersianNumber } from "../../../utilities/numberConvert";
import api from "../../../api/api";
import { toast, ToastContainer } from "react-toastify";
import useSpecificationsLs from "../../../store/store";

const FormSpecificationsList=({data,id,isEdit})=>{
    const [saveData,setSaveData]=useState([])
    const [display,setDisplay]=useState(false)
    const [name,setName]=useState("")
    const [diameter_size,setDiameter_size]=useState("")
    const [length_size,setLength_size]=useState("")
    const [number_laps_main,setNumber_laps_main]=useState("")
    const [number_laps_start,setNumber_laps_start]=useState("")
    const [coil_group_main,setCoil_group_main]=useState("")
    const [coil_group_start,setCoil_group_start]=useState("")
    const [number_grooves,setNumber_grooves]=useState("")
    const [horse_power,setHorse_power]=useState("")
    const [cross_section_main,setCross_section_main]=useState("")
    const [cross_section_start,setCross_section_start]=useState("")
    const [head_type,setHead_type]=useState("")
    const [three_phases,setThree_phases]=useState(false)
    const objectData={
        id: id,
        name: name,
        diameter_size: diameter_size,
        length_size: length_size,
        three_phases: display,
        number_laps_main: number_laps_main,
        number_laps_start: number_laps_start,
        cross_section_main: cross_section_main,
        cross_section_start: cross_section_start,
        coil_group_main: coil_group_main,
        coil_group_start: coil_group_start,
        number_grooves: number_grooves,
        horse_power: horse_power,
        headـtype: head_type
    }
    useEffect(()=>{
        const getApi=async()=>{
            try {
                const res=(await api.get(`/specifications_list/${id}`)).data
                setSaveData(res)
                setDisplay(res.three_phases)
            } catch (error) {
                console.log(error);
            }
        }
        getApi()    
    },[])
    const upData=useSpecificationsLs((state)=> state.upData)
    const handelesForm=()=>{
        upData(objectData)
    }
    
    const setUpdateApi=async ()=>{
        try {
            const res=await api.put(`/specifications_list/${id}`,objectData)
            setSaveData(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    const handeleForm=(e)=>{
        if (name == "" || diameter_size == "" || length_size == "" || number_laps_main == "" || display ? number_laps_start == "" : null || coil_group_main == "" || display ? coil_group_start == "" :null) {
            e.preventDefault()
            toast("تمام فیلد ها را پر کنید")
            return null
        }else{
            e.preventDefault();
            toast("مشخصات وسیله با موفقیت ثبت شد")
            setUpdateApi()
            setTimeout(() => {
                location.reload()
            }, 1200);
        }
    }
    console.log(display);
    
    return (
        <>
            <ToastContainer rtl />
            <form onSubmit={handeleForm} className="flex flex-col flex-wrap items-center justify-center gap-2 w-full">
                <InputEditSpecifications setChange={(e)=> setName(e.target.value)} value={data.name} title="نام دستگاه" />
                <InputEditSpecifications setChange={(e)=> setDiameter_size(e.target.value)} value={toPersianNumber(data.diameter_size)} title="قطر هسته" />
                <InputEditSpecifications setChange={(e)=> setLength_size(e.target.value)} value={toPersianNumber(data.length_size)} title="طول هسته" />
                <InputEditSpecifications setChange={(e)=> setNumber_laps_main(e.target.value)} value={toPersianNumber(data.number_laps_main)} title="تعداد دور سیم پیج اصلی" />
                {
                    display?
                    <InputEditSpecifications setChange={(e)=> setNumber_laps_start(e.target.value)} value={toPersianNumber(data.number_laps_start)} title="تعداد دور سیم پیج راه انداز" />
                    : null
                }
                <InputEditSpecifications setChange={(e)=> setCoil_group_main(e.target.value)} value={toPersianNumber(data.coil_group_main)} title="تعداد گروه سیم پیچ اصلی" />
                {
                    display?
                    <InputEditSpecifications setChange={(e)=> setCoil_group_start(e.target.value)} value={toPersianNumber(data.coil_group_start)} title="تعداد گروه سیم پیچ راه انداز" />
                    :null
                }
                <InputEditSpecifications setChange={(e)=> setNumber_grooves(e.target.value)} value={toPersianNumber(data.number_grooves)} title="تعداد شیار هسته" />
                <InputEditSpecifications setChange={(e)=> setHorse_power(e.target.value)} value={toPersianNumber(data.horse_power)} title="(hp) قدرت بر حسب اسب بخار" />
                <InputEditSpecifications setChange={(e)=> setCross_section_main(e.target.value)} value={toPersianNumber(data.cross_section_main)} title="سطح مقطع سیم (سیم پیچ اصلی)" />
                {
                    display ?
                    <InputEditSpecifications setChange={(e)=> setCross_section_start(e.target.value)} value={toPersianNumber(data.cross_section_start)} title="سطح مقطع سیم (سیم پیچ راه انداز)" />
                    :null
                }
                <InputEditSpecifications setChange={(e)=> setHead_type(e.target.value)} value={toPersianNumber(data.headـtype)} title="نوع سربندی" />
                <InputEditSpecifications setChange={()=> setThree_phases(!three_phases)} setTik={()=> setDisplay(!display)} value={data.three_phases} phases={true} />
                <button onClick={handelesForm} type="submit" className="bg-green-500 max-w-28 p-2 rounded-md text-white hover:bg-green-600 m-auto">
                ثبت تغییرات
                </button>
            </form>
        </>
    )
}
export default FormSpecificationsList;