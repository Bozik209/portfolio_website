import React from "react";
import { DiFirebase, DiReact, DiCode } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've work with a range a Technologies in web development world. From
      back-end to Design
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>Fornt-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js  <br/>
            Css  <br/>

          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem'/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node <br/>
            Monngo
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCode size='3rem'/>
        <ListContainer>
          <ListTitle>Language </ListTitle>
          <ListParagraph>
            Experience with <br/>
            C <br/>
            Java <br/>
            Python <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
