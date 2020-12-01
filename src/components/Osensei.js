import React from "react";
// Styles
import styled from "styled-components";
import { motion } from "framer-motion";

const Osensei = () => {
    return (
        <StyledOsensei>
            <h1>OSensei</h1>
        </StyledOsensei>
    );
};

const StyledOsensei = styled(motion.div)`
    padding-top: 3rem;
    padding-left: 3rem;
`;

export default Osensei;