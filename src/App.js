import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
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
  palette: {
    primary: {
      main: "#005FAD",
    },
    secondary: {
      main: "#324658",
    },
    tertiary: {
      main: "#ED470D",
    },
    success: {
      main: "#009F96",
    },
    error: {
      main: "#FF1F1F",
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
      <div className="App" style={{ backgroundColor: "#C5E0F2" }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className="background" style={styles.header} />
          </Grid>
          <Grid item xs={12} md={6} className="contents">
            <Router>
              <RouteTransition routes={routes} />
            </Router>
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
