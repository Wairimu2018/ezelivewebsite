import React, { useState} from "react";
import HeroSection from "../Components/HeroSection";
import InfoSection from "../Components/InfoSection"; 
import { Navbar } from "../Components/NavBar";
import { Sidebar} from "../Components/SideBar";

import Image1 from "../Images/design-notes.svg";
import Image2 from "../Images/space.svg";
import InfoSectionLight from "../Components/InfoSectionLight";
import Services from "../Components/Services";
import Footer from "../Components/Footer";

export const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <HeroSection />
          <InfoSection
            image={Image1}
            id="about"
            subtitle="Mauris tempor interdum"
            title="Proin condimentum diam"
            text="In luctus nibh nec metus placerat consectetur. Maecenas odio mi, ullamcorper at porta non, egestas vitae velit. Donec lacinia porta tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec arcu nec diam posuere tincidunt. Nulla dignissim enim id nibh luctus, ullamcorper sagittis eros semper."
            btnText="Start today"
          />
          <InfoSectionLight
            image={Image2}
            id="discover"
            subtitle="Morbi iaculis enim"
            title="In hac habitasse"
            text="Phasellus porta sagittis sapien. Nam quis odio eu libero tempus rutrum. Suspendisse nec eros eget ex cursus rhoncus. Proin at velit quis ante pretium porta. Quisque pulvinar, elit et tincidunt ultricies, mauris odio luctus risus, vitae auctor elit risus a tortor. Nunc pulvinar purus id est rutrum vulputate. Mauris venenatis lectus vel nisi semper scelerisque."
            btnText="Explore"
          />
          <Services />
          <InfoSectionLight
            image={Image1}
            id="#"
            subtitle="Duis et lectus accumsan"
            title="Quisque dui justo"
            text="Cras et ligula eget neque ornare tempor et vitae est. Duis et lectus accumsan, mollis dui a, finibus metus. Quisque dui justo, ullamcorper eget luctus id, consectetur eget nunc. In quis arcu erat. Morbi consequat imperdiet lorem, porta porta erat hendrerit vel. Aliquam dignissim purus at dolor posuere euismod."
            btnText="Read more"
          />
          <Footer />
        </>
      );
    };