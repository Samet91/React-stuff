import React from 'react';
import Card from './Card';

export default {
  title: 'Component/Card',
  component: Card,
};

const exampleContent = {
  name: 'old',
  description: 'You could use..',
};

const exampleContentDetail = {
  name: 'old',
  description: 'You could use..',
  categories: ['toiletry', 'tool', 'every day use', 'plastic']
};

export const Regular = (): JSX.Element => <Card content={exampleContent} />
export const Detail = (): JSX.Element => <Card content={exampleContentDetail} />
