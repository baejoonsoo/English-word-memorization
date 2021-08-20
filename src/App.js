import React from "react";
import Header from "./Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DayList from "./DayList";
import Day from "./Day";
import EmptyPage from "./EmptyPage";
import CreateWord from "./CreateWord";
import CreateDay from "./CreateDay";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <DayList />
                    </Route>
                    <Route path="/day/:day">
                        <Day />
                    </Route>
                    <Route path="/createWord">
                        <CreateWord />
                    </Route>
                    <Route path="/createDay">
                        <CreateDay />
                    </Route>
                    <Route>
                        <EmptyPage />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
