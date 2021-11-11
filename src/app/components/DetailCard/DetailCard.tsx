import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Tags from '../Tags/Tags';

type DetailCardProps = {
  id: number;
  name: string;
  description: string;
  categories?: string[];
};

export default function DetailCard({
  id,
  name,
  description,
  categories,
}: DetailCardProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <ArticleStyle>
      <button onClick={() => navigate(-1)}>Back</button>
      <p>{id}</p>
      <H2>{name}</H2>
      <p>{description}</p>
      <ul>
        {categories?.map((category) => (
          <Tags key={category}>{category}</Tags>
        ))}
      </ul>
    </ArticleStyle>
  );
}

const ArticleStyle = styled.article`
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
