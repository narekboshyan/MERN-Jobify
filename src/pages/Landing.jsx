import React from "react";
import { ReactComponent as LogoSvg } from "../assets/images/logo.svg";
import { ReactComponent as MainSvg } from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <LogoSvg alt="jobify" className="logo" />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>
                        Job <span>tracking</span> app{" "}
                    </h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Voluptate quidem dolorum nesciunt aliquam quis
                        quam, eveniet ex odit tenetur aspernatur non fugiat,
                        necessitatibus minima tempora commodi adipisci odio hic
                        explicabo? Odit accusamus voluptatem quam autem.
                    </p>
                    <button className="btn btn-hero">Login/Register</button>
                </div>
                <MainSvg className="img main-img" />
            </div>
        </Wrapper>
    );
};

export default Landing;
