import React from "react";
// Pages
import Home from "./pages/Home";
import Info from "./pages/Info";
import Contact from "./pages/Contact";
// Components
import Nav from "./components/Nav";
// Styles
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
// Router
import { Switch, Route } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";

function App() {
    return (
        <StyledApp>
            <GlobalStyles />
            <Nav />
            <BlueBar />
            <AnimatePresence exitBeforeEnter>
                <Switch>
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
        </StyledApp>
    );
}

const StyledApp = styled.div`

`;

const BlueBar = styled.div`
    width: 100%;
    height: 0.5rem;
    background: rgb(32, 68, 121);
`;

export default App;
