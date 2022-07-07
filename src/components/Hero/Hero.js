import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        A passionate WEB developer from Isreal <br />
        🌱 I’m currently learning Fullstack Web-Development
        <br />
        📫 How to reach me Boaz209@gmail.com
        <br />
        📄 Know about my experiences
        <br />
      </SectionText>
      <Button onClick={() => (window.location = "https://github.com/bozik209")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
