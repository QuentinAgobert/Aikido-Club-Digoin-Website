import React from "react";
// Pages
import Home from "./pages/Home";
import Info from "./pages/Info";
import Contact from "./pages/Contact";
// Components
import Nav from "./components/Nav";
// Styles
import GlobalStyles from "./components/GlobalStyles";
// Router
import { useLocation, Switch, Route } from "react-router-dom";

function App() {
    const location = useLocation();
    return (
        <div className="App">
            <GlobalStyles />
            <Nav />
            <Switch location={location} key={location.pathname}>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/info" exact>
                    <Info />
                </Route>
                <Route path="/contact" exact>
                    <Contact />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
