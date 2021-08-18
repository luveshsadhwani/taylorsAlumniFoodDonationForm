import React from "react";
import { CSSTransition } from "react-transition-group";
import "../styles/pagetransition.css";
import { Route } from "react-router-dom";

export default function RouteTransition({ routes = [] }) {
  return (
    <>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              <div className="page">
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </>
  );
}
