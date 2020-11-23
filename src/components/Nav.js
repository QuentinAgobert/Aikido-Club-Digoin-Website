import React, { useState } from "react";
// Styles
import styled from "styled-components";
import { motion } from "framer-motion";
// Images
import Logo from "../img/logo.jpg";
// Router
import { useLocation, Link } from "react-router-dom";

function Nav() {
    const { pathname } = useLocation();
    const [isHover, setIsHover] = useState(false);
    return (
        <StyledNav>
            <div className="nav-left">
                <img className="nav-logo" src={Logo} alt="logo" />
                <div className="nav-title">
                    <h1><Link to="/">Aikido Club Digoinnais</Link></h1>
                </div>
            </div>
            <div className="nav-right">
                <ul>
                    <li>
                        <Link onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} to="/">Accueil</Link>
                        <Line transition={{ duration: 0.75 }} initial={{ width: "0%" }} animate={{ width: pathname === '/' ? "100%" : "0%" }} />
                    </li>
                    <li>
                        <Link to="/info">Informations</Link>
                        <Line transition={{ duration: 0.75 }} initial={{ width: "0%" }} animate={{ width: pathname === '/info' ? "100%" : "0%" }} />
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                        <Line transition={{ duration: 0.75 }} initial={{ width: "0%" }} animate={{ width: pathname === '/contact' ? "100%" : "0%" }} />
                    </li>
                </ul>
            </div>
        </StyledNav>
    );
}

const StyledNav = styled(motion.nav)`
    background: #424955;
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
            font-size: 1rem;
            a {
                color: white;
                font-family: 'Nunito', sans-serif;
            }
        }

        img {
            width: 34%;
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
                color: white;
                font-family: 'Nunito', sans-serif;
            }
        }
    }
`;

const Line = styled(motion.div)`
    height: 0.15rem;
    background: white;
    border-radius: 10px;
    width: 100%;
`;

export default Nav;