import { useNavigate } from "react-router-dom";
import api from "../../../api/api";
import { useEffect, useState } from "react";

const Li_specifications = ({ title = "", id }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const getApi = async () => {
    try {
      const res = await api.get(`/specifications_list/${id}`);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApi();
  }, []);
  const routePageSpecification = () => {
    navigate(`./${id}`);
  };

  return (
    <li className="w-full p-2 rounded-md bg-slate-700 text-white flex items-center flex-row-reverse justify-between">
      <h2>{title}</h2>
      <button
        onClick={routePageSpecification}
        className="hover:bg-green-500 bg-green-600 p-2 rounded-lg text-white"
      >
        جزیات بیشتر
      </button>
    </li>
  );
};

export default Li_specifications;
