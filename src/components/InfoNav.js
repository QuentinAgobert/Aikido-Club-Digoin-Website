import React from "react";
// Styles
import styled from "styled-components";
import { motion } from "framer-motion";
// Router
import { useLocation, Link, useRouteMatch } from "react-router-dom";
// Animation
import { navListAnim, navItemAnim } from "../animation";

const InfoNav = () => {
    const { pathname } = useLocation();
    const { url } = useRouteMatch();
    return (
        <StyledInfoNav variants={navListAnim} initial="hidden" animate="show" exit="exit">
            <motion.ul>
                <motion.li> 
                    <Link to={`${url}/dojo`}>Le dojo</Link>
                </motion.li>
                <motion.li>
                    <Link to={`${url}/enseignant`}>L'enseignant</Link>
                </motion.li>
                <motion.li>
                    <Link to={`${url}/equipement`}>L'équipement</Link>
                </motion.li>
                <motion.li>
                    <Link to={`${url}/aikido`}>L'Aikido</Link>
                </motion.li>
                <motion.li>
                    <Link to={`${url}/osensei`}>O'sensei</Link>
                </motion.li>
                <motion.li>
                    <Link to={`${url}/liens`}>Liens</Link>
                </motion.li>
            </motion.ul>
        </StyledInfoNav>
    );
};

const StyledInfoNav = styled(motion.nav)`
    padding: 5rem 2rem;
    background: lightcoral;
    width: 13%;
    margin-left: 17.5%;
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
                &:hover {
                    font-weight: bold;
                }
            }
        }
`;

export default InfoNav;