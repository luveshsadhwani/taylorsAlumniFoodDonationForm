import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Grid,
  MuiThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@material-ui/core";
import RouteTransition from "./components/RouteTransition";

import FormOnlinePage from "./pages/FormOnlinePage";
import LandingPage from "./pages/LandingPage";
import SubmissionPage from "./pages/SubmissionPage";

const routes = [
  { path: "/", Component: LandingPage },
  { path: "/formOnline", Component: FormOnlinePage },
  { path: "/submission", Component: SubmissionPage },
];

let theme = createTheme({
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
theme = responsiveFontSizes(theme);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Grid
        container
        style={{
          backgroundColor: "#C5E0F2",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            backgroundImage: `url("img/image.jpg")`,
            backgroundSize: "cover",
          }}
        ></Grid>
        <Grid item xs={12} sm={6} className="contents">
          <Router>
            <RouteTransition routes={routes} />
          </Router>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
