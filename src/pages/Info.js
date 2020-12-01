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
import { Route, useRouteMatch } from "react-router-dom";
// Animation
import { pageAnimation, navAnimation } from "../animation";
import { AnimatePresence } from "framer-motion";

const Info = () => {
    const { path } = useRouteMatch();
    return (
        <StyledInfo>
            <InfoNav />
            <InfoContainer>
                <Route path={`${path}/dojo`}>
                    <Dojo />
                </Route>
                <Route path={`${path}/aikido`}>
                    <Aikido />
                </Route>
                <Route path={`${path}/osensei`}t>
                    <Osensei />
                </Route>
                <Route path={`${path}/enseignant`}>
                    <Enseignant />
                </Route>
                <Route path={`${path}/equipement`}>
                    <Equipement />
                </Route>
                <Route path={`${path}/liens`}>
                    <Liens />
                </Route>
            </InfoContainer>
        </StyledInfo>
    );
};

const StyledInfo = styled(motion.div)`
    display: flex;
    flex-direction: row;
    background: lightgreen;
`;

const InfoContainer = styled(motion.div)`
    width: 52.5%;
    display: flex;
    background: lightblue;
`;

export default Info;