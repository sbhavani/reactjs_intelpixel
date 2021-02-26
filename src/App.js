import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import Detail from "./pages/Detail";
function App() {
  return (
    <Router exact basename="/intelpixel">
      <Switch>
        <Route exact path="/" component={DashBoard}></Route>
        <Route exact path="/detail" component={Detail}></Route>
        {/*  <Route exact path="/resetPassword" component={ResetPassword}></Route> 
        <Route exact path="/*" component={DashBoardEntry}></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
