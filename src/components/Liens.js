import React from "react";
// Styles
import styled from "styled-components";
import { motion } from "framer-motion";

const Liens = () => {
    return (
        <StyledLiens>
            <h1>Liens</h1>
        </StyledLiens>
    );
};

const StyledLiens = styled(motion.div)`
    padding-top: 3rem;
    padding-left: 3rem;
`;

export default Liens;