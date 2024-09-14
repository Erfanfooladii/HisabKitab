import { useEffect, useState } from "react";
import api from "../../../api/api";
import getApi from "../../../api/getApi";
import InputEditSpecifications from "../../../components/inputs/inputEditSpecifications/page";
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
                <div className="p-2 flex flex-wrap justify-center gap-2">
                    <InputSpecifications title="نام وسیله" />
                    <InputSpecifications title="نام وسیله" />
                    <InputSpecifications title="نام وسیله" />
                    <InputSpecifications title="نام وسیله" />
                    <InputSpecifications title="نام وسیله" />
                </div>
            </div>
        </>
    )
}
export default CreateSpecifications;