import React from "react";
// Styles
import styled from "styled-components";
import { motion } from "framer-motion";

const Equipement = () => {
    return (
        <StyledEquipement>
            <h1>Equipement</h1>
        </StyledEquipement>
    );
};

const StyledEquipement = styled(motion.div)`
    padding-top: 3rem;
    padding-left: 3rem;
`;

export default Equipement;