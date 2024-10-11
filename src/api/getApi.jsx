import api from "./api";
const getApi=async ()=>{
    try {
        const res=(await api.get('/specifications_list')).data
        console.log(res);
        
        return res
    } catch (error) {
        console.log(error);
    }
}
export default getApi