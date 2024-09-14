import { useEffect, useState } from "react";
import api from "../../../api/api";
import getApi from "../../../api/getApi";
import { toPersianNumber } from "../../../utilities/numberConvert";
import { v4 as uuidv4 } from 'uuid';
import InputSpecifications from "../../../components/inputs/inputSpecifications/createForm/page";

const CreateSpecifications=()=>{
    const [data,setData]=useState([])
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
    const id=uuidv4()
    
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
    const getData=async()=>{
        const res=await getApi()
        setData(res)
    }
    const postData=async()=>{
        const postApi=await api.post('/specifications_list',objectData)
    }
    useEffect(()=>{
        getData()
    },[])
    console.log(data);
    return(
        <>
            <div className="">
                <h2 className="text-white">ثبت مشخصات دستگاه</h2>
                <form className="p-2 flex flex-wrap justify-center gap-2">
                    <InputSpecifications setChange={toPersianNumber((e)=>setName(e.target.value))} title="نام وسیله" />
                    <InputSpecifications setChange={toPersianNumber((e)=>setDiameter_size(e.target.value))} title="فطر هسته" />
                    <InputSpecifications setChange={toPersianNumber((e)=>setLength_size(e.target.value))} title="طول هسته" />
                    <InputSpecifications setChange={toPersianNumber((e)=>setNumber_laps_main(e.target.value))} title="تعداد دور سیم پیچ اصلی" />
                    <InputSpecifications setChange={toPersianNumber((e)=>setNumber_laps_start(e.target.value))} title="تعداد دور سیم پیچ راه انداز" />
                    <InputSpecifications setChange={toPersianNumber((e)=>setCross_section_main(e.target.value))} title="سطح مقطع سیم اصلی" />
                    <InputSpecifications setChange={toPersianNumber((e)=>setCross_section_start(e.target.value))} title="سطح مقطع سیم راه انداز" />
                    <InputSpecifications setChange={toPersianNumber((e)=>setCoil_group_main(e.target.value))} title="تعداد گروه سیم پیچ اصلی" />
                    <InputSpecifications setChange={toPersianNumber((e)=>setCoil_group_start(e.target.value))} title="تعداد گروه سیم پیچ راه انداز" />
                    <InputSpecifications setChange={toPersianNumber((e)=>setNumber_grooves(e.target.value))} title="تعداد شیار هسته" />
                    <InputSpecifications setChange={toPersianNumber((e)=>setName(e.target.value))} title="(hp)قدرت بر حسب اسب بخار" />
                    <InputSpecifications setChange={toPersianNumber((e)=>setName(e.target.value))} title="نوع سربندی" />
                    <div className="w-full flex justify-center items-center flex-col gap-2">
                        <label htmlFor="phases">
                            {
                                three_phases ? 'سه فاز':'تک فاز'
                            }
                        </label>
                        <input type="checkbox" id="phases" className="" />
                        <button className="p-2 mt-auto bg-green-500 rounded-md shadow-md hover:bg-green-600 min-w-44">
                            تبت وسیله
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default CreateSpecifications;