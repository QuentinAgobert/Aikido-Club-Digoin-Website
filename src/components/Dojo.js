import React from "react";
// Styles
import styled from "styled-components";
import { motion } from "framer-motion";

const Dojo = () => {
    return (
        <StyledDojo>
            <h1>Dojo</h1>
        </StyledDojo>
    );
};

const StyledDojo = styled(motion.div)`

`;

export default Dojo;