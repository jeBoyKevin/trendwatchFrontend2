import React from 'react';
import ReactDOM from 'react-dom';
import TopicPagePosts from './TopicPagePosts';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TopicPagePosts />, div);
  ReactDOM.unmountComponentAtNode(div);
});