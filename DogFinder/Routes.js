import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import DogList from './DogList';
import FilterDogDetails from './FilterDogDetails';

function getDog(dogs,name){
  let back;
  for(let dog in dogs){
    if(name = dog.name){
      back = dog;
    }
  }
  return back;
}

function Routes({dogs}) {
  return (
    <Switch>
      <Route exact path="/dogs">
        <DogList dogs={dogs} />
      </Route>
      <Route path="/dogs/:name">
      <DogDetails dog={getDog(dogs,name)} />
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  );
}

export default Routes;
