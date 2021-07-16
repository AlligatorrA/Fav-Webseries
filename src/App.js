import "./styles.css";

import "./all.css";
import { Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Biotech from "./Biotech";
import Action from "./Action";
import Scifi from "./Scifi";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="head">
          <h1> Fav- Webseries</h1>
        </div>

        <p>Checkout my favorite books. select a genre to get started.</p>

        <Nav />
        <Switch>
          <Route path="/Biotech" exact={true}>
            {" "}
            <Biotech />{" "}
          </Route>
          <Route path="/Scifi">
            {" "}
            <Scifi />{" "}
          </Route>
          <Route path="/Action">
            {" "}
            <Action />{" "}
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </header>
    </div>
  );
}
function PageNotFound() {
  return (
    <div>
      <h1>
        <i>Working on it, Mate !</i>
      </h1>
    </div>
  );
}

export default App;
