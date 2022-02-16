import React from "react";
import { Route, Redirect } from "react-router-dom";

//      <ProtectedRoute
//      path="/ducks"
//      loggedIn={this.state.loggedIn}
//      component={Ducks}
//      />

// этот компонент принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() =>
        props.loggedIn ? <Component {...props} /> : <Redirect to="./sign-" />
      }
    </Route>
  );
};

export default ProtectedRoute; 