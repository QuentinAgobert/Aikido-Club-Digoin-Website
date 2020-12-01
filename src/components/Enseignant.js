import React from "react";
// Styles
import styled from "styled-components";
import { motion } from "framer-motion";

const Enseignant = () => {
    return (
        <StyledEnseignant>
            <h1>Enseignant</h1>
        </StyledEnseignant>
    );
};

const StyledEnseignant = styled(motion.div)`
    padding-top: 3rem;
    padding-left: 3rem;
`;

export default Enseignant;