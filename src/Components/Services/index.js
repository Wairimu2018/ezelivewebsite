import React from "react";
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from "./ServicesElement";
import Icon1 from "../../Images/space.svg"
import Icon2 from "../../Images/online.svg"
import Icon3 from "../../Images/real-time.svg"

const Services = () => {
    return (
        <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Financial Inclusion</ServicesH2>
                <ServicesP>
                By providing micro-enterprise and farming loans to underserved clients/populations in poor
communities who live on less than $1/day and lack access to traditional financial services. We help
these clients to save money and acquire affordable credit, wealth creation and Micro-Insurance
services (livestock, crop and Health insurances) leveraging their Social Networks through the proven
model of Group Savings/Farmer producer Organizations.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Enterprise development</ServicesH2>
          <ServicesP>
          By supporting existing small and medium enterprises to enhance their efficiencies, consolidate their
market positioning and expand their enterprise options through tailor-made advisory services and
access to support IT based platforms/ options. In addition, we empower youth and women to start
enterprises to enhance household incomes, create employment opportunities and expand local
economies.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Social programming and project implementation support.</ServicesH2>
          <ServicesP>
          By developing and supporting programs that address various socio-economic challenges facing the
communities where we work e.g., HIV/AIDs programming, environmental management etc. We also
support implementation of programs initiated by local governments, faith-based organizations and
donors as strategic implementation partners leveraging the experience and expertise we have in
project management, including rapid needs assessments as well as Monitoring and Evaluation.
          </ServicesP>
          </ServicesCard>

        </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;