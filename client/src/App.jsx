import "./config/reset.css";
import GlobalContext from "./context/GlobalContext";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Entry from "./pages/Entry";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function Test({ location, match }) {
  const query = queryString.parse(location.search);
  return (
    <div>
      <div></div>
    </div>
  );
}

function App() {
  return (
    <>
      <GlobalContext>
        <Switch>
          <Route exact path="/" component={Entry} />
          <Route path="/home" component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route
            path="/sign-up/:code/:scope:/:client_info/:state"
            component={Test}
          />
        </Switch>
      </GlobalContext>
    </>
  );
}

export default App;
