import "./App.css";
import { Switch, Route,Component,Redirect, BrowserRouter as Router } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import Detail from "./pages/Detail";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  const user = localStorage.getItem("user");
console.log(user);
  return (
    <Router>
      <Switch>
      <Route exact path="/signin" component={Signin}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/" component={DashBoard}></Route>
        <Route exact path="/detail" component={Detail}></Route>
       

        {/*  <Route exact path="/resetPassword" component={ResetPassword}></Route> 
        <Route exact path="/*" component={DashBoardEntry}></Route> */}
      </Switch>
    </Router>
  );
}
const auth = () =>{

}
export default App;
