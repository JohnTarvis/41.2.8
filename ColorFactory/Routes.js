import React, {useState} from "react";
import {Route, Redirect, Switch, BrowserRouter} from "react-router-dom";
import ColorChart from "./ColorChart";
import ColorForm from "./ColorForm";
import Color from "./Color";

function Routes() {

  const start ={
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
  };
  const [colors, change] = useState(start);
  function render(props) {
    const matched = props.match.params;
    const {color} = matched;
    const c = colors[color];
    return <Color {...props} c={c} color={color} />;
  };
  function add(newColor) {
    change(oldColors => ({...oldColors,...newColor}));
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors/new">
          <ColorForm addColor={add} />
        </Route>
        <Route exact path="/colors">
          <ColorChart colors={colors} />
        </Route>
        <Route path="/colors/:color" render={render} />
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
