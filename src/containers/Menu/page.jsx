import doshbordicon from "../../assets/images/dashboard.png"
import account from "../../assets/images/account.png"
import customer from "../../assets/images/customer.png"
import support from "../../assets/images/support.png"
import specifications_list from "../../assets/images/Specifications-list.svg"
import ButtonMenu from "../../components/buttons/buttonMenu/page";
const Menu=()=>{
    return(
        <div className="w-60 hidden md:block gap-2 p-2 rounded-lg shadow-md bg-slate-100">
          <ul className='flex gap-2 flex-col w-full'>
            <ButtonMenu path="/" imageUrl={doshbordicon} imageAlt="icon image" cheldern="داشبورد" />
            <ButtonMenu path="customers" imageUrl={customer} imageAlt="icon image" cheldern="مشتریان" />
            <ButtonMenu path="accounts" imageUrl={account} imageAlt="icon image" cheldern="حساب ها" />
            <ButtonMenu path="Specifications-list" imageUrl={specifications_list} imageAlt="icon image" cheldern="لیست مشخصات وسایل" />
            <ButtonMenu path="support" imageUrl={support} imageAlt="icon image" cheldern="پشیبانی" />
          </ul>
        </div>
    )
}
export default Menu;