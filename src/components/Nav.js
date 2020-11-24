import React from "react";
// Styles
import styled from "styled-components";
import { motion } from "framer-motion";
// Images
import Logo from "../img/logo.jpg";
// Router
import { useLocation, Link } from "react-router-dom";
// Animations
import { lineAnimation } from "../animation";

function Nav() {
    const { pathname } = useLocation();
    return (
        <>
            <StyledNav>
                <div className="nav-left">
                    <img className="nav-logo" src={Logo} alt="logo" />
                    <div className="nav-title">
                        <h1><Link to="/">Aikido Club Digoinnais</Link></h1>
                    </div>
                </div>
                <motion.div className="nav-right">
                    <motion.ul>
                        <motion.li>
                            <Link to="/">Accueil</Link>
                            <Line variants={lineAnimation} initial="hidden" animate={ pathname === '/' ? "show" : "exit" } />
                        </motion.li>
                        <motion.li>
                            <Link to="/info/aikido">Informations</Link>
                            <Line variants={lineAnimation} initial="hidden" animate={ pathname.indexOf("/info") >= 0 ? "show" : "exit" } />
                        </motion.li>
                        <motion.li>
                            <Link to="/contact">Contact</Link>
                            <Line variants={lineAnimation} initial="hidden" animate={ pathname === '/contact' ? "show" : "exit" } />
                        </motion.li>
                    </motion.ul>
                </motion.div>
            </StyledNav>
            <BlueBar />
        </>
    );
}

const StyledNav = styled(motion.nav)`
    background: #5874AE; //#585e68;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 5rem;
    z-index: 1;

    .nav-left {
        display: flex;

        .nav-title {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: auto;
            font-size: 1.3rem;
            a {
                color: #E4F0FF; //white;
                font-family: 'Lobster Two', sans-serif;
            }
        }

        img {
            width: 33%;
            clip-path: circle(50px at center);
        }
    }

    .nav-right {

        ul {
            display: flex;
            align-items: center;
            justify-content: space-around;
            list-style: none;
            li {
                padding-left: 6rem;
                font-size: 1.5rem;
            }
            a {
                color: #E4F0FF; //white;
                font-family: 'Nunito', sans-serif;
            }
        }
    }
`;

const Line = styled(motion.div)`
    height: 0.15rem;
    background: #E4F0FF;
`;

const BlueBar = styled(motion.div)`
    width: 100%;
    height: 0.5rem;
    background: rgb(32, 68, 121);
`;

export default Nav;