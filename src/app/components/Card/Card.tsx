import React from 'react';
import styled from 'styled-components';
import Tags from '../Tags/Tags';

export default function Card(): JSX.Element {
  return (
    <div>
      <Div>
        <H4>regular</H4>
        <Section>
          <H3>title</H3>
          <P>description</P>
        </Section>
        <H4>detail</H4>
        <Section>
          <H3>title</H3>
          <P>description</P>
          <Tags />
        </Section>
      </Div>
    </div>
  );
}

const Section = styled.section`
  color: #000;
  background: linear-gradient(180deg, #9e93c6, #fbff0a);
  font-size: 0.8em;
  padding: 0.8em 2em;
  border: none;
  border-radius: 0.4em;
  margin: 20px;
`;

const P = styled.p`
  color: #000;
`;

const H3 = styled.h3`
  color: #000;
`;

const H4 = styled.h4`
  color: #000;
  margin-left: 30px;
  margin-bottom: -10px;
`;

const Div = styled.div`
  border: solid 2px;
  margin: 20px;
  border-radius: 10px;
  background-color: #7664b9;
`;
