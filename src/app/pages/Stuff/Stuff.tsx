import React from 'react';
import { useParams } from 'react-router';

export default function Stuff(): JSX.Element {
  const params = useParams();
  return <h2> Stuff: {params.stuff}</h2>;
}
