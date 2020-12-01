import React from "react";
// Styles
import styled from "styled-components";
import { motion } from "framer-motion";

const Intro = () => {
    return (
        <StyledIntro>
            <h3>On paie mal un maître en ne restant toujours que l'élève...</h3>
            <h2>Le site web de l'Aïkido Club de Digoin a fait peau neuve ! Mais le contenu reste le même. 
                N'hésitez pas à nous contacter si vous avez envie d'essayer cet Art Martial !
            </h2>
        </StyledIntro>
    );
};

const StyledIntro = styled(motion.div)`
    padding-bottom: 2rem;
    margin: auto;
    h3 {
        padding-bottom: 2rem;
        font-style: italic;
        color: #5f5f5f;
        text-align: right;
    }
    h2 {
        text-align: justify;
    }
`;

export default Intro;