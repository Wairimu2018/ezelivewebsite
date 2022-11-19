import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./Pages";
import SigninPage from "./Pages/Signin";

function App() {
  return (
    <Router>
       {/* <Switch>  */}
        <Route path="/" Component={Home} />
        <Route path="/Signin" Component={SigninPage} />
      {/* </Switch> */}
    </Router>
  );
}

export default App;