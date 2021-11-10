import React from 'react';
import styled from 'styled-components';
import Tags from '../Tags/Tags';

type CardProps = {
  content: {
    name: string;
    description: string;
    categories?: string[];
  };
};

export default function Card({ content }: CardProps): JSX.Element {
  return (
    <CardBody>
      <h2>{content.name}</h2>
      <p>{content.description}</p>
      {content.categories?.map((category) => (
      <Tags>{category}</Tags>
      ))}
    </CardBody>
  );
}

const CardBody = styled.article`
  color: #000;
  background: linear-gradient(180deg, #9e93c6, #fbff0a);
  font-size: 0.8em;
  padding: 0.8em 2em;
  border: none;
  border-radius: 0.4em;
  margin: 20px;
`;
