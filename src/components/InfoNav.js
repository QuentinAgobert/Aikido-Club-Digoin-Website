import React from "react";
// Styles
import styled from "styled-components";
import { motion } from "framer-motion";
// Router
import { useLocation, Link } from "react-router-dom";
// Animation
import { pageAnimation, navAnimation } from "../animation";

const InfoNav = () => {
    const { pathname } = useLocation();
    return (
        <StyledInfoNav>
            <motion.ul variants={navAnimation} initial="hidden" animate="show" exit="exit">
                <motion.li
                    transition={{ duration: 0.5 }}
                    initial={{ x: 0, opacity: 0.5 }} 
                    animate={ pathname === "/info/aikido" ? { x: 50, opacity: 1, fontWeight: "bold" } : { x: 0, opacity: 0.5, fontWeight: "medium" } }
                > 
                    <Link to="/info/aikido">L'Aikido</Link>
                </motion.li>
                <motion.li
                    transition={{ duration: 0.5 }}
                    initial={{ x: 0, opacity: 0.5 }} 
                    animate={ pathname === "/info/osensei" ? { x: 50, opacity: 1, fontWeight: "bold" } : { x: 0, opacity: 0.5, fontWeight: "medium" } }
                >
                    <Link to="/info/osensei">O'sensei</Link>
                </motion.li>
                <motion.li
                    transition={{ duration: 0.5 }}
                    initial={{ x: 0, opacity: 0.5 }} 
                    animate={ pathname === "/info/enseignant" ? { x: 50, opacity: 1, fontWeight: "bold" } : { x: 0, opacity: 0.5, fontWeight: "medium" } }
                >
                    <Link to="/info/enseignant">Enseignant</Link>
                </motion.li>
                <motion.li
                    transition={{ duration: 0.5 }}
                    initial={{ x: 0, opacity: 0.5 }} 
                    animate={ pathname === "/info/equipement" ? { x: 50, opacity: 1, fontWeight: "bold" } : { x: 0, opacity: 0.5, fontWeight: "medium" } }
                >
                    <Link to="/info/equipement">Equipement</Link>
                </motion.li>
                <motion.li
                    transition={{ duration: 0.5 }}
                    initial={{ x: 0, opacity: 0.5 }} 
                    animate={ pathname === "/info/dojo" ? { x: 50, opacity: 1, fontWeight: "bold" } : { x: 0, opacity: 0.5, fontWeight: "medium" } }
                >
                    <Link to="/info/dojo">Dojo</Link>
                </motion.li>
                <motion.li
                    transition={{ duration: 0.5 }}
                    initial={{ x: 0, opacity: 0.5 }} 
                    animate={ pathname === "/info/liens" ? { x: 50, opacity: 1, fontWeight: "bold" } : { x: 0, opacity: 0.5, fontWeight: "medium" } }
                >
                    <Link to="/info/liens">Liens</Link>
                </motion.li>
            </motion.ul>
        </StyledInfoNav>
    );
};

const StyledInfoNav = styled(motion.nav)`
    padding: 5rem 2rem;
    ul {
            display: flex;
            flex-direction: column;
            list-style: none;
            li {
                text-align: left;
                font-size: 1.3rem;
                padding-bottom: 3rem;
            }
            a {
                color: #424656;
                font-family: 'Nunito', sans-serif;
            }
        }
`;

const Line = styled(motion.div)`
    height: 0.10rem;
    background: #424656;
`;


export default InfoNav;