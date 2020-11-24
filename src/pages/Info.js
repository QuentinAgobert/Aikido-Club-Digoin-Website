import React from "react";
// Components
import InfoNav from "../components/InfoNav";
import Aikido from "../components/Aikido";
import Osensei from "../components/Osensei";
import Enseignant from "../components/Enseignant";
import Equipement from "../components/Equipement";
import Dojo from "../components/Dojo";
import Liens from "../components/Liens";
// Styles
import styled from "styled-components";
import { motion } from "framer-motion";
// Router
import { useLocation, Switch, Route } from "react-router-dom";
// Animation
import { pageAnimation, navAnimation } from "../animation";

const Info = () => {
    const location = useLocation();
    return (
        <Container variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <InfoNav />
            <Switch location={location} key={location.pathname}>
                <Route path="/info/aikido" exact>
                    <Aikido />
                </Route>
                <Route path="/info/osensei" exact>
                    <Osensei />
                </Route>
                <Route path="/info/enseignant" exact>
                    <Enseignant />
                </Route>
                <Route path="/info/equipement" exact>
                    <Equipement />
                </Route>
                <Route path="/info/dojo" exact>
                    <Dojo />
                </Route>
                <Route path="/info/liens" exact>
                    <Liens />
                </Route>
            </Switch>
        </Container>
    );
};

const Container = styled(motion.div)`
    width: 65%;
    margin: auto;
    display: flex;
    background: lightblue;
`;

export default Info;