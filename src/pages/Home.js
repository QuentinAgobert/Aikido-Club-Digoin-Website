import React from "react";
// Components
import Intro from "../components/Intro";
import News from "../components/News";
// Styles
import styled from "styled-components";
import { motion } from "framer-motion";
// Animations
import { pageAnimation } from "../animation";

const Home = () => {
    return (
        <StyledHome variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <Intro />
            <News />
        </StyledHome>
    );
};

const StyledHome = styled(motion.div)`
    width: 65%;
    margin: auto;
    padding: 3rem 5rem;
`;

export default Home;