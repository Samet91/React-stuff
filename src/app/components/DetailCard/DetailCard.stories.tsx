import React from 'react';
import DetailCard from './DetailCard';

export default {
  title: 'Component/DetailCard',
  component: 'DetailCard',
};

export const Detail = (): JSX.Element => (
  <DetailCard 
  name={'Alex'}
  description={'big'}
  categories={['small', 'big', 'smaller']} 
  />
);
