import React, { useState } from "react";
import Footer from "../Components/Footer";
import Signin from "../Components/Signin";
import { Navbar } from "./../Components/NavBar";
import { Sidebar } from "./../Components/SideBar";

const SigninPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Signin />
      <Footer />
    </>
  );
};

export default SigninPage;