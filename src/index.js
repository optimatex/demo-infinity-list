import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DevTools from "mobx-react-devtools";

import app from 'stores/App';
import AppLayout from 'components/AppLayout';

render(
  <BrowserRouter>
    <Route
      render={props =>
        <AppLayout {...props} app={app} />
      }
    />
  </BrowserRouter>,
  document.getElementById("root")
);
