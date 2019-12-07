import React from 'react';
import ReactDOM from 'react-dom';
import TopicPageBanner from './TopicPageBanner';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TopicPageBanner />, div);
  ReactDOM.unmountComponentAtNode(div);
});