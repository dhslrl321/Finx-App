import "./config/reset.css";
import GlobalContext from "./context/GlobalContext";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Entry from "./pages/Entry";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import queryString from "query-string";

function Test({ location, match }) {
  const query = queryString.parse(location.search);
  console.log(query);

  return (
    <div>
      <div>Success</div>
      <div>Code => {match.query.code}</div>
      <div>scope => {match.query.code}</div>
      <div>clint_info => {match.query.code}</div>
      <div>state => {match.query.code}</div>
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
