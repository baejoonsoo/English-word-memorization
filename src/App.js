import React from "react";
import Header from "./Header";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import DayList from "./DayList";
import Day from "./Day";
import EmptyPage from "./EmptyPage";

export default () => {
  return (
    <BrowserRouter> 
      <div>    
        <Header/>
          <Switch>
            <Route exact path='/'>
              <DayList/>
            </Route>
            <Route path='/day/:day'>
              <Day/>
            </Route>
            <Route>
              <EmptyPage/>
            </Route>
          </Switch>  
      </div>
    </BrowserRouter>
  );
};
  