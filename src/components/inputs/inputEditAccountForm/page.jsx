import InputForm from "../inputForm/page";

const InputEditAccountForm = ({ label, title, id, setChange }) => {
  return (
    <div className="flex ml-1 pl-1 bg-white px-1 text-black rounded-md w-60 md:min-w-96 items-center flex-row-reverse justify-start gap-1">
      <label className="text-xs md:text-base" htmlFor={id}>
        {label}
      </label>
      <InputForm setChange={setChange} id={id} title={title} />
    </div>
  );
};
export default InputEditAccountForm;