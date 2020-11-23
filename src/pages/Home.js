import React from "react";
// Components
// Styles
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <Container>
            <h1>Accueil</h1>
        </Container>
    );
};

const Container = styled(motion.div)`
    width: 50%;
    height: 85vh;
    margin: auto;
    background: lightblue;
`;

export default Home;