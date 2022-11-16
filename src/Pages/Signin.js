import React, { useState} from "react";
import Footer from "../Components/Footer";
import Signin from "../Components/Signin";

const SigninPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toogle = () => {
        setIsOpen(!isOpen);
    };


return (
    <>

    <Footer />
    </>
);
};

export default SigninPage;