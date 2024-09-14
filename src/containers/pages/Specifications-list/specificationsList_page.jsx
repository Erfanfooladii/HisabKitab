import { useNavigate, useParams } from "react-router-dom";
import api from "../../../api/api";
import { useEffect, useState } from "react";
import FormSpecificationsList from "../../specifications/FormSpecificationsList/page";
import List_item_specifications from "../../specifications/list_items/page";

const Specifications_page = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const getApi = async () => {
    try {
      const res = await api.get(`/specifications_list/${id}`);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const backRoutePage = () => {
    navigate("../");
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <div
        onClick={backRoutePage}
        className="w-screen flex items-center justify-center h-screen fixed top-0 left-0 bg-slate-500 bg-opacity-50"
      ></div>
      <div className="md:w-1/2 w-[95%] flex flex-col gap-2 fixed left-0 bottom-20 right-0 m-auto bg-slate-500 shadow-2xl p-2 rounded-md z-30">
        <div className="flex flex-row-reverse items-center justify-between">
          <h2 className="text-white text-lg">مشخصات دستگاه</h2>
          <div className="flex gap-2">
            <button
              onClick={backRoutePage}
              className="bg-orange-600 hover:bg-orange-700 text-white flex p-2 rounded-lg"
            >
              <span class="material-symbols-outlined">redo</span>
            </button>
            <button
              onClick={() => setIsEdit(!isEdit)}
              className={
                isEdit
                  ? "bg-red-400 hover:bg-red-500 p-2 text-white rounded-lg flex"
                  : "bg-green-400 hover:bg-green-500 p-2 text-white rounded-lg flex"
              }
            >
              {isEdit ? (
                <span class="material-symbols-outlined">close</span>
              ) : (
                <span class="material-symbols-outlined">edit</span>
              )}
            </button>
          </div>
        </div>
        {isEdit ? (
          <FormSpecificationsList data={data} isEdit={isEdit} id={id} />
        ) : (
          <List_item_specifications data={data} />
        )}
      </div>
    </>
  );
};

export default Specifications_page;
