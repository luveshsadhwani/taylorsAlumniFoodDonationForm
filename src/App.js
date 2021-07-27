import "./App.css";
import FormPage from "./pages/FormPage";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SubmissionPage from "./pages/SubmissionPage";
import { Grid } from "@material-ui/core";

function App() {
  const styles = {
    header: {
      backgroundImage: `url(${process.env.PUBLIC_URL + "/img/image.jpg"})`,
    },
  };
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12} sm={6}>
          <div className="background" style={styles.header} />
        </Grid>
        <Grid item xs={12} sm={6} className="contents">
          <Router>
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/form" exact component={FormPage} />
              <Route path="/submission" exact component={SubmissionPage} />
            </Switch>
          </Router>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
