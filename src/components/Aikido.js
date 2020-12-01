import React from "react";
// Styles
import styled from "styled-components";
import { motion } from "framer-motion";

const Aikido = () => {
    return (
        <StyledAikido>
            <h1>Aikido</h1>
        </StyledAikido>
    );
};

const StyledAikido = styled(motion.div)`
    padding-top: 3rem;
    padding-left: 3rem;
`;

export default Aikido;