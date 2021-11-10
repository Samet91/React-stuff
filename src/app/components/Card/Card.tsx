import React from 'react';
import styled from 'styled-components';
import Tags from '../Tags/Tags';

type CardProps = {
  name: string;
  description: string;
  categories?: string[];
};

export default function Card({
  name,
  description,
  categories,
}: CardProps): JSX.Element {
  return (
    <CardBody>
      <H2>{name}</H2>
      <p>{description}</p>
      {categories &&
        categories?.map((category) => <Tags key={category}>{category}</Tags>)}
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

const H2 = styled.h2`
  font-size: 20px;
`;
