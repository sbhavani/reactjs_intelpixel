import "./App.css";
import { Switch, Route ,BrowserRouter as Router} from "react-router-dom";
import DashBoard from "./pages/Dashboard";
function App() {
  return (
    <Router>
      <Switch>
         <Route exact path="/" component={DashBoard}></Route>
  {/*  <Route exact path="/register" component={Register}></Route>
    <Route exact path="/resetPassword" component={ResetPassword}></Route> 
        <Route exact path="/*" component={DashBoardEntry}></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
