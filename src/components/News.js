import React from "react";
// Images
import LogoMutoku from "../img/logoMutoku.jpg";
// Styles
import styled from "styled-components";
import { motion } from "framer-motion";

const News = () => {
    return (
        <StyledNews>
            <h1>Actualités</h1>
            <div className="actu-covid">
                <p>Le club d'Aïkido de Digoin est actuellement fermé à cause de la crise sanitaire actuelle.
                    Nous attendons tous des jours meilleurs pour reprendre la pratique. En attendant, prenez soin de vous.
                </p>
            </div>
            <div className="actu-mutokukai">
                <h3>29/07/2020</h3>
                <p>Le club d'Aïkido de Digoin a quitté la FFAB puis suivre l'enseignement de Stéphane Benedetti Shihan au sein du Mutokukai France.</p>
                <div className="mutokukai">
                    <a target="_blank" href="https://www.mutokukai.fr/"><img src={LogoMutoku} alt="mutokukai"/></a>
                </div>
                
            </div>
        </StyledNews>
    );
};

const StyledNews = styled(motion.div)`
    border-radius: 10px;
    box-shadow: 10px 10px 10px grey;
    padding: 1rem;
    h1 {
        padding-bottom: 1rem;
    }
    h3 {
        font-weight: bold;
        padding-bottom: 0.5rem;
    }
    p {
        font-size: 1.2rem;
        padding: 0rem 1rem;
        text-align: justify;
    }
    .actu-covid {
        padding-bottom: 2rem;
    }
    .actu-mutokukai {
        display: flex;
        margin: auto;
        p {
            padding-bottom: 1rem;
        }
        .mutokukai {
            margin: auto;
        }
    }
`;

export default News;