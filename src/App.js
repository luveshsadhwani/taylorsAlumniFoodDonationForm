import "./App.css";
import FormPage from "./pages/FormPage";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SubmissionPage from "./pages/SubmissionPage";

function App() {
  const styles = {
    header: {
      backgroundImage: `url(${
        process.env.PUBLIC_URL + "/img/imageblurlowcontrastdark.jpg"
      })`,
    },
  };
  return (
    <div className="App">
      <div className="background" style={styles.header}>
        <Router>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/form" exact component={FormPage} />
            <Route path="/submission" exact component={SubmissionPage} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
