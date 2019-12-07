import React from 'react';
import ReactDOM from 'react-dom';
import TopicPage from './TopicPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TopicPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});