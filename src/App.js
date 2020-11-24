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
// Animation
import { AnimatePresence } from "framer-motion";

function App() {
    const location = useLocation();
    return (
        <div className="App">
            <GlobalStyles />
            <Nav />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/info">
                        <Info />
                    </Route>
                    <Route path="/contact" exact>
                        <Contact />
                    </Route>
                </Switch>
            </AnimatePresence>
        </div>
    );
}

export default App;
