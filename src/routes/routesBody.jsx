import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Dashboard from "../containers/pages/Dashboard/page";
import Customers from "../containers/pages/Customers/page";
import App from "../App";
import Accounts from "../containers/pages/Accounts/page";
import Support from "../containers/pages/Support/page";
import Customer from "../containers/pages/Customers/customer_page";
import Account from "../containers/pages/Accounts/account_page";
import SpecificationsList from "../containers/pages/Specifications-list/page";
import Specifications_page from "../containers/pages/Specifications-list/specificationsList_page";


export const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>} >
        <Route path="/" index element={<Dashboard/>}/>
        <Route path="/customers" element={<Customers/>}>
            <Route
              path=":id"
              element={<Customer/>}
            />
        </Route>
        <Route path="/accounts" element={<Accounts/>}>
          <Route 
            path=":id"
            element={<Account/>}
          />
        </Route>
        <Route path="/specifications-list" element={<SpecificationsList/>}>
        <Route
            path=":id"
            element={<Specifications_page/>}
          />
        </Route>
        <Route path="/support" element={<Support/>}/>
    </Route>
  )
)