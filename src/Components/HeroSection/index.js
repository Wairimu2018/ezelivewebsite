import React, { useState } from "react";
import {
    HeroContainer,
    // HeroBg,
    // VideoBg,
    HeroContent,
    HeroBtnWrapper,
    ArrowForward,
    // MdKeyboardArrowRight,
    // ArrowRight,
} from "./HeroSectionElement";
import { ButtonR } from "./../ButtonElements";
// import Video from "./videos/bgvideo.mp4";
import "../..//App.css";
// import { hover } from "@testing-library/user-event/dist/hover";

const HeroSection =() => {
    const [hover, setHover] = useState(false);

    const onHover =() => {
        setHover(!hover);
    };

    return (
        <HeroContainer>
            <HeroContent>
                <h1 className="h1-hero">Empowering Livelihoods</h1>
                <p className="hero-text">
                Sign up today and recieve $250 in credit for your next sucessfull
          project.
                </p>
                <HeroBtnWrapper>
                <ButtonR to="/signin" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
            Get started hover ? <ArrowForward />
          </ButtonR>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
