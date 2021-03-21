import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import Detail from "./pages/Detail";
import Signin from "./pages/Signin";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashBoard}></Route>
        <Route exact path="/detail" component={Detail}></Route>
        <Route exact path="/signin" component={Signin}></Route>

        {/*  <Route exact path="/resetPassword" component={ResetPassword}></Route> 
        <Route exact path="/*" component={DashBoardEntry}></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
