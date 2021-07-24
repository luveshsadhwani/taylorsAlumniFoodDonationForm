import "./App.css";
import FormPage from "./pages/FormPage";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SubmissionPage from "./pages/SubmissionPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/form" exact component={FormPage} />
          <Route path="/submission" exact component={SubmissionPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
