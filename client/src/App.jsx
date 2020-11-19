import "./config/reset.css";
import GlobalContext from "./context/GlobalContext";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Entry from "./pages/Entry";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import queryString from "query-string";
import Detail from "./pages/Detail";

function Test({ location, match }) {
  const query = queryString.parse(location.search);
  console.log(query);

  return (
    <div>
      <div>Success</div>
      <div>Code => {query.code}</div>
      <div>scope => {query.scope}</div>
      <div>state => {query.state}</div>
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
          <Route exact path="/account/:id" component={Detail} />
        </Switch>
      </GlobalContext>
    </>
  );
}
//http://127.0.0.1:3000/sign-up/auth?code=fi7&scope=er&state=12
export default App;
