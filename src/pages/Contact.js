import React from "react";
// Components
// Styles
import styled from "styled-components";
import { motion } from "framer-motion";
// Animations
import { pageAnimation } from "../animation";

const Contact = () => {
    return (
        <Container variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <h1>Contact</h1>
        </Container>
    );
};

const Container = styled(motion.div)`
    width: 65%;
    margin: auto;
    padding: 3rem 5rem;
`;

export default Contact;