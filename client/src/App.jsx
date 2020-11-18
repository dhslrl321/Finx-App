import "./config/reset.css";
import GlobalContext from "./context/GlobalContext";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Entry from "./pages/Entry";
function App() {
  return (
    <>
      <GlobalContext>
        <Switch>
          <Route exact path="/" component={Entry} />
          <Route path="/home" component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </GlobalContext>
    </>
  );
}

export default App;
