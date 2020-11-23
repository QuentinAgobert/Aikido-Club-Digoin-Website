import React from "react";
// Components
// Styles
import styled from "styled-components";
import { motion } from "framer-motion";

const Info = () => {
    return (
        <Container>
            <h1>Informations</h1>
        </Container>
    );
};

const Container = styled(motion.div)`
    width: 50%;
    height: 85vh;
    margin: auto;
    background: lightblue;
`;

export default Info;