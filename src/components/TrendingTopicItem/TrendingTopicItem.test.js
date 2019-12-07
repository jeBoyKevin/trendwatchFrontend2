import React from 'react';
import ReactDOM from 'react-dom';
import TrendingTopicItem from './TrendingTopicItem';

it('renders without crashing', () => {
  const div = document.createElement('div');

  let itemTest = {};

  itemTest.id = 4;
  itemTest.name = "Qlimax 2020";
  itemTest.updates = 121;

  ReactDOM.render(<TrendingTopicItem  topic={itemTest}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});