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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1025,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#95CBEDff",
    },
    secondary: {
      main: "#005CA9ff",
    },
    tertiary: {
      main: "#ef5b24",
    },
    success: {
      main: "#009F96ff",
    },
    error: {
      main: "#ED470Dff",
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
      <div
        className="App"
        style={{ backgroundColor: theme.palette.primary.light }}
      >
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
