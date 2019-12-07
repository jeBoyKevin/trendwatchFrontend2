import React from 'react';
import ReactDOM from 'react-dom';
import TrendingTopics from './TrendingTopics';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TrendingTopics />, div);
  ReactDOM.unmountComponentAtNode(div);
});