import React from "react";
// Components
// Styles
import styled from "styled-components";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <Container>
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