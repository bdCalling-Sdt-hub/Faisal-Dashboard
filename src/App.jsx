import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import Earning from "./Pages/Dashboard/Earning/Earning";
import Notification from "./Pages/Dashboard/Notification/Notification";
import UserInfo from "./Pages/Dashboard/UserInfo/UserInfo";
import Email from "./Pages/Email/Email";
import Otp from "./Pages/Otp/Otp";
import Signin from "./Pages/Signin/Signin";
import UpdatePass from "./Pages/UpdatePass/UpdatePass";
import NotFound from "./404";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Setting from "./Pages/Dashboard/Setting/Setting";
import SettingPage from "./Pages/Dashboard/Setting/SettingPage/SettingPage";
import UserPayment from "./Pages/Dashboard/UserPayment/UserPayment";
import Package from "./Pages/Dashboard/Package";
import EditPackage from "./Pages/Dashboard/EditPackage";
import Category from "./Pages/Dashboard/Category/Category";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";

function App() {
  return (
    <>
      <div className="maincontainer">
        <Router>
          <Routes>
            <Route exact path="/" element={ <PrivateRoute> <Dashboard /> </PrivateRoute> }>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/earning/:income" element={<Earning />} />
              <Route path="/user-info" element={<UserInfo />} />
              <Route path="/user-payment" element={<UserPayment />} />
              <Route path="/package" element={<Package />} />
              <Route path="/edit-package" element={<EditPackage />} />
              <Route path="/category" element={<Category />} />
              <Route path="/make-admin" element={<MakeAdmin />} />
              <Route path="/setting" element={<Setting />}></Route>
              <Route path="/setting/:dynamic" element={<SettingPage />} />
            </Route>

            <Route path="/signin" element={<Signin />} />
            <Route path="/email" element={<Email />} />
            <Route path="/forget-password" element={<Otp />} />
            <Route path="/update-password" element={<UpdatePass />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
