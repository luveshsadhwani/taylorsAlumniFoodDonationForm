import "./App.css";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { Grid, MuiThemeProvider, createTheme } from "@material-ui/core";
import RouteTransition from "./components/RouteTransition";

import FormOnlinePage from "./pages/FormOnlinePage";
import LandingPage from "./pages/LandingPage";
import SubmissionPage from "./pages/SubmissionPage";

const routes = [
  { path: "/", Component: LandingPage },
  { path: "/formOnline", Component: FormOnlinePage },
  { path: "/submission", Component: SubmissionPage },
];

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
                <RouteTransition routes={routes}/>
              </Switch>
            </Router>
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
