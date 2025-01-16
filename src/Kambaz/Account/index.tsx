import AccountNavigation from "./Navigation";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import { Navigate, Route, Routes } from "react-router-dom";

export default function Account() {
  return (
    <div id="wd-account-screen">
    <h2>Account</h2>
    <div id="wd-account-screen">
      <table>
        <tr>
          <td valign="top">
            <AccountNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/"        element={<Navigate to="/Kambaz/Account/Signin" />} />
              <Route path="/Signin"  element={<Signin />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Signup"  element={<Signup />} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
    </div>
);}
