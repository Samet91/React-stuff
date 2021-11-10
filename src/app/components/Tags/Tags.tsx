import React from 'react';
import styled from 'styled-components';

export default function Card(): JSX.Element {
  return (
    <div>
      <Article>
        <P>category</P>
        <P>category</P>
      </Article>
    </div>
  );
}

const Article = styled.span`
  color: #000;
  display: flex;
  margin-top: 30px;
`;

const P = styled.section`
  color: #000;
  border: solid 2px;
  border-color: white;
  border-radius: 7px;
  margin: 5px 5px 10px 0;
  padding: 3px;
  background-color: red;
`;
