import React from 'react';
import Tags from './Tags';

export default {
  title: 'Component/Tags',
  component: Tags,
};

export const Regular = (): JSX.Element => <Tags>Text</Tags>;
export const Collectible = (): JSX.Element => <Tags>Collectible</Tags>;
