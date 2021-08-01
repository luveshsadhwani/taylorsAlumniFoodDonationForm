import "./App.css";
import FormOnlinePage from "./pages/FormOnlinePage";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SubmissionPage from "./pages/SubmissionPage";
import { Grid, MuiThemeProvider, createTheme } from "@material-ui/core";
import FormFoodBankPage from "./pages/FormFoodBankPage";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1025,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {
  const styles = {
    header: {
      backgroundImage: `url(${process.env.PUBLIC_URL + "/img/image.jpg"})`,
    },
  };
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className="background" style={styles.header} />
          </Grid>
          <Grid item xs={12} md={6} className="contents">
            <Router>
              <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/formFoodBank" exact component={FormFoodBankPage} />
                <Route path="/formOnline" exact component={FormOnlinePage} />
                <Route path="/submission" exact component={SubmissionPage} />
              </Switch>
            </Router>
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
